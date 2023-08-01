import React, { Fragment } from "react";
import "./BlogPage.css";
import { Link } from "react-router-dom";

const BlogPage = ({ blog }) => {
  return (
    <>
      <Link to={`/blog/${blog._id}`}>
        <div className="blog-mainpage" key={blog.title}>
          <div>
            <img src={blog.image} alt={blog.title} />
            <h3>{blog.title}</h3>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogPage;
