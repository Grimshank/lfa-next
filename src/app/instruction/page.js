"use client";

import React from 'react';
import ZoomingImageHero from "@/components/hero/ZoomingImageHero";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <main>
      <ZoomingImageHero title={'Painting Instruction'} subtitle={'learn oil and acrylic painting'}/>
      <Footer/>
    </main>
  );
}
