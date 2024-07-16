import mailchimp from '@mailchimp/mailchimp_marketing'

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
});

export async function POST(request) {
  const { email } = await request.json();

  if (!email) {
   return new Response(JSON.stringify({ error: 'E-mail is required'}));
  }

  try {
    const res = await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      status: 'subscribed',
    });

    return new Response(JSON.stringify({ res }));
  } catch (err) {
    return new Response(JSON.stringify({ error: JSON.parse(err.response.text) }));
  }
}
