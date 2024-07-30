"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [thumbnailStartIndex, setThumbnailStartIndex] = useState(0);
  const thumbnailsPerPage = 5; // Number of thumbnails to show at a time

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  const scrollThumbnails = (direction) => {
    if (direction === 'left') {
      setThumbnailStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (direction === 'right') {
      setThumbnailStartIndex((prevIndex) => {
        const maxStartIndex = Math.max(0, images.length - thumbnailsPerPage);
        return Math.min(prevIndex + 1, maxStartIndex);
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-800">
      <div className="flex items-center justify-center mb-4">
        <button
          onClick={handlePrev}
          className="bg-black bg-opacity-50 text-white px-4 py-2 mx-2 rounded-md focus:outline-none"
        >
          &larr; Previous
        </button>
        <div className="relative w-80 h-80 bg-gray-200 flex items-center justify-center overflow-hidden">
          <motion.img
            key={images[currentIndex].id}
            src={images[currentIndex].src}
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
          className="bg-black bg-opacity-50 text-white px-4 py-2 mx-2 rounded-md focus:outline-none"
        >
          Next &rarr;
        </button>
      </div>
      <div className="flex items-center w-full justify-center mt-4">
        <button
          onClick={() => scrollThumbnails('left')}
          className="bg-black bg-opacity-50 text-white px-2 py-1 mx-2 rounded-md focus:outline-none"
          disabled={thumbnailStartIndex === 0}
        >
          &larr;
        </button>
        <div className="relative w-full max-w-xl overflow-hidden">
          <motion.div
            className="flex space-x-2"
            initial={false}
            animate={{ x: -thumbnailStartIndex * (64 + 8) }} // 64px is the width, 8px is the margin
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {images
              .slice(thumbnailStartIndex, thumbnailStartIndex + thumbnailsPerPage)
              .map((image, index) => (
                <div
                  key={index + thumbnailStartIndex}
                  onClick={() => handleThumbnailClick(index + thumbnailStartIndex)}
                  className={`w-16 h-16 cursor-pointer overflow-hidden border ${
                    currentIndex === index + thumbnailStartIndex ? 'border-white' : 'border-gray-400'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={`Thumbnail ${index + thumbnailStartIndex}`}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
          </motion.div>
        </div>
        <button
          onClick={() => scrollThumbnails('right')}
          className="bg-black bg-opacity-50 text-white px-2 py-1 mx-2 rounded-md focus:outline-none"
          disabled={thumbnailStartIndex + thumbnailsPerPage >= images.length}
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
