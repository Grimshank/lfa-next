import React from 'react';
import Footer from '@/components/Footer';
import {getWorks} from '@/lib/contentful';
import ZoomingImageHero from '@/components/hero/ZoomingImageHero';
import MasonryGallery from '@/components/gallery/MasonryGallery';

export default async function Works() {
  const works = await getWorks();

  return (
    <main className="bg-white flex items-center flex-col min-h-screen">
      <ZoomingImageHero title={'LeCrone Fine Art'} subtitle={'gallery of current works'} src="/smurf_village.jpg"/>
      <MasonryGallery works={works} />
      <Footer/>
    </main>
  );
}
