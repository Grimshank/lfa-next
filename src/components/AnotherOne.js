'use client';

import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CustomSlider1 = ({ works }) => {
  return (
    <div>
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
            <SwiperSlide
              key={index}
              className='bg-red-200 !flex justify-center items-center'
            >
              <div
                className='border-2 border-blue-500 rounded-lg overflow-hidden w-[200px] h-[300px] flex justify-center items-center'>
                <img src={work.src} alt={work.title} className="w-full h-auto"/></div>
            </SwiperSlide>
          ))
        }

        {
          /*
          <SlideNavButtons />
          */
        }
      </Swiper>
    </div>
  );
};

export default CustomSlider1;
