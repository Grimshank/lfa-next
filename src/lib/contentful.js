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

const getEntryById = async (id) => {
  const entry = await client.getEntry(id);
  return entry;
}

export const getWork = async (id) => {
  const work = await getEntryById(id);
  return {
    id: work.sys.id,
    src: `https:${work.fields.image.fields.file.url}`,
    title: work.fields.title,
    width: work.fields.image.fields.file.details.image.width,
    height: work.fields.image.fields.file.details.image.height,
    dimensions: `${work.fields.height}" x ${work.fields.width}"`,
    medium: work.fields.medium,
    substrate: work.fields.substrate,
    framed: work.fields.framed,
    sold: work.fields.sold,
    price: `$${work.fields.price}.00`,
    category: work.fields.category,
  };
}

export const getWorks = async () => {
  const results = await getEntriesByType('work');

  const works = results.map((work, idx) =>  {
    //console.log(JSON.stringify(work, null, 2));

    return {
      id: work.sys.id,
      src: `https:${work.fields.image.fields.file.url}`,
      title: work.fields.title,
      width: work.fields.image.fields.file.details.image.width,
      height: work.fields.image.fields.file.details.image.height,
      dimensions: `${work.fields.height}" x ${work.fields.width}"`,
      medium: work.fields.medium,
      substrate: work.fields.substrate,
      framed: work.fields.framed,
      sold: work.fields.sold,
      price: `$${work.fields.price}.00`,
      category: work.fields.category,
    };
  });

  return works;
}
