import { useRef, useState } from "react";
import { TABS } from "../constants/tabs";
import { motion } from "motion/react";
import Icon from "./Icon";
const TabPanel = () => {
  const tabRef = useRef(null);
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  return (
    <div className="w-full h-full bg-[#363C43] shadow-[5.67px_5.67px_3.78px_0px_#00000066] rounded-4xl p-4 flex">
      <Icon />
      <div>
        <ul
          ref={tabRef}
          className="bg-[#171717] text-white flex w-full h-16 p-2 rounded-3xl justify-between items-center gap-2 relative overflow-hidden shadow-[inset_0px_4.96px_12.4px_2.48px_#00000040]"
        >
          {TABS.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <li
                key={tab.id}
                className="group cursor-pointer w-full h-full rounded-xl text-center relative text-white z-10 flex justify-center items-center"
                onClick={() => setActiveTab(tab.id)}
              >
                {isActive && (
                  <motion.div
                    layoutId="slider"
                    className="absolute inset-0 rounded-xl bg-[#28292F] shadow-[-8.43px_-16.87px_50.6px_0px_rgba(72,91,113,0.6)]"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <span className="z-10">{tab.label}</span>
                <div className="rounded-xl absolute inset-0 w-0 group-hover:w-full transition-all duration-500 bg-[#22222280] shadow-[inset_0px_4.96px_12.4px_2.48px_#22222250] -z-10"></div>
              </li>
            );
          })}
        </ul>

        <div className="mt-4 p-4 text-white">
          {TABS.find((tab) => tab.id === activeTab)?.content}
        </div>
      </div>
    </div>
  );
};

export default TabPanel;
