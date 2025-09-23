import { useMemo } from "react";
import NameInitial from "./NameInitial";
import { Link } from "react-router-dom";


interface CreateBlogProps {
  title: string
  content: string
  author: string
  date: string
  id:string
}
const BlogCard = ({ title, content, author, date,id }: CreateBlogProps) => {


  const contentLength = (content: string) => {
    return useMemo(() => {
      let finalContent = "";
      const words = content.split(" ").length;
      if (words > 10) {
        for (let i = 0; i < 10; i++) {
          finalContent += content.split(" ")[i] + " ";
        }
        return finalContent.trimEnd() + "...";
      } else {
        return content;
      }
    }, [content]);
  };

  return (

    <Link to={`blog/${id}`}><div className="w-full  flex flex-col justify-center items-center ">

    <div className="flex w-full justify-start items-center gap-x-2 ">
      <NameInitial size={5} />
      <div className="text-sm text-stone-400 flex justify-center items-center pb-1">{author} | {date}</div>
    </div>
    <div className="w-full flex  min-h-28 ">
      <div className="w-full px-7 flex justify-between gap-x-10  ">
        <div >
          <div className="text-2xl font-bold mt-2">{title}</div>
          <div className="text-stone-600 text-lg font-serif pt-2">{contentLength(content)}
          </div>
        </div>
       
      </div>
    </div>
      <hr className="text-stone-300 w-full mb-6" />
  </div></Link>
  )
}

export default BlogCard
