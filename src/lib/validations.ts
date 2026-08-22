import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters.' })
    .max(100, { message: 'Name cannot exceed 100 characters.' })
    .trim(),
  email: z
    .string()
    .email({ message: 'Please provide a valid email address.' })
    .max(255, { message: 'Email cannot exceed 255 characters.' })
    .trim()
    .toLowerCase(),
  subject: z
    .string()
    .max(150, { message: 'Subject cannot exceed 150 characters.' })
    .optional()
    .default('New Project Inquiry - devvx.in'),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' })
    .max(3000, { message: 'Message cannot exceed 3000 characters.' })
    .trim(),
  _gotcha: z
    .string()
    .max(0, { message: 'Spam detected.' })
    .optional()
    .or(z.literal('')),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
