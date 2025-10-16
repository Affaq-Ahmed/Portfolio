'use server';

import { z } from 'zod';
import { ContactFormSchema } from './schemas';
import nodemailer from 'nodemailer';
import ContactFormEmail from '@/emails/contact-form-email';

type ContactFormInputs = z.infer<typeof ContactFormSchema>;

export const sendEmail = async (data: ContactFormInputs) => {
  const result = ContactFormSchema.safeParse(data);

  if (result.error) {
    return { error: result.error.format() };
  }

  const { name, email, message } = result.data;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      cc: [process.env.GMAIL_USER],
      replyTo: email,
      subject: 'Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif; background-color: #f8f9fa; padding: 40px 20px;">
          <table width="100%" max-width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07); overflow: hidden; margin: 0 auto;"> 
            <tr>
              <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
                <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">New Message Received</h1>
                <p style="margin: 8px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 14px;">Someone reached out to you</p>
              </td>
            </tr>

            <tr>
              <td style="padding: 30px; border-bottom: 1px solid #e5e7eb;">
                <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">From</p>
                <p style="margin: 0 0 20px 0; color: #1f2937; font-size: 18px; font-weight: 700;">${name}</p>
                
                <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Email</p>
                <p style="margin: 0; color: #667eea; font-size: 14px;"><a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a></p>
              </td>
            </tr>

            <tr>
              <td style="padding: 30px;">
                <p style="margin: 0 0 12px 0; color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
                <div style="background-color: #f3f4f6; border-left: 4px solid #667eea; padding: 20px; border-radius: 6px;">
                  <p style="margin: 0; color: #1f2937; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                </div>
              </td>
            </tr>

            <tr>
              <td style="background-color: #f9fafb; padding: 20px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
                <p style="margin: 0; color: #9ca3af; font-size: 12px;">This is an automated message from your contact form.</p>
              </td>
            </tr>
          </table>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return { success: true };
  } catch (error) {
    console.log(error);
    return { error };
  }
};
