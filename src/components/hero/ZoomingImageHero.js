"use client";

import React, {useEffect, useState} from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import logo from "../../../public/logo.svg";
import { FiArrowDownCircle } from 'react-icons/fi';

const HeroSection = ({ title, subtitle, src }) => {
  const controls = useAnimation();
  const [running, setRunning] = useState(true);

  useEffect(() => {
    controls.start({
      scale: [1, 1.1, 1.2, 1.25, 1.35, 1],
      x: ['0%', '-5%', '0%', '-10%', '-5%', '0%'],
      y: ['0%', '0%', '10%', '10%', '-5%', '0%'],
      transition: {
        repeat: Infinity,
        duration: 20,
        ease: 'easeInOut',
      },
    });

    return () => {
      controls.stop();
    }
  }, [controls]);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{backgroundImage: `url('${src}')`}}
        animate={controls}
        initial={{scale: 1, x: "0%", y: "0%"}}
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-[9] text-center text-white p-5">
        <div className="flex flow-row items-center justify-center">
          <Image
            priority
            src={logo}
            alt="LeCrone Fine Art"
            width={250}
            height={250}
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4"
            style={{fontFamily: 'mrs-eaves-roman-small-caps'}}>{title}</h1>
        <p className="text-xl md:text-2xl">{subtitle}</p>
      </div>
      <motion.div
        className="flex text-white flex-row items-center justify-center absolute bottom-5 left-0 right-0"
        animate={{
          y: [0, -30, 0], // Keyframes: moving up and down
        }}
        transition={{
          duration: 0.5, // Time for one bounce
          repeat: 3, // Repeat indefinitely
          ease: "easeInOut", // Smooth easing for a natural bounce effect
        }}
      >
        <FiArrowDownCircle className='text-8xl'/>
      </motion.div>
    </div>
  );
};

export default HeroSection;
