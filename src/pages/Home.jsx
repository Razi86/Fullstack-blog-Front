import { usePost } from "../context/PostContext";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function Home() {
  const { posts, setPosts} = usePost();
  const APIURL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchPost = async() =>{
      try {
        const res = await axios.get(`${APIURL}`);
        console.log(res);
        setPosts(res.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPost();
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
        {posts?.map((ev) => (
          <div
            key={ev.id}
            className="relative border-2 border-[#ff9696] rounded-md shadow-lg bg-[#fff1e3]"
          >
            <h1 className="text-red-500 text-xl text-center p-3">{ev.title}</h1>
            <p className="p-3 h-[210px] overflow-hidden text-justify mb-3">
              {ev.content}
            </p>
            <p className="px-3">{ev.author}</p>
            <p className="text-sm px-3"> {new Date(ev.date).toLocaleDateString()}</p>
            <img src={ev.cover} alt={ev.title}/>

            <Link to={`/post/${ev.id}`}>
              <button className="border bg-[#ff4c4c] text-[#ffead7]  hover:bg-[#ff3030] transition  p-2 w-full mt-5 cursor-pointer">
                View post
              </button>
            </Link>
          </div>
        
      
      ))}
    </div> 
  );
}

export default Home;