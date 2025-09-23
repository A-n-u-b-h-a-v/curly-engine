import Navbar from "../Navbar";

const BlogSkeleton = () => {
    return (
      <div>
        <Navbar/>
        <div className="w-full h-screen flex flex-col  items-center overflow-hidden">
            
          <div className="pt-20 w-3xl h-screen  gap-10">
            {[...Array(3)].map((_, idx) => (
              <div key={idx} className="min-h-28 ">
                <div className="flex items-center gap-x-2">
                  <div className="w-5 h-5 bg-gray-300 rounded-full animate-pulse"></div>
                  <div className="w-40 h-4 bg-gray-300 rounded animate-pulse"></div>
                </div>
  
                <div className="w-full flex mx-7    items-center">
                  <div className="flex w-full justify-center gap-x-10 items-center mb-8">
                    <div className="flex w-full flex-col gap-3 mt-4">
                      <div className="w-64 h-6 bg-gray-300 rounded animate-pulse"></div>
                      <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
                      <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
                      <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                    
                  </div>
                </div>
                <hr className="text-stone-300 mb-6" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default BlogSkeleton;
  