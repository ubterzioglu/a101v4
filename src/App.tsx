import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Education from './sections/Education';
import Career from './sections/Career';
import Life from './sections/Life';
import Contact from './sections/Contact';
import Newsletter from './sections/Newsletter';
import Footer from './sections/Footer';
import './App.css';

function App() {
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

export default App;
