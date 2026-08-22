import nodemailer from 'nodemailer';

interface SendEmailParams {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail({ name, email, subject, message }: SendEmailParams) {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_EMAIL_TO || 'hello@devvx.in';
  const from = process.env.CONTACT_EMAIL_FROM || `"Devvx Portfolio" <noreply@devvx.in>`;

  // Development/Mock Mode when SMTP credentials are not supplied
  if (!host || !user || !pass) {
    console.log('\n================== [DEMO/MOCK EMAIL DISPATCH] ==================');
    console.log(`To: ${to}`);
    console.log(`From: ${from}`);
    console.log(`Reply-To: "${name}" <${email}>`);
    console.log(`Subject: ${subject}`);
    console.log(`Message:\n${message}`);
    console.log('=================================================================\n');
    return {
      success: true,
      mode: 'mock',
      message: 'Email simulated in development mode (no SMTP credentials configured).',
    };
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });

  const htmlContent = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e4e4e7; border-radius: 12px; background-color: #ffffff;">
      <div style="border-bottom: 1px solid #f4f4f5; padding-bottom: 16px; margin-bottom: 20px;">
        <h2 style="margin: 0; color: #18181b; font-size: 20px; font-weight: 700;">New Contact Form Message</h2>
        <p style="margin: 4px 0 0 0; color: #71717a; font-size: 14px;">Origin: devvx.in Portfolio Website</p>
      </div>

      <div style="margin-bottom: 16px;">
        <p style="margin: 0 0 4px 0; font-size: 12px; font-weight: 600; color: #71717a; text-transform: uppercase;">From</p>
        <p style="margin: 0; font-size: 16px; color: #18181b;"><strong>${escapeHtml(name)}</strong> &lt;<a href="mailto:${escapeHtml(email)}" style="color: #2563eb; text-decoration: none;">${escapeHtml(email)}</a>&gt;</p>
      </div>

      <div style="margin-bottom: 16px;">
        <p style="margin: 0 0 4px 0; font-size: 12px; font-weight: 600; color: #71717a; text-transform: uppercase;">Subject</p>
        <p style="margin: 0; font-size: 16px; color: #18181b;">${escapeHtml(subject)}</p>
      </div>

      <div style="margin-bottom: 24px;">
        <p style="margin: 0 0 6px 0; font-size: 12px; font-weight: 600; color: #71717a; text-transform: uppercase;">Message</p>
        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; font-size: 15px; line-height: 1.6; color: #334155; white-space: pre-wrap;">${escapeHtml(message)}</div>
      </div>

      <div style="border-top: 1px solid #f4f4f5; padding-top: 16px; font-size: 12px; color: #a1a1aa;">
        Sent via devvx.in portfolio contact form at ${new Date().toUTCString()}
      </div>
    </div>
  `;

  // Security: Sanitize all inputs against SMTP header injection (strip CR/LF)
  const cleanName = name.replace(/[\r\n]/g, ' ').trim().slice(0, 100);
  const cleanEmail = email.replace(/[\r\n]/g, '').trim().slice(0, 255);
  const cleanSubject = (subject || `Portfolio Inquiry from ${cleanName}`).replace(/[\r\n]/g, ' ').trim().slice(0, 150);

  const info = await transporter.sendMail({
    from,
    to,
    replyTo: `"${cleanName}" <${cleanEmail}>`,
    subject: `[devvx.in] ${cleanSubject} - from ${cleanName}`,
    text: `Name: ${cleanName}\nEmail: ${cleanEmail}\nSubject: ${cleanSubject}\n\nMessage:\n${message}`,
    html: htmlContent,
  });

  return {
    success: true,
    mode: 'smtp',
    messageId: info.messageId,
  };
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
