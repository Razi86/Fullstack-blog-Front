import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const PostContext = createContext();

const usePost = () => useContext(PostContext);

const PostProvider = ({ children }) => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  return (
    <PostContext.Provider
      value={{
        posts,
        setPosts,
        navigate
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export { usePost, PostProvider };
