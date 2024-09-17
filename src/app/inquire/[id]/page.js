import React from 'react';
import {getWork} from '@/lib/contentful';
import Image from 'next/image';
import InquiryForm from '@/components/InquiryForm';
import SmallHeader from '@/components/SmallHeader';

export default async function Inquire({ params }) {
  const { id } = params;

  const work = await getWork(id);

  return (
    <div
      className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 mt-20"
    >
      <SmallHeader />
      <div>
        <Image src={work.src} alt={work.title} width={1024} height={1024}/>
      </div>
      <div className="md:ml-8">
        <InquiryForm title={work.title} />
      </div>
    </div>
  );
}
