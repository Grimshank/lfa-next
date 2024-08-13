"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ZoomingImageHero from "@/components/hero/ZoomingImageHero";
import Footer from "@/components/Footer";
import Image from "next/image";

import portrait from "../../../public/portrait.png";

export default function About() {
  return (
    <main>
      <ZoomingImageHero title={'Sean P. LeCrone'} subtitle={''}/>
      <div className="flex items-center justify-center my-[30px]">
        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{
            duration: 2.5,
          }}
          className="mx-[30px] md:mx-[0px]"
        >
          <Image src={portrait} alt="Sean LeCrone" width={500} height={500}/>
        </motion.div>
      </div>
      <div className="w-[90%] md:w-[75%] mx-auto">
        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{
            duration: 2.5,
          }}
          className="mb-[30px]"
        >
          Born in the heart of Oklahoma and raised amidst the scenic landscapes of Arkansas, this
          talented artist has cultivated a unique perspective over his 20-year journey in painting.
          Specializing in impressionistic works, he finds inspiration in the beauty of everyday life,
          capturing landscapes, figures, cityscapes, and animals with a keen eye for detail and
          emotion. His palette is rich with vibrant hues, primarily using oil paint, while also
          incorporating acrylics and soft pastels to enhance his artistic expression.
        </motion.div>

        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{
            duration: 2.5,
          }}
          className="mb-[30px]"
        >
          Beyond his studio, he enjoys hanging out wherever there is live music, finding that the
          rhythm and energy of performances fuel his creativity. Long drives through the countryside
          are a cherished pastime, where he takes to random roads in search of new subjects to paint.
          Whether it&apos;s a tranquil farm scene or the lively spirit of city life, he is drawn
          especially to ordinary moments that resonate with authenticity.
        </motion.div>

        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{
            duration: 2.5,
          }}
          className="mb-[30px]"
        >
          His love for farm animals often finds its way into his artwork, portraying them with warmth
          and affection. As an experienced instructor, he shares his passion by teaching oil and
          acrylic classes, helping aspiring artists discover their own creative voices. His
          exceptional work has earned numerous awards throughout central Arkansas and is proudly
          displayed in many private collections, reflecting his deep appreciation for the beauty that
          surrounds us. With each brushstroke, he invites viewers to see the world through his
          eyes—a place filled with charm, music, and endless inspiration.
        </motion.div>
      </div>
      <Footer/>
    </main>
  );
}
