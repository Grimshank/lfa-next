"use client";

import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import Link from 'next/link';
import {track} from '@vercel/analytics';
import Image from 'next/image';

import 'swiper/swiper-bundle.css';

function Slider({ works }) {
  function handleWorkClicked(work) {
    track('Slider Engagement', {title: work.title});
  }

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
    >
      {
        works.map((work, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col justify-center items-center h-[175px] md:h-[500px]">
              <Link href={`/works/${work.id}`}>
                <Image
                  onClick={() => handleWorkClicked(work)}
                  src={work.src} alt={work.title}
                  width={425}
                  height={425}
                />
              </Link>
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
}

export default Slider;
