import React from 'react';
import Footer from "@/components/Footer";
import Gallery from "@/components/gallery/Gallery";
import {getWorks} from "@/lib/contentful";

export default async function Works() {
  const works = await getWorks();

  return (
    <main className="bg-white flex items-center flex-col min-h-screen pt-20">
      <Gallery works={works} />
      <Footer/>
    </main>
  );
}
