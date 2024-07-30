"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

import ArrowLeftIcon from '@heroicons/react/24/solid/ArrowLeftIcon';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const currentImage = images[currentIndex];

  return (
    <div className="flex p-3 md:p-1 items-center justify-center w-full">
      <button
        onClick={handlePrev}
      >
        <ArrowLeftIcon className="h-12 w-12 text-blue-500"/>
      </button>
      <div className="relative w-[200p] h-[200px] md:w-[500px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <motion.img
          key={currentImage.src}
          src={currentImage.src}
          alt="Artwork"
          className="object-cover w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <button
        onClick={handleNext}
      >
        <ArrowRightIcon className="h-12 w-12 text-blue-500"/>
      </button>
    </div>
  );
};

export default ImageCarousel;
