'use server'

import ContactFormEmail from '@/email/contact-form-email';
import { getErrorMessage, validateString } from '@/lib/utils';
import React from 'react';
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
    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: recipientEmail as string,
      subject: 'Portfolio Contact Request',
      replyTo: senderEmail as string,
      // html: message as string
      // react: <ContactFormEmail message={message as string} senderEmail={senderEmail as string} /> // same as line below
      react: React.createElement(ContactFormEmail, { message: message as string, senderEmail: senderEmail as string })
    });
    console.log('resend response', data);
    return { data };
  } catch (error) {
    return { error: getErrorMessage(error) }
  }
}