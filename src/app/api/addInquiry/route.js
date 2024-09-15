import { sql } from '@vercel/postgres';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USERNAME,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

export async function POST(request) {
  const { title, name, email, phone, comments } = await request.json();

  if (!title) {
    return new Response(JSON.stringify({ error: 'Title is required'}));
  }

  if (!name) {
    return new Response(JSON.stringify({ error: 'name'}));
  }

  if (!email) {
    return new Response(JSON.stringify({ error: 'E-mail is required'}));
  }

  if (!comments) {
    return new Response(JSON.stringify({ error: 'Comments are required'}));
  }

  try {
    await sql`INSERT INTO Inquiries (title, name, email, phone, comments) VALUES (${title}, ${name}, ${email}, ${phone}, ${comments});`;

    const mailerOptions = {
      from: 'no-reply@lecronefine.com',
      to: 'slecrone@gmail.com',
      subject: `Customer inquiry: '${title}'`,
      text: `A customer has inquired about '${title}'.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nComments: ${comments}`,
    };

    transporter.sendMail(mailerOptions, (err, info) => {
      if (err) {
        console.info(`could not send inquiry email: ${err.message}`);
      }
    });

    return new Response(JSON.stringify({ }));
  } catch (err) {
    return new Response(JSON.stringify({ error: JSON.parse(err.message) }));
  }
}
