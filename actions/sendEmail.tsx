'use server'

import { Resend } from 'resend';

export async function sendEmail(formData: FormData) {
  console.log("running on server");
  console.log(formData.get("senderEmail"));
  console.log(formData.get("message"));

  const resend = new Resend(process.env.RESEND_API_KEY);
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!message || typeof message !== "string") {
    return {
      error: "invalid message"
    }
  }

  if (!senderEmail || typeof senderEmail !== "string") {
    return {
      error: "invalid senderEmail"
    }
  }

  const { data } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['portfolio.void989@passmail.com'],
    subject: 'Portfolio Kontaktformular-Anfrage',
    replyTo: senderEmail,
    html: message
  });

  console.log(data);
}