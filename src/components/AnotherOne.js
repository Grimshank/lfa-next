"use client"

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const AnotherOne = ({ works }) => {
  // State and Ref initialization
  const [currentImg, setCurrentImg] = useState(0)
  const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 })
  const carouselRef = useRef(null)

  // useEffect to get the initial carousel size
  useEffect(() => {
    let elem = carouselRef.current
    let { width, height } = elem.getBoundingClientRect()
    if (carouselRef.current) {
      setCarouselSize({
        width,
        height,
      })
    }
  }, [])

  return (
    <div className="px-14 py-14">
      <div>
        <div
          className='w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-md overflow-hidden relative'>
          {/* Image container */}
          <div
            ref={carouselRef}
            style={{
              left: -currentImg * carouselSize.width
            }}
            className='w-full h-full absolute flex transition-all duration-300'>
            {/* Map through data to render images */}
            {works.map((v, i) => (
              <div key={i} className='relative shrink-0 w-full h-full'>
                <Image
                  className='pointer-events-none'
                  alt={`carousel-image-${i}`}
                  fill
                  src={v.src}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <div className='flex justify-center mt-3'>
          <button
            disabled={currentImg === 0}
            onClick={() => setCurrentImg(prev => prev - 1)}
            className={`border px-4 py-2 font-bold ${currentImg === 0 && 'opacity-50'}`}
          >
            {"<"}
          </button>
          <button
            disabled={currentImg === works.length - 1}
            onClick={() => setCurrentImg(prev => prev + 1)}
            className={`border px-4 py-2 font-bold ${currentImg === works.length - 1 && 'opacity-50'}`}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default AnotherOne;
