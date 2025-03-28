import { useState,useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { usePost } from "../context/PostContext";
import axios from 'axios';

const PostDetail = () => {

  const {posts,setPosts,navigate} = usePost();
  const { id } = useParams();
  const [postDetail, setPostDetail] = useState(null);
  const APIURL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchOnePost = async() =>{
      try {
        const res = await axios.get(`${APIURL}posts/${id}`);
        console.log(res)
        setPostDetail(res.data[0]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchOnePost();
  }, [id])
  
  const deletePost = async(id) => {
    try {
      await axios.delete(`${APIURL}posts/${id}`);
      setPosts(posts.filter((post) => {post.id !== id}));
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  }

  if (!postDetail) {
    return (
      <div>
        <h2>Post Not Found</h2>
        <Link to="/" className="text-[#a60000] underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-5 border-[#ff9696] rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-[#5a5a5a]">{postDetail.title}</h2>
      <div className="mb-2">
        <img src={postDetail.cover} alt={postDetail.title} />
      </div>
      <p className="mb-2">
        <span className="font-semibold">Content: </span>
        {postDetail.content}
      </p>
      <p className="mb-2">
        <span className="font-semibold text-[#5a5a5a]">Date: </span>
        {new Date(postDetail.date).toLocaleDateString()}
      </p>
      <p className="mb-2">
        <span className="font-semibold text-[#5a5a5a]">Author: </span>
        {postDetail.author}
      </p>
      <button 
        className="bg-red-600 text-white px-4 py-2 rounded shadow hover:bg-red-700 mr-5"
        onClick={() => deletePost(postDetail.id)}>
          Delete Post
      </button>
      <Link to={`/editPost/${postDetail.id}`}
        className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700">
        Edit Post
      </Link>
      <Link to="/" className="mt-4 block text-[#ff2424] underline">
        Back to Home
      </Link>
    </div>
  );
};

export default PostDetail;
