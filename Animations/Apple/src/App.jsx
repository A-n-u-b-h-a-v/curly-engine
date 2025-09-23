import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Navbar from './components/Navbar';
import Model from './components/Model';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import Lenis from '@studio-freight/lenis'; // ✅ correct package

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Optional: log scroll to confirm it's working
    lenis.on('scroll', () => {
      console.log('Lenis scrolling...');
    });

    // Clean up on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default App;
