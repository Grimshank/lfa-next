import { getWorks } from '@/lib/contentful';
import AboutSection from '@/components/AboutSection';
import ZoomingImageHero from '@/components/hero/ZoomingImageHero';
import Footer from '@/components/Footer';
import Slider from '@/components/slider/Slider';
import NewsletterSection from '@/components/NewsletterSections';


export default async function Home() {
  const works = await getWorks();

  return (
    <main>
      <ZoomingImageHero title={'LeCrone Fine Art'} subtitle={'live a life of color'}/>
      <h1 className="text-3xl font-medium m-auto text-center pt-14" style={{fontFamily: 'mrs-eaves-roman-small-caps'}}>
        Welcome to LeCrone Fine Art, home of artist and instructor Sean P. LeCrone.
      </h1>
      <div className="py-5">
        <Slider works={works} />
      </div>
      <AboutSection/>
      <NewsletterSection />
      <Footer/>
      {/*
      <AnotherCarousel works={works} />
      <ImageCarousel images={works} />
      <Carousel works={works} />
      <ImageHero />
      <ShuffleHero works={works.slice(0, 16)}/>
      <Test />

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
