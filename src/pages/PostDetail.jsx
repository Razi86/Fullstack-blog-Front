import { useState } from "react";
import { useParams, Link } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  const [postDetail, setPostDetail] = useState(null);

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
      <p className="mb-2">
        <span className="font-semibold">Description: </span>
        {postDetail.description}
      </p>
      <p className="mb-2">
        <span className="font-semibold text-[#5a5a5a]">Date: </span>
        {postDetail.date}
      </p>
      <p className="mb-2">
        <span className="font-semibold text-[#5a5a5a]">Location: </span>
        {postDetail.location}
      </p>
      <Link to="/" className="mt-4 inline-block text-[#ff2424] underline">
        Back to Home
      </Link>
    </div>
  );
};

export default PostDetail;
