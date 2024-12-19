import React, { useState, useEffect } from "react";
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
            // <div
            //   key={article._id}
            //   className="rounded-lg overflow-hidden cursor-pointer"
            //   onClick={() => navigate(`/blog/${article._id}`)}
            // >
            //   <img
            //     src={`${process.env.REACT_APP_BACKEND_URL}/${article.image}`}
            //     alt={article.title}
            //     className="w-full h-48 object-cover"
            //   />
            //   <div className="p-4">
            //     <h2 className="text-xl font-semibold">{article.title}</h2>
            //     <p className="text-gray-600">
            //       {article.author} |{" "}
            //       {new Date(article.createdAt).toLocaleDateString()}
            //     </p>
            //     <p className="text-gray-800 mt-2">
            //       {article?.description &&
            //         article?.description.substring(0, 200)}
            //     </p>
            //   </div>
            // </div>
            <div
              key={article._id}
              className="relative rounded-lg overflow-hidden cursor-pointer group"
              // onClick={() => navigate(`/blog/${article._id}`)}
            >
              <img
                src={`${process.env.REACT_APP_BACKEND_URL}/${article.image}`}
                alt={article.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{article.title}</h2>
                <p className="text-gray-600">
                  {article.author} |{" "}
                  {new Date(article.createdAt).toLocaleDateString()}
                </p>
                <p className="text-gray-800 mt-2">
                  {article?.description &&
                    article?.description.substring(0, 200)}
                </p>
              </div>

              {/* Overlay and Button */}
              <div className="absolute inset-0 bg-[#827c7c] bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/blog/${article._id}`);
                  }}
                  className="px-4 py-2 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700"
                >
                  Details
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UpdatedNews;
