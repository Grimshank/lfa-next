"use client";

import React from 'react';
import ZoomingImageHero from '@/components/hero/ZoomingImageHero';
import Footer from '@/components/Footer';
import {motion} from 'framer-motion';
import Image from 'next/image';

import aggLogo from '../../../public/agg_logo.jpeg';
import Link from "next/link";

export default function About() {
  return (
    <main>
      <ZoomingImageHero title={'Frequently Asked Questions'} subtitle={''} src='/palette.jpg'/>
      <div className="w-[90%] md:w-[75%] mx-auto mt-[30px]">
        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{
            duration: 2.5,
          }}
          className="mb-[30px]"
        >
          <p className="italic font-bold mb-[10px]">Does Sean accept commissions?</p>
          <p>
            Yes, Sean accepts commissions. Sean will work closely with his clients at each step of
            the processes from preliminary sketch to final framing. If you would like to inquire
            about a
            commission you can click the button below.
          </p>
          <div className="mt-4">
            <Link className="rounded text-white p-2 bg-[#ED9238]" href={`/commissions`}>
              CONTACT SEAN ABOUT A COMMISSION
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{
            duration: 2.5,
          }}
          className="mb-[30px]"
        >
          <p className="italic font-bold mb-[10px]">What colors does Sean use on his palette?</p>
          <p>
            In his classes Sean stresses the importance of placing colors on the palette in a
            certain
            arrangement, clockwise starting from the bottom left corner of the palette:
          </p>
          <ul className="mt-2">
            <li>Ultramarine Blue</li>
            <li>* Phthalo Blue</li>
            <li>* Viridian</li>
            <li>* Transparent Oxide Red</li>
            <li>Yellow Ochre</li>
            <li>Alizarin Crimson</li>
            <li>* Quinacridone Red</li>
            <li>* Cadmium Red Light</li>
            <li>Cadmium Orange</li>
            <li>Cadmium Yellow Deep</li>
            <li>Cadmium Yellow Medium</li>
            <li>* Cadmium Yellow Light</li>
            <li>Cadmium Yellow Lemon</li>
            <li>* Titanium White</li>
          </ul>
          <p className="mt-2">
            Sean uses the same palette for both oil and acrylic works.  He recently began using a
            more limited palette of colors; these colors are marked with *.
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
          <p className="italic font-bold mb-[10px]">Where does Sean teach classes?</p>
          <div className="flex flex-row">
            <div>
              <a href="https://artgrouparkansas.com">
                <Image src={aggLogo} className="max-w-[100px] max-h-[100px]" width={200}
                       height={200} alt='agg_logo'/>
              </a>
            </div>
            <div className="grid grid-cols-1 ml-2">
              <div>
                <p>
                  Sean primarily teaches at the Art Group Gallery. The gallery is located at
                  Pleasant Ridge Town Center, 11525 Cantrell Road in Little Rock, Arkansas.
                  Currently there is only one class that meets from 9am-11am every Wednesday morning.
                </p>
              </div>
              <div className="mt-2">
                <p>
                  He is also a volunteer instructor for for LifeQuest of Arkansas.  You can find out
                  more about LifeQuest and if Sean is scheduled to teach in upcoming classes by visiting
                  the <a className="text-[#5280BB]" href="https://lifequestofarkansas.org">LifeQuest of Arkansas</a> website.
                </p>
              </div>
            </div>
          </div>
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
          <div className="flex flex-row">
            <div>
              <a href="https://artgrouparkansas.com">
                <Image src={aggLogo} className="max-w-[100px] max-h-[100px]" width={200}
                       height={200} alt='agg_logo'/>
              </a>
            </div>
            <p className="ml-2">
              Sean currently shows his work at the Art Group Gallery. The gallery is located at
              Pleasant Ridge Town Center, 11525 Cantrell Road in Little Rock, Arkansas. The hours
              are
              Monday through Saturday from 11am-5pm and Sunday from 1pm-5pm. You can see available
              works by Sean and other artists at <a className="text-[#5280BB]" href="https://artgrouparkansas.com">www.artgrouparkansas.com</a>.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{
            duration: 2.5,
          }}
          className="mb-[30px]"
        >
          <p className="italic font-bold mb-[10px]">Does Sean ship and how is it arranged?</p>
          <div>
            <p className="">
              Yes, Sean will ship paintings and prints to you at an additional cost determined at the
              time of purchase.
            </p>
            <p className="mt-2">
              When it comes to shipping, Sean makes the process as seamless as possible by working
              closely with the customer to arrange all the details according to their needs. He begins
              by discussing the shipping options available depending on the urgency.  We review the
              shipping costs, delivery times, and any specific preferences the customer might have,
              such as insurance or handling requirements. Throughout the process, Sean ensures clear
              communication, providing updates on tracking and estimated delivery times, so the
              customer is always informed. My goal is to tailor the shipping experience to their
              convenience, ensuring their satisfaction from start to finish.
            </p>
          </div>
        </motion.div>
      </div>
      <Footer/>
    </main>
  );
}
