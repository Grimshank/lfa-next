"use client";

import React, {useState} from 'react';
import { motion } from 'framer-motion'

import FiChevronLeft from "@heroicons/react/24/solid/ChevronLeftIcon";
import FiChevronRight from "@heroicons/react/24/solid/ChevronRightIcon";
import { BsDot } from "react-icons/bs"

function AnotherCarousel({ works }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((pv) => (pv === 0 ? works.length - 1 : pv - 1));
  }

  const nextSlide = () => {
    setCurrentIndex((pv) => (pv === works.length - 1 ? 0 : pv + 1));
  }

  return (
    <div className="px-14 py-14">
      <h1 className="text-3xl font-medium w-[50%] m-auto text-center">
        Welcome to LeCrone Fine Art, home of artist and instructor Sean P. LeCrone.
      </h1>
      <div className="relative flex flex-col items-center py-20">
        <div className="overflow-hidden w-[20rem] md:w-[90rem] h-[20rem]">
          <motion.div className="flex" initial={{x: 0}} animate={{x: -currentIndex * 320 }}>
            {
              works.map((work, index) => (
                <motion.div
                  className="p-2 min-w-[20rem] h-[20rem]"
                  key={index}
                >
                  <img src={work.src} className="w-full h-full object-cover" />
                </motion.div>
              ))
            }
          </motion.div>
        </div>
        <div className="flex flex-row w-full justify-between mt-6">
          <button className="bg-gray-100 p-3 rounded-full shadow transition-all hover:opacity-70" onClick={prevSlide}>
            <FiChevronLeft className="w-5 h-5"/>
          </button>
          <div className="flex flex-row gap-1">
            {
              works.map((_, index) => (
                <BsDot onClick={() => setCurrentIndex(index)} key={index} className={`cursor-pointer text-2xl ${index === currentIndex ? 'text-gray-800' : 'text-gray-400'}`} />
              ))
            }
          </div>
          <button className="bg-gray-100 p-3 rounded-full shadow transition-all hover:opacity-70" onClick={nextSlide}>
            <FiChevronRight className="w-5 h-5"/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AnotherCarousel;
