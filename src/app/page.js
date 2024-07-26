import {Button} from '@/components/ui/button';
import { getWorks } from '../lib/contentful';

import NewsletterForm from '@/components/NewsletterForm';
import Socials from '@/components/Socials';
import Carousel from '@/components/Carousel';
import ShuffleHero from '@/components/hero/SuffleHero';

export default async function Home() {
  const works = await getWorks();

  return (
    <main className="bg-white flex flex-col items-center justify-center p-10 min-h-screen">
      <ShuffleHero />

      {/*
      <Carousel works={works} />

      <div className="space-y-1 pt-[200px]">
        <h2 className="z-10 text-3xl font-bold text-center text-transparent duration-1000 bg-black cursor-default text-stroke animate-title sm:text-5xl md:text-6xl whitespace-nowrap bg-clip-text">Join the waitlist for my</h2>
        <h1 className="z-10 tet-4xl font-bold text-center text-transparent duration-1000 bg-white cursor-default sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text bg-gradient-to-r from-purple-300 to-purple-800 animate-fade-in-3">Newsletter</h1>
      </div>
      <div className="">
        <NewsletterForm />
        <Socials />
      </div>
      */}
    </main>
  );
}
