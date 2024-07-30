"use client";

import React, { useState } from "react";
import FiChevronLeft from "@heroicons/react/24/solid/ChevronLeftIcon";
import FiChevronRight from "@heroicons/react/24/solid/ChevronRightIcon";
import { AnimatePresence, motion } from "framer-motion";

export default function ModernCarousel({ images }) {
  const [idx, setIdx] = useState(0);
  const [prevIdx, setPrevIdx] = useState(idx);

  const trend = idx > prevIdx ? 1 : -1;

  const imageIndex = Math.abs(idx % images.length);

  return (
    <div className="w-dvw h-[50vw] min-h-[400px] max-h-[600px] bg-black relative overflow-hidden">
      Hello..............................
      <button
        onClick={() => {
          setPrevIdx(idx);
          setIdx((pv) => pv - 1);
        }}
        className="bg-black/50 hover:bg-black/60 transition-colors text-white p-2 absolute z-10 left-0 top-0 bottom-0"
      >
        <FiChevronLeft className="h-5 w-5"/>
      </button>

      <div className="absolute inset-0 z-[5] backdrop-blur-xl">
        <AnimatePresence initial={false} custom={trend}>
          <motion.img
            variants={imgVariants}
            custom={trend}
            initial="initial"
            animate="animate"
            exit="exit"
            key={images[imageIndex].id}
            src={images[imageIndex].src}
            alt={images[imageIndex].title}
            style={{ y: "-50%", x: "-50%" }}
            className="aspect-square max-h-[90%] max-w-[calc(100%_-_80px)] mx-auto bg-black object-cover shadow-2xl absolute left-1/2 top-1/2"
          />
        </AnimatePresence>
      </div>
      <button
        onClick={() => {
          setPrevIdx(idx);
          setIdx((pv) => pv + 1);
        }}
        className="bg-black/50 hover:bg-black/60 transition-colors text-white p-2 absolute z-10 right-0 top-0 bottom-0"
      >
        <FiChevronRight className="h-5 w-5"/>
      </button>

      <AnimatePresence initial={false} custom={trend}>
        <motion.span
          custom={trend}
          variants={titleVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          key={images[imageIndex].id}
          className="text-white text-xl md:text-2xl p-2 rounded-lg bg-white/10 backdrop-blur-lg font-semibold shadow-lg absolute z-20 left-10 bottom-4"
        >
          {images[imageIndex].title}
        </motion.span>
      </AnimatePresence>

      <AnimatePresence initial={false}>
        <motion.div
          key={images[imageIndex].id + images.length}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 object-fill z-0"
          style={{
            backgroundImage: `url(${images[imageIndex].src})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
      </AnimatePresence>
    </div>
  );
}

const imgVariants = {
  initial: (trend) => ({
    x: trend === 1 ? "200%" : "-200%",
    opacity: 0,
  }),
  animate: { x: "-50%", opacity: 1 },
  exit: (trend) => ({
    x: trend === 1 ? "-200%" : "200%",
    opacity: 0,
  }),
};

const titleVariants = {
  initial: (trend) => ({
    y: trend === 1 ? 20 : -20,
    opacity: 0,
  }),
  animate: { y: 0, opacity: 1 },
  exit: (trend) => ({
    y: trend === 1 ? -20 : 20,
    opacity: 0,
  }),
};