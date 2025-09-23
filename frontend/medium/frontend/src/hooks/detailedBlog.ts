import { useParams } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config";
import { useEffect } from "react";

interface BlogDetail{
    title: string;
    content: string;
    id: number;
    createdAt: Date;
    published: boolean;
    authorId: string;
}
export const useDetailedblog = () => {
    const {id} = useParams()
    const [loading, setloading] = useState(true);
    const [blogDetail, setblogDetail] = useState<BlogDetail>();

    useEffect(() => {
        
        axios.get(`${BASE_URL}/api/v1/blog/${id}`,{
            headers: {
                Authorization: localStorage.getItem("accessToken")
            }
        }).then((res) => {
            console.log(res.data.blog);
            setblogDetail(res.data.blog);
            setloading(false);
        })
        
    }, []);
    return {loading,blogDetail}
}