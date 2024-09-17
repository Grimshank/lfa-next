import { getWorks } from '@/lib/contentful';
import AboutSection from '@/components/AboutSection';
import ZoomingImageHero from '@/components/hero/ZoomingImageHero';
import Footer from '@/components/Footer';
import NewsletterSection from '@/components/NewsletterSection';
import InstagramFeed from '@/components/instagram/InstagramFeed';
import FeaturedArtSection from '@/components/FeaturedArtSection';
import LearnSection from '@/components/LearnSection';

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
      <FeaturedArtSection work={works[0]}/>
      <LearnSection />
      <InstagramFeed />
      <NewsletterSection />
      <Footer/>
    </main>
  );
}
