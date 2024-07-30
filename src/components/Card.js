"use client";

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import {AnimatePresence, motion} from 'framer-motion';

function Card({ image }) {
  const [showOverlay, setShowOverlay] = useState(false);


  return (
    <motion.div
      className="relative overflow-hidden h-[200px] min-w-[200px] flex justify-center items-center"
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      <AnimatePresence>
        {
          showOverlay && (
            <motion.div
              className="absolute inset-0 z-10 flex justify-center items-center"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
            >
              <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full" />
              <motion.h1
                className="bg-white font-semibold text-sm z-10 px-3 py-2 rounded-full flex items-center gap-[0.5ch] hover:opacity-75"
                initial={{y: 10 }}
                animate={{y: 0}}
                exit={{y: 10}}
              >
                <span>Explore Now</span>
                <ArrowRightIcon className="h-4 w-4" />
              </motion.h1>
            </motion.div>
          )
        }
      </AnimatePresence>
      <Image src={image} alt={image} width={300} height={300} style={{objectFit: 'cover'}} />
    </motion.div>
  )
}

export default Card;
