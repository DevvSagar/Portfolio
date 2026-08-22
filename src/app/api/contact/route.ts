import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations';
import { checkRateLimit } from '@/lib/rate-limit';
import { sendContactEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    // 1. Content-Type validation
    const contentType = request.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      return NextResponse.json(
        { success: false, message: 'Invalid Content-Type. Expected application/json.' },
        { status: 415 }
      );
    }

    // 2. Payload size safeguard (max 50KB)
    const contentLength = parseInt(request.headers.get('content-length') || '0', 10);
    if (contentLength > 50 * 1024) {
      return NextResponse.json(
        { success: false, message: 'Request payload exceeds the maximum allowed size.' },
        { status: 413 }
      );
    }

    // 3. IP identification & Rate Limiting
    const forwardedFor = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const clientIp = (forwardedFor ? forwardedFor.split(',')[0].trim() : realIp) || '127.0.0.1';

    const maxRequests = parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '5', 10);
    const windowMinutes = parseInt(process.env.RATE_LIMIT_WINDOW_MINUTES || '15', 10);
    const windowMs = windowMinutes * 60 * 1000;

    const rateLimit = checkRateLimit(`contact:${clientIp}`, maxRequests, windowMs);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          success: false,
          message: 'Too many messages sent. Please wait a few minutes before trying again.',
        },
        {
          status: 429,
          headers: {
            'Retry-After': Math.ceil((rateLimit.resetTime - Date.now()) / 1000).toString(),
          },
        }
      );
    }

    // 4. Parse JSON body
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, message: 'Malformed JSON payload.' },
        { status: 400 }
      );
    }

    // 3. Honeypot check (anti-bot trap)
    if (body._gotcha && body._gotcha.trim().length > 0) {
      // Silently accept to mislead spammers
      return NextResponse.json(
        { success: true, message: 'Message received.' },
        { status: 200 }
      );
    }

    // 4. Validate with Zod
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      const fieldErrors = validationResult.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed. Please check the form fields.',
          errors: fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = validationResult.data;

    // 5. Send email via Nodemailer / fallback
    const emailResult = await sendContactEmail({
      name,
      email,
      subject: subject || `Portfolio Inquiry from ${name}`,
      message,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Your message has been sent successfully. I will get back to you soon.',
        mode: emailResult.mode,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('Contact API Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown server error';
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while sending your message. Please try again later.',
        error: process.env.NODE_ENV === 'development' ? errorMessage : undefined,
      },
      { status: 500 }
    );
  }
}
