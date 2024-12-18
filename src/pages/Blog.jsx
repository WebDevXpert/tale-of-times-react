import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Blog() {
  const [blog, setBlog] = useState({});
  const { id } = useParams();
  useEffect(() => {
    async function fetchBlog() {
      const data = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/articles/${id}`
      );
      setBlog(data.data);
      console.log(data);
    }
    fetchBlog();
  }, []);
  return (
    <div className="flex flex-col justify-center w-2/3 mx-auto">
      <img
        src={`${process.env.REACT_APP_BACKEND_URL}/${blog.image}`}
        alt=""
        className="w-full"
      />
      <h1>{blog.title}</h1>
      <p>{blog.description}</p>
    </div>
  );
}

export default Blog;
