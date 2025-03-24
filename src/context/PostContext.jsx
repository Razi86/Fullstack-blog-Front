import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const PostContext = createContext();

const usePost = () => useContext(PostContext);

const PostProvider = ({ children }) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [post, setPost] = useState([]);

  return (
    <PostContext.Provider
      value={{
        error,
        post,
        setPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export { usePost, PostProvider };
