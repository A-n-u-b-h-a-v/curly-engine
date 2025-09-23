import Navbar from "../Navbar";

const SkeletonLoader = () => {
  return (
    <div className="h-screen flex flex-col items-center bg-white">
      <Navbar />
      <div className="grid grid-cols-12 w-3/4 max-w-screen-xl gap-4 pt-5 ps-10 min-h-[90vh]">
        <div className="col-span-8 flex flex-col gap-6">
          <div className="h-12 w-3/4 bg-gray-300 rounded-md animate-pulse" />
          <div className="h-4 w-1/3 bg-gray-300 rounded animate-pulse" />
          <div className="space-y-4">
            <div className="h-4 w-full bg-gray-300 rounded animate-pulse" />
            <div className="h-4 w-5/6 bg-gray-300 rounded animate-pulse" />
            <div className="h-4 w-4/6 bg-gray-300 rounded animate-pulse" />
            <div className="h-4 w-5/6 bg-gray-300 rounded animate-pulse" />
            <div className="h-4 w-full bg-gray-300 rounded animate-pulse" />
          </div>
        </div>

        <div className="col-span-4 mx-auto flex flex-col border-s p-5 border-stone-200 h-full w-full gap-4">
  <div className="h-4 w-1/4 bg-gray-300 rounded animate-pulse mb-2 border-b border-stone-300 pb-2" />
  <div className="flex items-center gap-x-4">
    <div className="h-10 w-10 bg-gray-300 rounded-full animate-pulse" />
    <div className="flex flex-col gap-2">
      <div className="h-6 w-24 bg-gray-300 rounded animate-pulse" />
      <div className="h-3 w-40 bg-gray-300 rounded animate-pulse" />
      <div className="h-3 w-32 bg-gray-300 rounded animate-pulse" />
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
