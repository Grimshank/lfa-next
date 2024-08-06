"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ImageGallery = ({ works }) => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {works.map((work, index) => (
          <motion.div
            key={index}
            className="overflow-hidden flex flex-col items-center justify-center w-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={work.src} alt={`Gallery image ${index + 1}`} className="w-full h-auto" />
            <div>{work.title}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
