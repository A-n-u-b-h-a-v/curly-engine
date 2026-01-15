import React from "react";

const PopularProductsSkeleton = () => {
  return (
    <>
      <h3 className="text-lg font-semibold px-7 pt-5 pb-2">
        Popular Products
      </h3>
      <hr />
      <div className="overflow-auto h-full animate-pulse">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-between gap-3 px-5 py-7 border-b"
          >
            {/* Left Section */}
            <div className="flex items-center gap-3">
              {/* Image placeholder */}
              <div className="w-12 h-12 bg-gray-200 rounded"></div>

              <div className="flex flex-col gap-2">
                <div className="h-4 w-32 bg-gray-200 rounded"></div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-12 bg-gray-200 rounded"></div>
                  <div className="h-3 w-20 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-200"></div>
              <div className="h-3 w-16 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PopularProductsSkeleton;
