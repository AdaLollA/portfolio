'use server'

import { validateString } from '@/lib/utils';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  const recipientEmail = process.env.RESEND_RECEIVER;

  // simple server-side validation
  if (!validateString(senderEmail, 500)) { return { error: 'invalid senderEmail' } }
  if (!validateString(message, 5000)) { return { error: 'invalid message' } }
  if (!validateString(recipientEmail, 500)) { return { error: 'invalid recipient email' } }

  try {
    const { data } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: recipientEmail as string,
      subject: 'Portfolio Contact Request',
      replyTo: senderEmail as string,
      html: message as string
    });
    console.log('resend response', data);
    return data;
  } catch (error) {
    console.log(error);
  }
  return { error: 'error while sending email' }
}