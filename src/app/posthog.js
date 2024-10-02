import {PostHog} from 'posthog-node';

export default function PostHogClient() {
  return new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    personalApiKey: process.env.POSTHOG_API_KEY,
  });
}
