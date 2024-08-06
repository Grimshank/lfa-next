"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Footer from "@/components/Footer";

export default async function Home() {
  return (
    <main className="bg-white flex items-center flex-col min-h-screen pt-20 md:pt-96">
      <motion.div
        className="w-[90%] md:w-[75%] pb-20 md:pb-72"
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{
          duration: 2.5,
        }}
      >
        <div>
          <p className="font-bold py-2">
            COPYRIGHT WARNING
          </p>
        </div>
        <div>
          <p className="py-1">
            All information and content located on this Site, including all images, paintings, and
            photographs are protected by copyright. You are strictly prohibited from modifying,
            copying, distributing, transmitting, displaying, publishing, selling, licensing,
            creating derivative works or using any Content available on or through the Site for
            commercial or public purposes. Unauthorized use of copyrighted material may give rise
            to a claim for damages and/or be a criminal offense.
          </p>
        </div>
      </motion.div>

      <Footer/>
    </main>
  );
}
