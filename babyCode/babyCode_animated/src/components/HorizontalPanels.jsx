  import { forwardRef, useRef, useEffect, useState } from "react";
  import { XIcon, VIcon, CircleArrow } from "./Icon";
  import { gsap } from "gsap";
  import AnimatedBox from "./AnimatedBox";

const HorizontalPanels = forwardRef(function HorizontalPanels(
  {
    panelTwoRef,
    panelThreeRef,
    panelTwoMaskRef,
    p2logoRef,
    p3textOverlayRef,
    p3textRef,
    p2paraRef,
    p2textRef,
    p2textRef2,
    p2zoomRef,
    p2divRef,p2blackRef,p3textOverlayH1Ref,p3h1Ref,p3paraRef,p2mainRef
  },
  horizontalTrackRef
) {
  const viconRefs = useRef([]);
  const contentRef = useRef(null);
  const [countdown, setCountdown] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev >= 5) {
          clearInterval(timer);
          return 5;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

    useEffect(() => {
      const elements = viconRefs.current.filter(Boolean);

      if (elements.length && gsap) {
        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

        tl.fromTo(
          elements,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
        );

        tl.to(elements, {
          y: 100,
          duration: 1,
          stagger: { each: 0.2, from: "end" },
        });
      }

      if (contentRef.current) {
        const childEls = contentRef.current.querySelectorAll("h1, p, img");
        gsap.set(childEls, { y: "100%" });
        gsap.to(childEls, {
          y: "0%",
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          delay: 0.3,
        });
      }
    }, []);

    return (
      <div
        ref={horizontalTrackRef}
        className="flex h-screen w-[300vw] gap-2 sm:gap-6 bg-red-500 overflow-hidden relative leading-40"
      >
        <div className="w-screen h-full bg-slate-200 flex items-center justify-center rounded-4xl relative overflow-hidden">
          <div
            ref={contentRef}
            className="w-4/6 mt-20 flex flex-col gap-3 overflow-hidden"
          >
            <div className="overflow-hidden">
              <h1 className="text-[12vw] font-extrabold mollen-bold">
                Achieve Your
                <span className="text-red-500"> IELTS Band</span>
              </h1>
            </div>
            <div className="overflow-hidden">
              <p className="text-5xl mollen-bold px-2">Modern, professional IELTS coaching for success.</p>
            </div>
            <div className="overflow-hidden w-56 px-2">
              <img src="logo.png" alt="logo" />
            </div>
          </div>
          <div className="absolute flex top-10 right-1/6 gap-5">
            <XIcon />
            <XIcon />
          </div>
          <div className="absolute flex flex-col items-center justify-between left-20 top-2/5 h-1/2">
            <div className="flex flex-col">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  ref={(el) => (viconRefs.current[i] = el)}
                  className="opacity-0"
                >
                  <VIcon />
                </div>
              ))}
            </div>
            <AnimatedBox content={`${countdown}`} />
          </div>
          <div className="absolute right-1/6 bottom-1/10">
            <CircleArrow />
          </div>
        </div>
        <div
          ref={panelTwoRef}
          className="w-screen h-full relative rounded-4xl flex items-center justify-center bg-transparent"
        >
          <div
    ref={panelTwoMaskRef} // only once
    className="absolute top-0 left-0 w-full h-full rounded-4xl overflow-hidden"
    style={{ clipPath: "inset(0% 50% 0% 50% round 2rem)" }}
  >
    <img
      ref={p2zoomRef}
      src="panel2.png"
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div ref={p2blackRef} className="absolute top-[50vh] w-full flex flex-col gap-y-1">
      <div className="bg-black flex h-32 w-11/12 pt-5 items-center text-white ms-20 ps-5 z-10" />
      <div className="bg-black flex h-32 w-11/12 pt-5 items-center text-white ps-24 z-9" />
    </div>
  </div>
  <div ref={p2mainRef} className="absolute top-[50vh] left-0 w-full h-full pointer-events-none flex flex-col gap-y-1">
    <p
      ref={p2paraRef}
      className="absolute max-w-[30ch] -top-20 text-xs mollen-bold text-white left-28 text-start pb-5"
    >
      Comprehensive training in Listening, Reading, Writing, and Speaking, tailored to your goals.
    </p>

    <h1
      ref={p2textRef}
      className="absolute -top-2  left-25 text-[9em] mollen-bold tracking-wide text-white"
    >
      Expert
    </h1>

    <h1
      ref={p2textRef2}
      className="absolute top-32 left-25 text-[9em] mollen-bold tracking-wide text-white"
    >
      Coaching
    </h1>
  </div>
  {/* PANEL 3 */}
  <div
    ref={panelThreeRef}
    className="absolute left-0 w-full h-[50vh] -translate-y-1/2 rounded-4xl overflow-hidden"
    style={{
      clipPath: "inset(100% 0% 50% 0% round 2rem)",
    }}
  >
    <img
      src="panel3.png"
      alt="IELTS Coaching"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div
      ref={p3textRef}
      className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
    >
      <h1 className="text-white text-8xl mollen-bold font-bold text-center">AI Band Score Insights</h1>
    </div>
  </div>
  <div ref={p3paraRef} className="absolute left-14 top-0 opacity-0">
      <p  className="w-2/5  text-xs mollen-bold text-white text-start pb-5" >Practice with instant feedback and track progress with data-driven recommendations.</p>
    </div>
    <div ref={p3h1Ref} className="absolute right-0 bottom-0 opacity-0">
      <h1 className=" text-6xl mollen-bold text-white text-start pb-5" >Personalized Study Plans</h1>
    </div>
  <div
    ref={p3textOverlayRef}
    className="absolute top-1/4 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none opacity-0"
  >
    <h1 ref={p3textOverlayH1Ref} className="text-white text-8xl mollen-bold font-bold text-center">AI Band Score Insights</h1>
  </div>


        </div>
        <div className="w-screen h-full flex items-center justify-center text-white"></div>
      </div>
    );
  });

  export default HorizontalPanels;


