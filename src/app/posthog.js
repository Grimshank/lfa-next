import { PostHog } from 'posthog-node';

export default function PostHogClient() {
  console.log('PostHogClient()');
  const postHogClient = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  });
  postHogClient.on('error', (err) => {
    console.log('!!!!!!!!!')
    console.error(err.response);
    console.log('*********')
  })
  return postHogClient;
}
