// components/ZoomableImage.js
'use client'; // Required for Next.js 14 (App Router) if using client-side interactivity

import React from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import Image from 'next/image';

export default function ImageZoom({ src, alt }) {
  return (
    <div className="">
      {/* Wrapper to enable zoom and pan */}
      <TransformWrapper
        initialScale={1}
        minScale={1}
        maxScale={3}
        centerOnInit
        centerZoomedOut
      >
        <TransformComponent>
          <div className="">
            <Image
              src={src}
              alt={alt}
              width={1920}  // Set a fixed width
              height={1080} // Set a fixed height
            />
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}
