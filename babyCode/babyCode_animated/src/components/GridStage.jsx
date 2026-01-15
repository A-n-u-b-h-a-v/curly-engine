import { forwardRef } from "react";

const GridStage = forwardRef(function GridStage(
  {
    sectionOneRef,
    sectionTwoRef,
    sectionThreeRef,
    sectionOneMaskRef,
    sectionRedBgRef,
    sectionFourRef,
    sectionFourUnderRef,
    sectionBlackBgRef,
    sectionBlack2BgRef,
    sectionBlack3BgRef,
    sectionFiveRef,
    overflowGridRef,
  },
  gridRootRef
) {
  // The first grid is a 2x2 layout, each cell is a full w-[100vw] h-screen panel
  return (
    <div
      ref={overflowGridRef}
      className="overflow-hidden w-[100vw] h-[100vh] relative rounded-4xl "
    >
      <div
        ref={gridRootRef}
        className="w-[200vw] absolute h-[200vh] grid grid-cols-2 gap-5 grid-rows-2 z-40 mollen-bold"
        style={{ scale: 0.5 }}
      >
        {/* Panel 1 (Top Left) */}

        <div className=" bg-zinc-900 rounded-4xl overflow-hidden relative mollen-bold text-white">
        <div ref={sectionOneRef} className="h-full w-full absolute">
            <img
              src="panel5.png"
              
              className="w-full h-full object-cover inset-0 "
              alt=""
            />
          </div>
        {/* <div
            ref={sectionBlackBgRef}
            className="bg-zinc-900 w-full h-full absolute inset-0"
          ></div> */}
          <div className="flex flex-col p-5 h-full justify-between">
            <div className="p-5">
              <h2 className="text-5xl">IELTS Preparation You Can Trust</h2>
            </div>
            <div className="flex flex-col ">
              <p className="text-md max-w-[40ch] pb-5">
                Focused training with proven strategies to improve your overall
                band score.
              </p>
              <h1 className="text-7xl">
                Speaking <br />
                Practice Labs
              </h1>
            </div>
          </div>
          
          <div
            ref={sectionOneMaskRef}
            className="absolute inset-0 rounded-4xl overflow-hidden z-20"
            style={{ clipPath: "inset(50% 0% 50% 0% round 2rem)" }}
          >
            <div ref={sectionTwoRef} className="absolute inset-0 rounded-4xl">
              <div ref={sectionThreeRef} className="w-full h-full rounded-4xl">
                <img
                  src="panel6.png"
                  className=" w-full h-full object-cover"
                  alt=""
                />
                <div ref={sectionFourRef} className="absolute top-1/4  z-[999] left-10 text-white text-center">
                  <h1 className="text-[12rem] leading-44 text-start">Expert <br />Trainers
                  </h1>
                  <p className="max-w-[35ch] text-xl text-start ">Get coached by certified mentors with real exam insights and personalized feedback.</p>
                </div>
              </div>
            </div>
          </div>
          <div ref={sectionFourUnderRef} className="absolute top-1/4 z left-10 text-white text-center">
                  <h1 className="text-[12rem] leading-44 text-start">Expert <br />Trainers
                  </h1>
                  <p className="max-w-[35ch] text-xl text-start ">Get coached by certified mentors with real exam insights and personalized feedback.</p>
                </div>
          <div
            ref={sectionRedBgRef}
            className="absolute inset-0 h-full -z-10 w-full bg-red-500"
          ></div>
          
        </div>
        {/* Panel 2 (Bottom Left) */}
        <div className="w-full h-full bg-zinc-900 flex items-center justify-center rounded-4xl overflow-hidden relative">
          <div
            ref={sectionBlackBgRef}
            className="bg-zinc-900 w-full h-full absolute inset-0 z-10"
          ></div>
          <div className="flex flex-col p-5 h-full justify-between text-white z-20 w-full">
            <div className="p-5">
              <h2 className="text-5xl">IELTS Preparation You Can Trust</h2>
            </div>
            <div className="flex flex-col ">
              <p className="text-md max-w-[40ch] pb-5">
                Timed practice with detailed analytics to highlight strengths and areas to
                improve.
              </p>
              <h1 className="text-7xl">
                Full-Length <br />
                Mock Tests
              </h1>
            </div>
          </div>
          <img src="panel7.png" className="w-full h-full object-cover absolute inset-0 z-0" alt="" />
        </div>

        {/* Panel 3 (Bottom Left) */}
        <div className="w-full h-full bg-zinc-900 flex items-center justify-center rounded-4xl overflow-hidden relative">
          <div
            ref={sectionBlack2BgRef}
            className="bg-zinc-900 w-full h-full absolute inset-0 z-10"
          ></div>
          <div className="flex flex-col p-5 h-full justify-between z-20 text-white w-full">
            <div className="p-5">
              <h2 className="text-5xl">IELTS Preparation You Can Trust</h2>
            </div>
            <div className="flex flex-col ">
              <p className="text-md max-w-[40ch] pb-5">
                Get instant band predictions and guidance to reach your target score.
              </p>
              <h1 className="text-7xl">
                AI Band <br />
                Score
              </h1>
            </div>
          </div>
          <img src="panel9.jpg" className="w-full h-full absolute inset-0 z-0 object-cover" alt="" />
        </div>

        {/* Panel 4 (Bottom Right) */}
        <div className="w-full h-full bg-zinc-900 flex items-center justify-center rounded-4xl overflow-hidden relative">
          <div
            ref={sectionBlack3BgRef}
            className="bg-zinc-900 w-full h-full absolute inset-0 z-10"
          ></div>
          <div className="flex flex-col p-5 h-full justify-between text-white w-full z-20">
            <div className="p-5">
              <h2 className="text-5xl">IELTS Preparation You Can Trust</h2>
            </div>
            <div className="flex flex-col ">
              <p className="text-md max-w-[40ch] pb-5">
                Join thousands of learners who achieved their dream scores with us.
              </p>
              <h1 className="text-7xl">
                Student <br />
                Success
              </h1>
            </div>
          </div>
          <img src="panel8.png" className="w-full h-full object-cover absolute inset-0 z-0" alt="" />
        </div>
      </div>
    </div>
  );
});

export default GridStage;