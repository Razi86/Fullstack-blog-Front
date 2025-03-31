import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// Helper function to handle API errors
const handleError = (error) => {
  if (error.response) {
      // Server responded with a status other than 2xx
      return error.response.data.message || "Something went wrong! Please try again later.";
  } else if (error.request) {
      // The request was made, but no response was received
      return "Network error! Please check your internet connection.";
  } else {
      // Something else caused the error
      return error.message || "An unexpected error occurred.";
  }
};

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [cover, setCover] = useState("");
    const [author, setAuthor] = useState("");
    const navigate = useNavigate();


    const createPost = async (postData) => {
      try {
          const response = await axios.post(`${API_URL}posts`, postData);
          return response.data;
      } catch (error) {
          const errorMessage = handleError(error);
          console.error("Error creating post:", errorMessage);
          return { error: errorMessage };
      }
  };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = { title, content, cover, author };
        const response = await createPost(newPost);

        if (response.error) {
            alert(response.error);
        } else {
            navigate("/");
        }
    };

    return (
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Create a New Post</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" placeholder="Author" className="w-full p-2 border rounded" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                <input type="text" placeholder="Title" className="w-full p-2 border rounded" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <input type="text" placeholder="Cover Image URL" className="w-full p-2 border rounded" value={cover} onChange={(e) => setCover(e.target.value)} required />
                <textarea placeholder="Content" className="w-full p-2 border rounded" value={content} onChange={(e) => setContent(e.target.value)} required />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
                    Publish Post
                </button>
            </form>
        </div>
    );
};

export default CreatePost;