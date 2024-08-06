import React from 'react';
import Footer from "@/components/Footer";
import Gallery from "@/components/gallery/Gallery";
import {getWorks} from "@/lib/contentful";
import ZoomingImageHero from "@/components/hero/ZoomingImageHero";

export default async function Works() {
  const works = await getWorks();

  return (
    <main className="bg-white flex items-center flex-col min-h-screen">
      <ZoomingImageHero title={'LeCrone Fine Art'} subtitle={'gallery of current works'}/>
      <Gallery works={works} />
      <Footer/>
    </main>
  );
}
