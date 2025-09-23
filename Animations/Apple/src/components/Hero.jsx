import React, { useEffect, useState } from 'react';
import gsap from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(null);

  const updateVideoSrc = () => {
    const width = window.innerWidth;
    const newSrc = width < 760 ? smallHeroVideo : heroVideo;
    setVideoSrc(prev => (prev !== newSrc ? newSrc : prev)); 
  };

  useEffect(() => {
    updateVideoSrc();
    window.addEventListener('resize', updateVideoSrc);

    return () => {
      window.removeEventListener('resize', updateVideoSrc);
    };
  }, []);

  useGSAP(() => {
    gsap.to('#hero', {
      opacity: 1,
      delay: 2,
      duration: 2,
    });
    gsap.to("#buy",{
        y:-50,
        opacity:1,
        delay:2
    })
  });

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex items-center justify-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>

        <div className="md:w-10/12 w-9/12">
          {videoSrc && (
            <video key={videoSrc} autoPlay muted playsInline className="w-full h-full object-cover">
              <source src={videoSrc} type="video/mp4" />
            </video>
          )}
        </div>
      </div>
      <div id="buy" className='flex flex-col items-center opacity-0 translate-y-20 text-white'>
        <a href="#highlights" className='btn'>Buy</a>
        <p className='font-normal text-xl'>From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
