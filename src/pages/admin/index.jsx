import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import customFetch from "../../utils/axios";

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await customFetch.get("/api/articles");
        setArticles(response.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };
    fetchArticles();
  }, []);

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
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

      <Link to="/admin/blog/create">
        <button className="px-4 py-2 bg-green-500 text-white rounded mb-4">
          Create New Article
        </button>
      </Link>

      <div className="grid gap-4">
        {articles.map((article) => (
          <div
            key={article._id}
            className="p-4 border rounded-lg shadow-md flex justify-between items-center"
          >
            <div className="flex flex-col">
              {article.image && (
                <img
                  src={`http://localhost:8000/${article.image}`}
                  alt={article.title}
                  className="w-32 h-32 object-cover mb-4"
                />
              )}
              <h2 className="text-xl font-semibold">{article.title}</h2>
              <p>{article.description}</p>
              <p className="text-sm text-gray-500">
                {article.content.slice(0, 100)}...
              </p>
            </div>
            <div className="flex gap-2">
              <Link
                to={`/admin/blog/edit/${article._id}`}
                className="px-3 py-1 bg-blue-500 text-white rounded"
              >
                Edit
              </Link>
              <button
                onClick={() => deleteArticle(article._id)}
                className="px-3 py-1 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
