import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedBox = ({ content = "Content" }) => {
    const pathRef = useRef(null);

    useEffect(() => {
      
      const path = pathRef.current;
      const length = path.getTotalLength();
  
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });
  
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 4,
        ease: "power1.inOut",
        
      });
    }, []);

  return (
    <div className="w-28 h-40 flex justify-center items-center text-white text-3xl font-bold relative">
       <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 112 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Start top-right, clockwise */}
      <path
        ref={pathRef}
        d="M110,2 L2,2 L2,158 L110,158 L110,2"
        fill="transparent"
        stroke="black"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
    </svg>

      {content}
    </div>
  );
};

export default AnimatedBox;
