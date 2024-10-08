"use client";

import React, {useState} from 'react';
import Link from "next/link";
import Masonry from 'react-masonry-css';
import { motion } from 'framer-motion';
import { track } from '@vercel/analytics';
import Image from 'next/image';
import { useFeatureFlagPayload } from 'posthog-js/react'
import CategoryDropDown from '@/components/CategoryDropDown';

function MasonryGallery({works, categories}) {
  const [category, setCategory] = useState('all');

  const thankYou = useFeatureFlagPayload('thankYou');

  function handleWorkClicked(work) {
    track('Work Engagement', {title: work.title});
  }

  // Function to update the state
  const updateCategory = (category) => {
    console.log(`setting category to ${category}`)
    setCategory(category);
  };

  return (
    <div className="flex flex-col items-center">
      {
        thankYou ? (
          <div className="mt-6 mx-6 p-4 border rounded-2xl bg-[#5280BB] text-white">
            <h1
              className="text-3xl font-medium mx-auto mb-4"
              style={{fontFamily: 'mrs-eaves-roman-small-caps'}}
            >
              Special Art Sale – 10% Off All Artwork
            </h1>
            <p>
              To my incredible collectors, I want to express my gratitude for your continued
              support and appreciation of my work. As a special thank you, I’m offering a 10%
              discount on all available artwork for a limited time. This is my way of showing
              appreciation to those who have been part of my artistic journey.
            </p>
            <p className="pt-4">
              Whether you&apos;re adding to your collection or acquiring your first piece, now is
              the perfect time!
            </p>
            <p className="pt-4">
              Thank you for being a part of my creative world!
            </p>
          </div>
        ) : null
      }
      <CategoryDropDown categories={categories} category={category} updateCategory={updateCategory} />
      <Masonry
        breakpointCols={{default: 3, 1100: 2, 700: 1}}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {
          works.map((work, index) => work.category === category || category === 'all' ? (
            <div key={index} className="overflow-hidden flex flex-col w-full">
              <motion.div
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
                {
                  thankYou && thankYou.discount && !work.sold ? (
                    <div>{`$${Number(work.price - (work.price * thankYou.discount)).toFixed(2)} - ${100 * thankYou.discount}% discount applied`}</div>
                  ) : (
                    <div>{`$${work.price}.00`}</div>
                  )
                }
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
          ) : null)
        }
      </Masonry>
    </div>
  )
}

export default MasonryGallery;
