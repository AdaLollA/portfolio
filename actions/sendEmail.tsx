'use server'

import { Resend } from 'resend';

interface EmailTemplateProps {
  firstName: string;
}

export async function sendEmail(formData: FormData) {
  console.log("running on server");
  console.log(formData.get("senderEmail"));
  console.log(formData.get("message"));

  'use server';

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['portfolio.void989@passmail.com'],
    subject: 'Portfolio Kontaktformular',
    replyTo: formData.get("senderEmail"),
    html: formData.get("message")
  });

  console.log(data);
}