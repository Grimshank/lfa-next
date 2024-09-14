import React from 'react';
import {getWork, getWorks} from '@/lib/contentful';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import PrevNext from '@/components/PrevNext';

function getPrevAndNext(id, works) {
  const index = works.findIndex(cur => cur.id === id);

  const nextIndex = index + 1 >= works.length ? 0 : index + 1;
  const prevIndex = index - 1 < 0 ? works.length - 1 : index - 1;

  return {
    previous: works[prevIndex],
    next: works[nextIndex],
  };
}

export default async function Work({ params }) {
  const { id } = params;

  const work = await getWork(id);
  const works = await getWorks();

  const { previous, next } = getPrevAndNext(work.id, works);

  return (
    <div>
      <div
        className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 mt-20"
      >
        <div>
          <Image src={work.src} alt={work.title} width={1024} height={1024}/>
        </div>
        <div className="md:ml-8 mt-4 md:mt-0">
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
              <div>
                <div>available</div>
              </div>
            )
          }
          <div className="mt-3">
            {work.price}
          </div>
          {
            !work.sold ? (
              <div className="mt-4">
                <Link className="rounded text-white p-2 bg-[#ED9238]" href={`/inquire/${work.id}`}>
                  CONTACT SEAN ABOUT THIS ARTWORK
                </Link>
              </div>
            ) : null
          }
          <div className="mt-6">
            <PrevNext prev={previous} next={next} />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
