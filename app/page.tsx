import Navigation from '@/components/sections/Navigation';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Education from '@/components/sections/Education';
import Career from '@/components/sections/Career';
import Life from '@/components/sections/Life';
import Contact from '@/components/sections/Contact';
import Newsletter from '@/components/sections/Newsletter';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <Navigation />
      <Hero />
      <Features />
      <Education />
      <Career />
      <Life />
      <Contact />
      <Newsletter />
      <Footer />
    </div>
  );
}
