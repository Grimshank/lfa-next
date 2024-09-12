"use client";

import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

import 'swiper/swiper-bundle.css';
import {track} from "@vercel/analytics";

function Slider({ works}) {
  function handleWorkClicked(work) {
    track('Slider Engagement', {title: work.title});
  }

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
    >
      {
        works.map((work, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col justify-center items-center h-[175px] md:h-[500px]">
              <img
                onClick={() => handleWorkClicked(work)}
                className="h-[175px] md:h-[400px]" src={work.src} alt={work.title}
              />
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
}

export default Slider;
