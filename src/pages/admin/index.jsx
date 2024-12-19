import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import customFetch from "../../utils/axios";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("latest");
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await customFetch.get("/api/articles", {
          params: { search, sort, page },
        });
        setArticles(response.data.articles);
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

  const deleteArticle = async (id) => {
    try {
      await customFetch.delete(`/api/articles/${id}`);
      setArticles(articles.filter((article) => article._id !== id));
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

        <Link to="/admin/blog/create">
          <button className="px-4 py-2 bg-green-500 text-white rounded mb-4">
            Create New Article
          </button>
        </Link>
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

      <div className="grid gap-4">
        {articles?.map((article) => (
          <div
            key={article._id}
            className="p-4 border rounded-lg shadow-md flex justify-between items-center"
          >
            <div className="flex flex-col">
              {article?.image && (
                <img
                  src={`${process.env.REACT_APP_BACKEND_URL}/${article?.image}`}
                  alt={article.title}
                  className="w-32 h-32 object-cover mb-4"
                />
              )}
              <h2 className="text-xl font-semibold">{article?.title}</h2>
              <p>{article?.description?.substring(0, 200)}</p>
              <p className="text-sm text-gray-500">
                {article.content.slice(0, 100)}...
              </p>
            </div>
            <div className="flex gap-2">
              <Link
                to={`/admin/blog/edit/${article?._id}`}
                className="px-3 py-1 bg-blue-500 text-white rounded"
              >
                Edit
              </Link>
              <button
                onClick={() => deleteArticle(article?._id)}
                className="px-3 py-1 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
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
}
