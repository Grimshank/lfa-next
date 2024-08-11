"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ImageGallery = ({ works }) => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {works.map((work, index) => (
          <div className="overflow-hidden flex flex-col items-center  w-full">
            <motion.div
              key={index}
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
            >
              <img src={work.src} alt={`Gallery image ${index + 1}`} className="w-full h-auto"/>
            </motion.div>
            <div className="w-full flex flex-col items-start justify-normal pt-3">
              <div className="font-bold">{work.title}</div>
              <div>{work.dimensions}</div>
              <div>{work.medium} on {work.substrate}</div>
              <div>{work.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
