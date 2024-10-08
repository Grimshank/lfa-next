import React from 'react';
import {getWork, getWorks} from '@/lib/contentful';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import PrevNext from '@/components/PrevNext';
import SmallHeader from '@/components/SmallHeader';
import WetPaintButton from '@/components/WetPaintButton';
import PostHogClient from "@/app/posthog";

function getPrevAndNext(id, works) {
  const index = works.findIndex(cur => cur.id === id);

  const nextIndex = index + 1 >= works.length ? 0 : index + 1;
  const prevIndex = index - 1 < 0 ? works.length - 1 : index - 1;

  return {
    previous: works[prevIndex],
    next: works[nextIndex],
  };
}

async function getThankYouFlag() {
  const posthog = PostHogClient();
  return await posthog.getFeatureFlagPayload('thankYou');
}

export default async function Work({ params }) {
  const { id } = params;

  const work = await getWork(id);
  const works = await getWorks();

  const { previous, next } = getPrevAndNext(work.id, works);

  const thankYou = await getThankYouFlag();

  return (
    <div>
      <SmallHeader />
      <div
        className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2"
      >
        <div>
          <Link href={`/zoom/${id}`}>
            <Image src={work.src} alt={work.title} width={1024} height={1024}/>
          </Link>
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
              <div className="flex flex-row">
                <Image src="/sold_icon.jpg" width={22} height={16} alt="sold"/>
                <div>SOLD</div>
              </div>
            ) : (
              <div>
                <div>available</div>
              </div>
            )
          }
          {
            thankYou && thankYou.discount && !work.sold ? (
              <div>{`$${Number(work.price - (work.price * thankYou.discount)).toFixed(2)} - ${100 * thankYou.discount}% discount applied`}</div>
            ) : (
              <div>{`$${work.price}.00`}</div>
            )
          }
          {
            !work.sold ? (
              <div className="mt-4 mb-20">
                <Link href={`/inquire/${work.id}`}>
                  <WetPaintButton text='CONTACT SEAN ABOUT THIS ARTWORK' />
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
