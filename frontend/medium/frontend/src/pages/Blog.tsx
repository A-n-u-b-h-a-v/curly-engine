import SkeletonLoader from "../components/Skeletons/SkeletonLoader";
import NavBar from "../components/Navbar";
import { useBlogs } from "../hooks/index";
import BlogCard from "../components/BlogCard";

const Blog = () => {
  const { blogs, loading } = useBlogs();

  if (loading) {
    return <SkeletonLoader />;
  }

  return (
    <div>
      <NavBar />
      <div className="w-full h-screen flex flex-col  items-center ">
        <div className="pt-20 w-3xl h-screen  gap-10">
            {blogs.map((blog, index) => (
            <BlogCard 
              key={index}
              id={blog.id} 
              title={blog.title} 
              author={blog.author.name} 
              content={blog.content} 
              date={new Date(blog.createdAt).toLocaleDateString(  'en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})} 
            />
            ))}
        </div>
      </div>
    </div>
  );
};
export default Blog;