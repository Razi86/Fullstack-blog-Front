import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const PostContext = createContext();

const usePost = () => useContext(PostContext);

const PostProvider = ({ children }) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [posts, setPosts] = useState([]);

  return (
    <PostContext.Provider
      value={{
        error,
        posts,
        setPosts,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export { usePost, PostProvider };
