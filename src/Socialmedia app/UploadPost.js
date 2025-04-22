import React from "react";
import "./UploadPost.css";  // Import the CSS file
import { Link } from "react-router-dom";

const UploadPost = ({ post }) => {
  return (
    <div className="post-container">
      <Link to={`/newpost/${post.id}`} style={{ textDecoration: "none" }}>
        <h1 className="post-title">{post.title}</h1>
        <p className="post-date">{post.datetime}</p>
      </Link>

      <p className="post-body">{post.body}</p>
    </div>
  );
};

export default UploadPost;
