import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PostProvider } from "./context/PostContext";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import PostDetail from "./pages/PostDetail";
import EditPost from "./pages/EditPost";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <PostProvider>
          <Navbar />
          <main className="px-11 overflow-auto h-[90vh] pt-6">
            <Routes>
                <Route index element={<Home />} />
                <Route path="createPost" element={<CreatePost />} />
                <Route path="/posts/:id" element={<PostDetail />} />
                <Route path="/editPost/:id" element={<EditPost />} />
            </Routes>
          </main>
      </PostProvider>
    </Router>
  );
}

export default App;
