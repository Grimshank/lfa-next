"use client";

import React from 'react';
import ZoomingImageHero from "@/components/hero/ZoomingImageHero";
import Footer from "@/components/Footer";
import {motion} from "framer-motion";

export default function About() {
  return (
    <main>
      <ZoomingImageHero title={'Frequently Asked Questions'} subtitle={''}/>
      <div className="w-[90%] md:w-[75%] mx-auto mt-[30px]">
        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{
            duration: 2.5,
          }}
          className="mb-[30px]"
        >
          <p className="italic font-bold mb-[10px]">Where does Sean teach classes?</p>
          <p>
            Sean primarily teaches at the Art Group Gallery. The gallery is located at
            Pleasant Ridge Town Center, 11525 Cantrell Road in Little Rock, Arkansas. Currently
            there is only one class that meets from 9am-11am every Wednesday morning.
          </p>
          <p>
            He is also a volunteer instructor for the Life Quest
          </p>
        </motion.div>

        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{
            duration: 2.5,
          }}
          className="mb-[30px]"
        >
          <p className="italic font-bold mb-[10px]">Where can I see Sean&apos;s Art?</p>
          <p>
            Sean currently shows his work at the Art Group Gallery. The gallery is located at
            Pleasant Ridge Town Center, 11525 Cantrell Road in Little Rock, Arkansas. The hours are
            Monday through Saturday from 11am-5pm and Sunday from 1pm-5pm. You can see available
            works by Sean and other artists at <a
            href="https://artgrouparkansas.com">www.artgrouparkansas.com</a>.
          </p>
        </motion.div>
      </div>
      <Footer/>
    </main>
  );
}
