import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import logo from "../../../public/logo.svg";

function Logo() {
  return (
    <motion.a
      initial={{
        opacity: 0,
        y: -12,
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.5,
          duration: 0.5,
          ease: 'easeInOut',
        },
      }}
      exit={{
        opacity: 0,
        y: -12,
      }}
      href="#"
      className="grid h-20 w-20 place-content-center rounded-br-xl rounded-tl-xl bg-white transition-colors hover:bg-[#ED9238]"
    >
      <Image
        priority
        src={logo}
        alt="LeCrone Fine Art"
      />
    </motion.a>
  );
}

export default Logo;
