"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
    <div className="relative w-full h-screen flex items-center justify-center">
      <div className="relative w-[250px] h-[250px] md:w-[500px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <motion.img
          key={currentImage.src}
          src={currentImage.src}
          alt="Artwork"
          className="object-cover w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, type: "spring" }}
        />
      </div>
      <div className="absolute inset-0 flex justify-between items-center">
        <button
          onClick={handlePrev}
          className="bg-black bg-opacity-50 text-white px-4 py-2 m-4 rounded-md focus:outline-none"
        >
          &larr; Previous
        </button>
        <button
          onClick={handleNext}
          className="bg-black bg-opacity-50 text-white px-4 py-2 m-4 rounded-md focus:outline-none"
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
