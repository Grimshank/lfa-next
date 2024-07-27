import { createClient } from 'contentful';

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

  const works = results.map((work, idx) =>  {
    console.log(JSON.stringify(work, null, 2));

    return {
      id: idx,
      src: `https:${work.fields.image.fields.file.url}`,
    };
  });

  return works;
}
