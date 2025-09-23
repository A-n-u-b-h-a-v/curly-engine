import Navbar from "../components/Navbar"
import { useDetailedblog } from "../hooks/detailedBlog"
import SkeletonLoader from "../components/Skeletons/SkeletonLoader"
import NameInitial from "../components/NameInitial"

const Detailedblog = () => {
const {loading,blogDetail}=useDetailedblog()
if(loading || !blogDetail){
    return <SkeletonLoader/>
}
  return (
    <div className="h-screen flex flex-col  items-center overflow-hidden">
        <Navbar/>
        
        <div className="grid grid-cols-12  w-3/4 max-w-screen-xl gap-4 min-h-11/12 pt-5 ps-10">
            <div className="col-span-8 mx-auto flex flex-col gap-4  h-full min-w-full ">
                <div className="font-bold leading-12 text-4xl">{blogDetail.title}.</div>
                <div className="text-stone-400 font-serif tracking-wide font-light"> Publish at {new Date(blogDetail.createdAt).toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})}</div>
                <div className="text-xl font-serif tracking-wider leading-8 text-[#242424] ">{blogDetail.content}</div>
            </div>
            
            <div className="col-span-4 mx-auto flex flex-col  border-s-1 p-5  border-stone-200 h-full w-full gap-2 ">
                <div className="tracking-wider font-semibold text-stone-600 border-b-1 pb-2 border-stone-300">
                    Author
                </div>
                <div className="flex items-center gap-x-4">
                    <div><NameInitial size={10}/></div>
                    <div>
                    <div className="text-xl font-bold pt-3">
                Anonymous
                </div>
                <div className="text-stone-400 font-serif tracking-wide font-light mt-2">
                Words that linger, thoughts that spark — welcome to the mind behind the ink.
                </div>
                </div>
                    </div>
                
            </div>


        </div>
    </div>
  )
}

export default Detailedblog
