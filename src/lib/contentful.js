import { createClient } from 'contentful';
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

const createContentfulClient = () => {
  return createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });
}

const client = createContentfulClient();

const getEntriesByType = async (type) => {
  const response = await client.getEntries({
    content_type: type,
  });
  return response.items;
}

export const getWorks = async () => {
  const results = await getEntriesByType('work');
  console.log(JSON.stringify(results, null, 2));
}