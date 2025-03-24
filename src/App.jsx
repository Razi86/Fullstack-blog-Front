import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PostProvider } from "./context/PostContext";
import MainTemplate from "./layout/MainTemplate";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import PostDetail from "./pages/PostDetail";

function App() {
  return (
    <Router>
      <PostProvider>
        <Routes>
          <Route path="/" element={<MainTemplate />}>
            <Route index element={<Home />} />
            <Route path="createPost" element={<CreatePost />} />
            <Route path="/posts/:id" element={<PostDetail />} />
          </Route>
        </Routes>
      </PostProvider>
    </Router>
  );
}

export default App;
