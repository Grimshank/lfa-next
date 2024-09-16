import { getWorks } from '@/lib/contentful';
import AboutSection from '@/components/AboutSection';
import ZoomingImageHero from '@/components/hero/ZoomingImageHero';
import Footer from '@/components/Footer';
import Slider from '@/components/slider/Slider';
import NewsletterSection from '@/components/NewsletterSections';
import InstagramFeed from '@/components/instagram/InstagramFeed';

export const metadata = {
  title: 'LeCrone Fine Art',
  description: 'Explore the captivating artwork of Sean LeCrone, featuring a comprehensive catalog of his paintings and artistic creations. Discover detailed information about his style, artistic journey, upcoming exhibitions, and classes.',
}

export default async function Home() {
  const works = await getWorks();

  return (
    <main>
      <ZoomingImageHero title={'LeCrone Fine Art'} subtitle={'live a life of color'} src='/palette.jpg'/>
      <AboutSection/>
      <InstagramFeed />
      <NewsletterSection />
      <Footer/>
    </main>
  );
}
