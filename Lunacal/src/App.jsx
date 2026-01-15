import Slider from "./components/Slider";
import TabPanel from "./components/TabPanel";

const App = () => {
  return (
    <div
      className="w-full h-screen flex text-white 
      bg-[linear-gradient(180deg,#373E44_-100%,#191B1F_100%)] 
      shadow-[10px_10px_40px_10px_#00000080] px-8 py-16 gap-10"
    >
      <div className="bg-[#61616133] backdrop-blur-md w-full rounded-3xl p-3 border border-[#ffffff33]" />

      <div className="flex flex-col items-center w-full gap-5">
        <div className="w-full min-h-1/2 flex flex-col items-center gap-4">
          <TabPanel />
          <div
            className="w-3/4 rounded-2xl h-2"
            style={{
              background: `linear-gradient(180deg, rgba(40, 40, 40, 0.1) 0%, rgba(248, 248, 248, 0.1) 100%),
                           linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))`,
              backdropFilter: "blur(9.837px)",
              boxShadow: "0px 4px 4px 0px #00000054",
            }}
          />
        </div>

        <div className="w-full min-h-1/2 flex flex-col items-center">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default App;
