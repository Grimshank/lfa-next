"use client";

import {useEffect, useState} from 'react';
import { animate, motion, useMotionValue } from 'framer-motion';
import Card from '@/components/Card';
import useMeasure from 'react-use-measure';

function Carousel({works}) {
  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION);
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [rerender, xTranslation, duration, width]);

  return (
    <div className="py-8" style={{ position: 'fixed', width: '100vw', height: '300px', overflow: 'hidden' }}>
      <motion.div
        className="absolute left-0 flex gap-4"
        style={{
          x: xTranslation,
        }}
        ref={ref}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}
      >
        {
          [...works, ...works].map((work, index) => {
            console.log(`WORK: ${JSON.stringify(work.image)}`);

            return (
              <Card key={index} image={`https:${work.image.fields.file.url}`}/>
            )
          })
        }
      </motion.div>
    </div>
  )
}

export default Carousel;
