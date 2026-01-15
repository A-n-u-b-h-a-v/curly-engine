import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ReactLenis } from "lenis/react";

import HorizontalPanels from "./components/HorizontalPanels.jsx";
import FloatingPanel from "./components/FloatingPanel.jsx";
import GridStage from "./components/GridStage.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ShowcaseSections from "./components/ShowcaseSections.jsx";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const App = () => {
  const sceneRef = useRef();
  const horizontalTrackRef = useRef();
  const panelTwoRef = useRef();
  const panelThreeRef = useRef();
  const panelTwoMaskRef = useRef();
  const p2logoRef = useRef();
  const p2textRef = useRef();
  const p2textRef2 = useRef();
  const p2paraRef = useRef();
  const p2zoomRef = useRef();
  const p2blackRef = useRef();
  const p2mainRef = useRef();
  const floatingPanelRef = useRef();
  const floatingh1Ref = useRef();
  const floatingh2Ref = useRef();
  const floatingparaRef = useRef();
  const gridRootRef = useRef();
  const overflowGridRef = useRef();
  const sectionOneRef = useRef();
  const sectionTwoRef = useRef();
  const sectionThreeRef = useRef();
  const sectionOneMaskRef = useRef();
  const sectionRedBgRef = useRef();
  const sectionFourRef = useRef();
  const sectionFourUnderRef = useRef();
  const sectionBlackBgRef = useRef();
  const sectionBlack2BgRef = useRef();
  const sectionBlack3BgRef = useRef();
  const sectionFiveRef = useRef();

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.set(gridRootRef.current, {
        y: "100vh",
        scale: 0.5,
        transformOrigin: "top left",
      });
      gsap.set(floatingPanelRef.current, {
        y: 0,
        scale: 1,
        transformOrigin: "top left",
      });

      const tl = gsap.timeline();
      tl.to(horizontalTrackRef.current, {
        x: "-100vw",
        duration: 1.6,
        ease: "power3.inOut",
      })
        .fromTo(
          panelTwoMaskRef.current,
          { clipPath: "inset(0% 50% 0% 50% round 2rem)" },
          {
            clipPath: "inset(0% 0% 0% 0% round 2rem)",
            duration: 1.2,
            ease: "power3.out",
          }
        )
        .from(
          p2logoRef.current,
          { y: -100, duration: 0.9, ease: "power3.out" },
          "p2-animation"
        )
        .from(
          [p2textRef.current, p2textRef2.current, p2paraRef.current, p2blackRef.current].filter(Boolean),
          { x: "100vw", duration: 1.6, stagger: 0.1, ease: "power3.out" },
          "p2-animation"
        )
        .to(
          p2zoomRef.current,
          {
            scale: 1.1,
            duration: 1.4,
            ease: "power3.out",
            transformOrigin: "center",
          },
          "p2-animation"
        )
        .fromTo(
          panelTwoMaskRef.current,
          { clipPath: "inset(0% 0% 0% 0% round 2rem)" },
          {
            clipPath: "inset(0% 0% 50% 0% round 2rem)",
            duration: 1.0,
            ease: "power3.inOut",
          },
          "p2-move"
        )
        .to(
          [p2textRef.current, p2textRef2.current, p2paraRef.current, p2blackRef.current].filter(Boolean),
          { y: "15vh", duration: 1.2, ease: "power2.inOut", stagger: 0.25 },
          "p2-move"
        )
        .fromTo(
          panelThreeRef.current,
          { scale: 0, transformOrigin: "center", clipPath: "inset(100% 0% 50% 0% round 2rem)" },
          {
            scale: 1,
            clipPath: "inset(0% 0% 0% 0% round 2rem)",
            duration: 1.2,
            ease: "power3.inOut",
          },
          "p3-appear-=0.5"
        )
        .to(
          [p2textRef.current, p2textRef2.current, p2paraRef.current, p2blackRef.current].filter(Boolean),
          { autoAlpha: 0, duration: 0.01 },
          "p3-appear"
        )
        .to(p2zoomRef.current, { autoAlpha: 0, duration: 0.01 });

      tl.fromTo(
        floatingPanelRef.current,
        { width: 0, height: 0, bottom: "10%", right: "20%" },
        { width: "50vw", height: "50vh", duration: 1.3, ease: "power3.out" },
        "shrink-grow-start"
      )
        .to(
          panelTwoRef.current,
          { scale: 0.5, x: '-=.5', y: "-=.5", transformOrigin:"top left",duration: 1.3, ease: "power2.inOut" },
          "shrink-grow-start-=.5"
        )
        .from(
          floatingh1Ref.current,
          { scale: 0, duration: 1 },
          "shrink-grow-start"
        )
        .to(
          panelTwoRef.current,
          { scale: 0, x: '-', y: 0, transformOrigin:"top left",duration: 1.3, ease: "power2.inOut" },
          "shrink-grow-end"
        )
        .to(
          floatingPanelRef.current,
          {
            width: "100vw",
            height: "100vh",
            bottom: 0,
            right: 0,
            duration: 1.3,
            ease: "power2.inOut",
          },
          "shrink-grow-end"
        )
        .to(
          floatingh1Ref.current,
          { scale: 1, duration: 1.1, ease: "power2.inOut" },
          "shrink-grow-end"
        )
        .from(
          floatingh2Ref.current,
          { y: "-100%", duration: 1.1, ease: "power2.inOut" },
          "shrink-grow-end-=0.05"
        )
        .from(floatingparaRef.current, {
          x: "-110%",
          duration: 0.9,
          ease: "power3.inOut",
        });

      gsap.set(sectionRedBgRef.current, { zIndex: -10 });
      gsap.set(sectionFourUnderRef.current, { zIndex: -10 });
      tl.to(
        [floatingPanelRef.current, overflowGridRef.current],
        { y: "-100vh", duration: 1.2, ease: "power2.inOut" },
        "scale-up"
      );
      tl.to(
        [gridRootRef.current],
        { y: "0", duration: 1.2, ease: "power2.inOut" },
        "scale-up"
      );
      tl.to(gridRootRef.current, {
        scale: 1,
      });
      tl.add("scale-up");
      tl.fromTo(
        sectionOneRef.current,
        {
          y: "-100%",
        },
        { y: "-30%", duration: 1.0, ease: "power2.out" },
        "scale-up"
      );
      tl.fromTo(
        sectionOneMaskRef.current,
        { clipPath: "inset(0% 50% 0% 50% round 2rem)" },
        {
          clipPath: "inset(0% 0% 0% 0% round 2rem)",
          duration: 1.0,
          ease: "power2.out",
        },
        "+=0.2"
      );

      tl.add("mask-open");
      tl.set(sectionRedBgRef.current, { zIndex: 0 }, "mask-open");
      tl.set(sectionFourUnderRef.current, { zIndex: 10 }, "mask-open");
      tl.call(() => {
        const blackBgTargets = [
          sectionBlackBgRef.current,
          sectionBlack2BgRef.current,
          sectionBlack3BgRef.current,
        ].filter(Boolean);
        if (blackBgTargets.length) {
          gsap.set(blackBgTargets, { zIndex: -10 });
        }
      }, null, "mask-open");
      tl.set([sectionFourUnderRef.current.querySelector("h1"),
        sectionFourUnderRef.current.querySelector("p")],{
          zIndex:10
        })

      tl.fromTo(
        sectionOneMaskRef.current,
        { clipPath: "inset(0% 0% 0% 0% round 2rem)" },
        {
          clipPath: "inset(0% 50% 0% 0% round 2rem)",
          duration: 1.0,
          ease: "power2.inOut",
        },
        "grid-close"
      );

      tl.to(sectionThreeRef.current, { x: "-35%", duration: 1.0, ease: "power2.inOut" }, "grid-close");
      
      const underEls = [
        sectionFourUnderRef.current?.querySelector("h1"),
        sectionFourUnderRef.current?.querySelector("p")
      ].filter(Boolean);
      
      const mainEls = [
        sectionFourRef.current?.querySelector("h1"),
        sectionFourRef.current?.querySelector("p")
      ].filter(Boolean);
      
      tl.to(
        mainEls,
        {
          x: "855",
          z: 30,
          duration: 1.0,
          ease: "power2.inOut",
        },
        "grid-close"
      );
      
      tl.fromTo(
       underEls,
        { x: 0 },
        { x: "290", duration: 1.0, ease: "power2.inOut" },
        "grid-close"
      );

      tl.to(gridRootRef.current, { x: "-=50%", duration: 1.0, ease: "power2.inOut" }, "+=0.4")
        .to(gridRootRef.current, { y: "-=50%", duration: 1.0, ease: "power2.inOut" }, "+=0.6")
        .to(gridRootRef.current, { x: "+=50%", duration: 1.0, ease: "power2.inOut" }, "+=0.6");

      ScrollTrigger.create({
        animation: tl,
        trigger: sceneRef.current,
        start: "top top",
        end: () => window.innerHeight * 8,
        scrub: 3,
        pin: true,
        anticipatePin: 1,
        markers: false,
      });
    }, sceneRef);

    return () => ctx.revert();
  });

  return (
    <div className="relative">
      <Navbar />
      <ReactLenis root options={{ smooth: true, lerp: 0.1, syncTouch: true }} />

      <img
        ref={p2logoRef}
        src="logo.png"
        alt="Logo"
        className="fixed top-10 right-24 w-64 z-[9999] pointer-events-none"
      />

      <div id="animated" className="relative">
        <div ref={sceneRef} className="w-screen h-screen">
          <HorizontalPanels
            ref={horizontalTrackRef}
            panelTwoRef={panelTwoRef}
            panelThreeRef={panelThreeRef}
            panelTwoMaskRef={panelTwoMaskRef}
            p2logoRef={p2logoRef}
            p2paraRef={p2paraRef}
            p2textRef={p2textRef}
            p2textRef2={p2textRef2}
            p2zoomRef={p2zoomRef}
            p2blackRef={p2blackRef}
            p2mainRef={p2mainRef}
          />
          <FloatingPanel
            ref={floatingPanelRef}
            floatingh1Ref={floatingh1Ref}
            floatingh2Ref={floatingh2Ref}
            floatingparaRef={floatingparaRef}
          />
          <GridStage
            ref={gridRootRef}
            overflowGridRef={overflowGridRef}
            sectionOneMaskRef={sectionOneMaskRef}
            sectionOneRef={sectionOneRef}
            sectionTwoRef={sectionTwoRef}
            sectionThreeRef={sectionThreeRef}
            sectionRedBgRef={sectionRedBgRef}
            sectionFourRef={sectionFourRef}
            sectionFourUnderRef={sectionFourUnderRef}
            sectionBlackBgRef={sectionBlackBgRef}
            sectionBlack2BgRef={sectionBlack2BgRef}
            sectionBlack3BgRef={sectionBlack3BgRef}
            sectionFiveRef={sectionFiveRef}
          />
        </div>
      </div>

      <ShowcaseSections />

      <div id="footer" className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default App;