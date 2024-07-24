import React from 'react';
import { motion } from 'framer-motion';

const NavLink = ({ children, href, idx }) => {
  console.log(`index=${idx}`);
  console.log(`href=${href}`);

  return (
    <motion.a
      initial={{
        opacity: 0,
        y: -8
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.75 + idx * 0.125,
          duration: 0.5,
          ease: 'easeInOut',
        },
      }}
      exit={{
        opacity: 0,
        y: -8
      }}
      href={href}
      className="block text-5xl font-semibold text-[#ED9238]/100 transition-colors hover:text-white/100 md:text-7xl"
    >
      {children}
    </motion.a>
  );
};

export default NavLink;
