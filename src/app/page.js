import { getWorks } from '@/lib/contentful';
import AboutSection from '@/components/AboutSection';
import ZoomingImageHero from '@/components/hero/ZoomingImageHero';
import Footer from '@/components/Footer';
import Slider from '@/components/slider/Slider';
import NewsletterSection from '@/components/NewsletterSections';
import InstagramFeed from '@/components/instagram/InstagramFeed';

export const Metadata = {
  title: 'LeCrone Fine Art',
  description: 'Explore the captivating artwork of Sean LeCrone, featuring a comprehensive catalog of his paintings and artistic creations. Discover detailed information about his style, artistic journey, upcoming exhibitions, and classes.',
}

export default async function Home() {
  const works = await getWorks();

  return (
    <main>
      <ZoomingImageHero title={'LeCrone Fine Art'} subtitle={'live a life of color'} src='/palette.jpg'/>
      <h1 className="text-3xl font-medium m-auto text-center pt-14" style={{fontFamily: 'mrs-eaves-roman-small-caps'}}>
        Welcome to LeCrone Fine Art, home of artist and instructor Sean P. LeCrone.
      </h1>
      <div className="py-5">
        <Slider works={works} />
      </div>
      <AboutSection/>
      <InstagramFeed />
      <NewsletterSection />
      <Footer/>
    </main>
  );
}
