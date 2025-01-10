import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UpdatedNews = () => {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("latest");
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Fetch articles with filters
  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/articles`,
          {
            params: { search, sort, page },
          }
        );
        setArticles(response.data.articles);
        // setArticles(response.data);
        setNumOfPages(response.data.numOfPages);
        console.log("response", response);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [search, sort, page]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(1); // Reset to first page
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
    setPage(1); // Reset to first page
  };

  return (
    <div className="container w-[80%] mx-auto px-4 py-8">
      <div className="flex justify-between items-center mt-8">
        <h1 className="text-4xl font-bold mb-8">Updated News</h1>
      </div>

      {/* Search and Sort Controls */}
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search articles..."
          value={search}
          onChange={handleSearchChange}
          className="px-4 py-2 border rounded-lg w-[40%]"
        />
        <select
          value={sort}
          onChange={handleSortChange}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
        </select>
      </div>

      {/* Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          <p>Loading articles...</p>
        ) : articles?.length === 0 ? (
          <p>No articles found.</p>
        ) : (
          articles?.map((article) => (
            <div
              key={article._id}
              className="relative rounded-lg overflow-hidden cursor-pointer group"
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

      {/* Pagination */}
      <div className="flex justify-end items-center mt-8 gap-2">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page {page} of {numOfPages}
        </span>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, numOfPages))}
          disabled={page === numOfPages}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UpdatedNews;
