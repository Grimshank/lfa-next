import { sql } from '@vercel/postgres';

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

    return new Response(JSON.stringify({ }));
  } catch (err) {
    return new Response(JSON.stringify({ error: JSON.parse(err.message) }));
  }
}
