'use server'

import { validateString } from '@/lib/utils';
import { Resend } from 'resend';

export async function sendEmail(formData: FormData) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) { return { error: 'invalid senderEmail' } }
  if (!validateString(message, 5000)) { return { error: 'invalid message' } }

  try {
    const { data } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['portfolio.void989@passmail.com'],
      subject: 'Portfolio Contact-Request',
      replyTo: senderEmail as string,
      html: message as string
    });
    console.log('resend response', data);
    return data;
  } catch (error) {
    console.log(error);
  }
  return { error: 'error while sending email'}
}