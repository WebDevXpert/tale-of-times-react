import React, { useState, useEffect } from "react";
import customFetch from "../utils/axios";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UpdatedNews = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/articles`
        );
        setArticles(response.data);
        console.log("response", response);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="container w-[80%] mx-auto px-4 py-8">
      <div className="flex justify-between items-center mt-8">
        <h1 className="text-4xl font-bold mb-8">Updated News</h1>
        <a href="#" className="text-black hover:text-blue-700 font-semibold">
          View All →
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.length === 0 ? (
          <p>Loading articles...</p>
        ) : (
          articles.map((article, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden cursor-pointer"
              onClick={() => navigate(`/blog/${article._id}`)}
            >
              <img
                src={`http://localhost:8000/${article.image}`}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <a href="" className="text-blue-600 text-sm">
                  Stock Market
                </a>
                <h2 className="text-xl font-semibold">{article.title}</h2>
                <p className="text-gray-600">
                  {article.author} |{" "}
                  {new Date(article.createdAt).toLocaleDateString()}
                </p>
                <p className="text-gray-800 mt-2">{article.description}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UpdatedNews;
