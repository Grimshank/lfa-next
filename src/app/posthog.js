import { PostHog } from 'posthog-node';

export default function PostHogClient() {
  const postHogClient = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    personalApiKey: process.env.POSTHOG_API_KEY,
  });
  /*
  const postHogClient = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  });
  */
  console.log('turing on debug for posthog');
  postHogClient.debug(true);
  postHogClient.on('error', (err) => {
    console.log('!!!!!!!!!')
    console.error(err.response);
    console.log('*********')
  })
  return postHogClient;
}
