import React from 'react';
import {getWork} from '@/lib/contentful';
import Image from 'next/image';

export default async function Work({ params }) {
  const { id } = params;

  const work = await getWork(id);

  return (
    <div
      className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 mt-12 md:mt-0"
    >
      <div>
        <Image src={work.src} alt={work.title} width={1024} height={1024}/>
      </div>
      <div className="md:ml-8">
        <h1
          className="text-4xl font-medium"
          style={{fontFamily: 'mrs-eaves-roman-small-caps'}}
        >
          {work.title}
        </h1>
        <div>
          {work.medium} on {work.substrate}
        </div>
        <div>
          {work.dimensions}
        </div>
        {
          work.sold ? (
            <div>SOLD</div>
          ) : (
            <div>available</div>
          )
        }
        <div className="mt-3">
          {work.price}
        </div>
      </div>
    </div>
  );
}
