import React from "react";

const ExpenseSummarySkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* HEADER */}
      <div>
        <div className="h-5 w-40 bg-gray-200 rounded mb-2 mx-7 mt-5"></div>
        <hr />
      </div>

      {/* BODY */}
      <div className="xl:flex justify-between pr-7">
        {/* Chart placeholder */}
        <div className="relative basis-3/5 flex items-center justify-center">
          <div className="w-32 h-32 rounded-full bg-gray-200"></div>
          <div className="absolute w-12 h-4 bg-gray-300 rounded"></div>
        </div>

        {/* Labels placeholder */}
        <ul className="flex flex-col justify-around items-center xl:items-start py-5 gap-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <li
              key={index}
              className="flex items-center text-xs space-x-2"
            >
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              <div className="h-3 w-16 bg-gray-200 rounded"></div>
            </li>
          ))}
        </ul>
      </div>

      {/* FOOTER */}
      <div>
        <hr />
        <div className="mt-3 flex justify-between items-center px-7 mb-4">
          <div className="h-4 w-32 bg-gray-200 rounded"></div>
          <div className="h-4 w-10 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseSummarySkeleton;
