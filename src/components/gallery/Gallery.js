"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ImageGallery = ({ works }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {works.map((work, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={work.src} alt={`Gallery image ${index + 1}`} className="w-full h-auto" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
