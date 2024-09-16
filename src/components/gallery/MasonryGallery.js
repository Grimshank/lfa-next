"use client";

import Link from "next/link";
import Masonry from 'react-masonry-css';
import { motion } from 'framer-motion';
import { track } from '@vercel/analytics';
import Image from 'next/image';

function MasonryGallery({works}) {
  function handleWorkClicked(work) {
    track('Work Engagement', {title: work.title});
  }

  return (
    <Masonry
      breakpointCols={{default: 3, 1100: 2, 700: 1}}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {
        works.map((work, index) => (
          <div key={index} className="overflow-hidden flex flex-col w-full">
            <motion.div
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
              onClick={() => handleWorkClicked(work)}
            >
              <Link href={`/works/${work.id}`}>
                <Image src={work.src} alt={`Gallery image ${index + 1}`} width={512} height={512} className="w-full h-auto"/>
              </Link>
            </motion.div>
            <div className="w-full flex flex-col items-start justify-normal pt-3  ">
              <div className="font-bold">{work.title}</div>
              <div>{work.dimensions}</div>
              <div>{work.medium} on {work.substrate}</div>
              <div>{work.price}</div>
              {
                work.sold ? (
                  <div className="flex flex-row">
                    <Image src="/sold_icon.jpg" width={22} height={16} alt="sold" />
                    <div>SOLD</div>
                  </div>
                ) : (
                  <div>available</div>
                )
              }
            </div>
          </div>
        ))
      }
    </Masonry>
  )
}

export default MasonryGallery;
