import React from "react";
import { useParams,Link } from "react-router-dom";
import "./Postpage.css";

const Postpage = ({ handleDelete, posts,EditPost}) => {
  const { id } = useParams();
  const postId = Number(id); // Convert id to a number
  const filteredpost = posts.find((post) => post.id === postId);

  return (
    <div className="postpage">
      {filteredpost ? (
        <div>
          <h1>{filteredpost.title}</h1>
          <p><strong>Date:</strong> {filteredpost.datetime}</p>
          <p>{filteredpost.body}</p>
          <Link to='/newpost'><button onClick={()=>EditPost(filteredpost.id)}>EditPost</button></Link>
          <button onClick={() => handleDelete(filteredpost.id)}>Delete</button>
        </div>
      ) : (
        <h1>Post not found</h1>
      )}
    </div>
  );
};

export default Postpage;
