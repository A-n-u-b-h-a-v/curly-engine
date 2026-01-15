


import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function XIcon() {
  const xRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      xRef.current,
      {
        scale: 0,
      },
      {
        scale: 1,
        duration: 2,
        
        ease: "power2.out",
      }
    );
  }, []); 
 

  return (
    <div ref={xRef} className="relative w-18 h-18"> <span className="absolute inset-0 w-[2px] h-full bg-gray-600 rotate-45 m-auto" /> <span className="absolute inset-0 w-[2px] h-full bg-gray-600 -rotate-45 m-auto" /> </div>
  );
}

export  function VIcon() {
    return (
      <div className="relative w-15 h-8">
      <span className="absolute left-1/2 bottom-1/4 w-[2px] h-7 bg-gray-600 -rotate-30 -translate-x-1/2 origin-bottom" />
      <span className="absolute left-1/2 bottom-1/4 w-[2px] h-7 bg-gray-600 rotate-30 -translate-x-1/2 origin-bottom" />
    </div>
    );
  }

  export function CircleArrow() {
    const circleRef = useRef(null);
  
    useEffect(() => {
      if (circleRef.current) {
        const length = circleRef.current.getTotalLength();
        gsap.fromTo(
          circleRef.current,
          { strokeDasharray: length, strokeDashoffset: length },
          { strokeDashoffset: 0, duration: 2, ease: "power2.inOut" }
        );
      }
    }, []);
  
    return (
      <div className="flex items-center justify-center">
        <svg
          width="80"
          height="80"
          viewBox="0 0 100 100"
          className="cursor-pointer"
        >
          <circle
            ref={circleRef}
            cx="50"
            cy="50"
            r="35"
            stroke="black"
            strokeWidth="2"
            fill="none"
            transform="rotate(-90 50 50)"
          />
  
          <path
            d="M35 50 H65 M55 40 L65 50 L55 60"
            stroke="black"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }
  