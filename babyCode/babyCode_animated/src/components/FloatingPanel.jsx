import { forwardRef } from "react";

const FloatingPanel = forwardRef(function FloatingPanel(
  { floatingh1Ref, floatingh2Ref, floatingparaRef },
  floatingPanelRef
) {
  return (
    <div
      ref={floatingPanelRef}
      className="fixed bottom-[10%] right-[20%] overflow-hidden text-white flex items-center justify-center mollen-bold"
      style={{
        width: "50vw",
        height: "50vh",
        transformOrigin: "top left", // ensures smooth scaling with grid
      }}
    >
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <img
          src="panel4.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Top-left text */}
      <div className="absolute inset-0 ps-5">
        <div
          ref={floatingh2Ref}
          className="bg-black text-5xl py-12 leading-12 w-[300px] px-4"
        >
          <h2>Supportive</h2>
          <h2 className="whitespace-nowrap ">Learning Community</h2>
        </div>
        <div
          ref={floatingparaRef}
          className="absolute text-black mt-5 max-w-[35ch] leading-5"
        >
          <p>
            Join a vibrant online classroom with expert instructors and motivated peers. Get guidance, feedback, and encouragement every step of your IELTS journey.
          </p>
        </div>
      </div>

      {/* Center text */}
      <div
        ref={floatingh1Ref}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center space-x-4 text-9xl font-bold z-10"
      >
        <h1 className="px-5 pt-2 bg-black">Online</h1>
        <h1>Study</h1>
      </div>
    </div>
  );
});

export default FloatingPanel;
