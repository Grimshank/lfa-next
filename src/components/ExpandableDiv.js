"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

function ExpandableDiv() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <motion.div
        transition={{ layout: { duration: 1, type: 'spring' } }}
        layout
        onClick={() => setIsOpen((pv) => !pv)}
        className="text-white bg-black px-5 py-3 rounded-xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
      >
        <motion.h2 layout="position">Click Me</motion.h2>
        {
          isOpen && (
            <motion.div>
              <p style={{ width: '20rem' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis libero justo.
                Phasellus sit amet mattis elit. Fusce et mi eget est consectetur malesuada. Morbi
                vulputate imperdiet quam, vel venenatis arcu fermentum ut. Cras a elementum est.
                Suspendisse neque odio, eleifend ac ullamcorper ut, sagittis fringilla felis. Vivamus
                quis libero et ipsum pellentesque dignissim ut quis dolor. Vivamus pharetra purus est,
                vel aliquam justo placerat eget. Pellentesque tristique neque vel lorem commodo
                suscipit. Donec porta varius sagittis. Aliquam erat volutpat. Proin sed tincidunt
                metus. Sed convallis rhoncus tempor. Etiam blandit eleifend nulla id pulvinar.
              </p>
            </motion.div>
          )
        }
      </motion.div>
    </div>
  )
}

export default ExpandableDiv;

