import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import WetPaintButton from '@/components/WetPaintButton';

export default function FeaturedArtSection({ work }) {
  return (
    <div className="my-8 grid grid-rows-1 grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col items-center justify-center">
        <Image src={work.src} alt={work.title} width={256} height={256}/>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1
          className="text-3xl font-medium mx-auto mb-4"
          style={{fontFamily: 'mrs-eaves-roman-small-caps'}}
        >
          Featured Art
        </h1>
        <div>
          Check out a selection of Sean&apos;s current works
        </div>
        <Link href="/works" className="mt-4">
          <WetPaintButton text='SEAN LECRONE ART' />
        </Link>
      </div>
    </div>
  )
}
