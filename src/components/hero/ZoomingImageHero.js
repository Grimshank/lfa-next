"use client";

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from "next/image";
import logo from "../../../public/logo.svg";

const HeroSection = () => {
  const controls = useAnimation();

  useEffect(() => {
    const animateZoom = async () => {
      const keyframes = [
        { scale: 1.1, x: "-5%", y: "0%" },
        { scale: 1.2, x: "0%", y: "10%" },
        { scale: 1.25, x: "-10%", y: "10%" },
        { scale: 1.35, x: "-5%", y: "20%" },
      ];

      while (true) {
        for (const frame of keyframes) {
          await controls.start({
            scale: frame.scale,
            x: frame.x,
            y: frame.y,
            transition: { duration: 3 }
          });
        }
      }
    };

    animateZoom();
  }, [controls]);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero2.jpg')" }}
        animate={controls}
        initial={{ scale: 1, x: "0%", y: "0%" }}
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
        <h1 className="text-4xl md:text-6xl font-bold mb-4">LeCrone Fine Art</h1>
        <p className="text-xl md:text-2xl">live a life of color</p>
      </div>
    </div>
  );
};

export default HeroSection;
