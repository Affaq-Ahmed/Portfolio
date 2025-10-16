'use server';

import { z } from 'zod';
import { ContactFormSchema } from './schemas';
import { Resend } from 'resend';
import ContactFormEmail from '@/emails/contact-form-email';

type ContactFormInputs = z.infer<typeof ContactFormSchema>;
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (data: ContactFormInputs) => {
  const result = ContactFormSchema.safeParse(data);

  if (result.error) {
    return { error: result.error.format() };
  }

  try {
    const { name, email, message } = result.data;
    await resend.emails.send({
      from: 'affaqahmed165@gmail.com',
      to: [email],
      cc: ['affaqahmed165@gmail.com'],
      subject: 'Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      react: await ContactFormEmail({ name, email, message }),
    });

    return { success: true };
  } catch (error) {
    console.log(error);
    return { error };
  }
};
