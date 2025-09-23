import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config";

interface Blog {
  id: string;
    title: string;
    content: string;
    createdAt: string;
    author:{
        name:string

    }
}
export const useBlogs = () => {
const [blogs, setblogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/v1/blog/bulk`,
    {
      headers: {
        Authorization: localStorage.getItem("accessToken") 
      }
    }
    ).then((res) => {
        console.log(res.data.posts);
        
      setblogs(res.data.posts);
      setLoading(false);
    })
  
  }, []);
  return { blogs, loading };
}