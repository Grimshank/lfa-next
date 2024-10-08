"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from "next/link";

import portrait from '../../public/portrait.jpg';

function AboutSection() {
  return (
    <div
      className="w-full px-8 py-12 bg-[#5280BB] grid grid-cols-1 md:grid-cols-2 items-center justify-center"
    >
      <div className="flex items-center justify-center">
        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{
            duration: 2.5,
          }}
        >
          <Image src={portrait} alt="Sean LeCrone" width={500} height={500}/>
        </motion.div>
      </div>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{
          duration: 2.5,
        }}
      >
        <div
          className="bg-white text-black p-5 mt-[-100px] md:mt-[0px] md:ml-[-200px]"
        >
          <div>
            Sean LeCrone is an artist specializing in landscapes, cityscapes, figures, and farm
            animals. Working in oil, acrylic, and pastel, he captures diverse scenes with skill
            and emotion. Sean also teaches oil and acrylic painting, encouraging others to explore
            their creativity. His work invites viewers to appreciate the beauty of the world around
            us.
          </div>
          <div
            className="flex items-center justify-center"
          >
            <Link href="/about" legacyBehavior>
              <motion.div
                className="bg-[#ED9238] p-6 mt-4 rounded-xl"
                initial={{scale: 1}}
                whileHover={{scale: 1.05}}
              >
                LEARN MORE ABOUT SEAN
              </motion.div>
            </Link>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
