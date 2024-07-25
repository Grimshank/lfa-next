import React from 'react';
import { motion } from 'framer-motion';
import {SocialIcon} from "react-social-icons";

const SOCIAL_CTAs = [
  {
    id: 1,
    name: 'Facebook',
    url: 'https://www.facebook.com/lecronefineart',
    handle: 'lecronefineart',
  },
  {
    id:2,
    name: 'Instagram',
    url: 'https://www.instagram.com/lecronefineart',
    handle: '@lecronefineart',
  },
];

function FooterCTAs() {
  return (
    <>
      <div className="absolute bottom-6 left-6 gap-4 flex-col">
        {
          SOCIAL_CTAs.map((l, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{
                  opacity: 0,
                  y: -8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 1 + idx * 0.125,
                    duration: 0.5,
                    ease: 'easeInOut',
                  },
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                }}
              >
                <SocialIcon url={l.url} fgColor="#ED9238" bgColor="transparent" className="!h-16 !w-16" />
              </motion.div>
            );
          })
        }
      </div>
    </>
  );
}

export default FooterCTAs;
