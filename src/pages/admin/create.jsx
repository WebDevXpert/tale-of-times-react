import { useState } from "react";
import { useNavigate } from "react-router-dom";
import customFetch from "../../utils/axios";
import { toast } from "react-toastify";

export default function CreateArticle() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const createArticle = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("description", description);

    if (image) {
      formData.append("image", image);
    }

    try {
      await customFetch.post(`/api/articles`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Article created successfully");
      navigate("/admin/blogs");
    } catch (error) {
      console.error("Error creating article:", error);
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create Article</h1>
      <form onSubmit={createArticle} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
            rows="4"
            required
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
            rows="2"
            required
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium">Image</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Create Article
        </button>
      </form>
    </div>
  );
}
