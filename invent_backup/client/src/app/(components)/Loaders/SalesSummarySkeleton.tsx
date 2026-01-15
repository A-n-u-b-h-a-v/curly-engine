import React from "react";

const SalesSummarySkeleton = () => {
  return (
    <div className="row-span-3 xl:row-span-6 bg-white shadow-md rounded-2xl flex flex-col justify-between animate-pulse">
      {/* HEADER */}
      <div>
        <h2 className="text-lg font-semibold mb-2 px-7 pt-5">
          Sales Summary
        </h2>
        <hr />
      </div>

      {/* BODY */}
      <div>
        {/* BODY HEADER */}
        <div className="flex justify-between items-center mb-6 px-7 mt-2">
          <div className="space-y-2">
            <div className="h-3 w-12 bg-gray-200 rounded"></div>
            <div className="h-6 w-24 bg-gray-300 rounded"></div>
            <div className="h-4 w-16 bg-gray-200 rounded"></div>
          </div>
          <div className="h-9 w-24 bg-gray-200 rounded"></div>
        </div>

        {/* CHART */}
        <div className="px-7">
          <div className="h-[350px] w-full bg-gray-100 rounded"></div>
        </div>
      </div>

      {/* FOOTER */}
      <div>
        <hr />
        <div className="flex justify-between items-center mt-6 text-sm px-7 mb-4">
          <div className="h-3 w-12 bg-gray-200 rounded"></div>
          <div className="h-3 w-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default SalesSummarySkeleton;
