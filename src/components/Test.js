"use client";

import { motion } from 'framer-motion';

function Test() {
  return (
    <div
      className="w-full px-8 py-12 bg-[#5280BB] h-96 flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{
          duration: 2.5,
        }}
      >
        this is a test
      </motion.div>
    </div>
  );
};

export default Test;
