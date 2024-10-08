// components/ZoomableImage.js
'use client'; // Required for Next.js 14 (App Router) if using client-side interactivity

import React from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import Image from 'next/image';

export default function ImageZoom({ src, alt }) {
  return (
    <div className="w-screen h-screen overflow-hidden">
      {/* Wrapper to enable zoom and pan */}
      <TransformWrapper
        initialScale={1}
        minScale={0.5}
        maxScale={3}
        centerOnInit
        centerZoomedOut
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <TransformComponent>
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={src}
                  alt={alt}
                  width={1920}  // Set a fixed width
                  height={1080} // Set a fixed height
                  style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' }}
                />
              </div>
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
}
