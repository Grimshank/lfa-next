import mailchimp from '@mailchimp/mailchimp_marketing'
import nodemailer from 'nodemailer';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USERNAME,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

function sendMail(email){
  return new Promise((resolve, reject) => {
    const mailerOptions = {
      from: 'no.reply@lecronefineart.com',
      to: 'slecrone@gmail.com',
      subject: 'Newsletter Signup',
      text: `Someone with the email address [${email}] has signed up for the newsletter!`,
    };

    transporter.sendMail(mailerOptions, (err) => {
      if (err) {
        console.error(`could not send signup email: ${err.message}`);
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

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

    await sendMail(email);

    return new Response(JSON.stringify({ res }));
  } catch (err) {
    return new Response(JSON.stringify({ error: JSON.parse(err.response.text) }));
  }
}
