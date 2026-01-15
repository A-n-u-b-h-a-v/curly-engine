import React from "react";

const PurchaseSummarySkeleton = () => {
  return (
    <div className="h-full animate-pulse">
      {/* HEADER */}
      <div>
        <div className="h-5 w-40 bg-gray-200 rounded mb-2 mx-7 mt-5"></div>
        <hr />
      </div>

      {/* BODY */}
      <div className="flex flex-col flex-1">
        {/* BODY HEADER */}
        <div className="mb-4 mt-1 px-7">
          <div className="h-3 w-20 bg-gray-200 rounded mb-2"></div>
          <div className="flex items-center space-x-3">
            <div className="h-6 w-20 bg-gray-200 rounded"></div>
            <div className="h-4 w-12 bg-gray-300 rounded"></div>
          </div>
        </div>

        {/* CHART placeholder */}
        <div className="flex-grow flex items-center justify-center">
          <div className="w-[90%] h-[200px] bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseSummarySkeleton;
