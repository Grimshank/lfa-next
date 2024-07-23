"use client";

import { useState } from 'react';
import { motion, MotionConfig } from 'framer-motion';

function AnimatedHamburgerButton({ image }) {
  const [active, setActive] = useState(false);

  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: 'linear',
      }}
    >
      <motion.div
        initial={false}
        onClick={() => setActive((pv) => !pv)}
        className="fixed top-4 right-4 h-20 w-20 rounded-xl bg-[#ED9238]/50 transition-colors hover:bg-[#ED9238]/100 drop-shadow-xl"
        animate={active ? "open" : "closed"}
      >
        <motion.span
          style={{
            left: '50%',
            top: '35%',
            x: '-50%',
            y: '-50%',
          }}
          className="absolute h-1 w-10 bg-blue-100"
          variants={{
            open: {
              rotate: ['0deg', '0deg', '45deg'],
              top: ['35%', '50%', '50%'],
            },
            closed: {
              rotate: ['45deg', '0deg', '0deg'],
              top: ['50%', '50%', '35%'],
            },
          }}
        />
        <motion.span
          style={{
            left: '50%',
            top: '50%',
            x: '-50%',
            y: '-50%',
          }}
          className="absolute h-1 w-10 bg-blue-100"
          variants={{
            open: {
              rotate: ['0deg', '0deg', '-45deg'],
            },
            closed: {
              rotate: ['-45deg', '0deg', '0deg'],
            },
          }}
        />
        <motion.span
          style={{
            left: 'calc(50% + 10px)',
            bottom: '35%',
            x: '-50%',
            y: '50%',
          }}
          className="absolute h-1 w-5 bg-blue-100"
          variants={{
            open: {
              rotate: ['0deg', '0deg', '45deg'],
              left: '50%',
              bottom: ['35%', '50%', '50%'],
            },
            closed: {
              rotate: ['45deg', '0deg', '0deg'],
              left: 'calc(50% + 10px)',
              bottom: ['50%', '50%', '35%'],
            },
          }}
        />
      </motion.div>
    </MotionConfig>
  )
}

export default AnimatedHamburgerButton;
