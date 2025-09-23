import { useEffect } from "react";
import Lenis from '@studio-freight/lenis';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Art from "./components/Art";
import Cocktail from "./components/Cocktail";
import Menu from "./components/Menu";
import Contact from "./components/Contact";

import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function App() {

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
    lenis.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return arguments.length ? lenis.scrollTo(value) : window.scrollY;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.body.style.transform ? "transform" : "fixed",
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.killAll();
    };
  }, []);
  return (
    <main >
      <Navbar/>
      <Hero/>
      <Cocktail/>
      <About/>
      <Art/>
      <Menu/>
      <Contact/>
    </main>
  )
}




export default App
