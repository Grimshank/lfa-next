"use client";

import Image from "next/image";
import Masonry from "react-masonry-css";
import {motion} from "framer-motion";

function MasonryGallery({works}) {
  return (
    <Masonry
      breakpointCols={{default: 3, 1100: 2, 700: 1}}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {
        works.map((work, index) => (
          <div key={index} className="overflow-hidden flex flex-col w-full">
            <motion.div
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
            >
              <img src={work.src} alt={`Gallery image ${index + 1}`} className="w-full h-auto"/>
            </motion.div>
            <div className="w-full flex flex-col items-start justify-normal pt-3  ">
              <div className="font-bold">{work.title}</div>
              <div>{work.dimensions}</div>
              <div>{work.medium} on {work.substrate}</div>
              <div>{work.price}</div>
              {
                work.sold ? (
                  <div>SOLD</div>
                ) : (
                  <div>available</div>
                )
              }
            </div>
          </div>
        ))
      }
    </Masonry>
  )
}

export default MasonryGallery;
