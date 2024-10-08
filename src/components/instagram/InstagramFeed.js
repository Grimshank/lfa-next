import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const getLastFourInstagramPosts = async () => {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_TOKEN}`

  try {
    const data = await fetch(url);
    const feed = await data.json();

    return feed.data.slice(0, 4);
  } catch (err) {
    console.error(`could not fetch instagram feed: ${err.message}`);
    return [];
  }
}

export default async function InstagramFeed() {
  const lastFourInstagramPosts = await getLastFourInstagramPosts();

  return (
    <div className="w-full px-8 py-12 bg-[#FFFFFF] grid grid-cols-1 items-center justify-center">
      <h1
        className="text-3xl font-medium mx-auto mb-4"
        style={{fontFamily: 'mrs-eaves-roman-small-caps'}}
      >
        Follow Sean&apos;s adventures on Instagram
      </h1>
      <div
        className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 items-center justify-items-center">
        {
          lastFourInstagramPosts.map((post) => {
            return (
              <div key={post.id} className="m-2">
                <Link href={post.permalink}>
                  <Image src={post.media_url} alt={post.id} width={512} height={512}/>
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

