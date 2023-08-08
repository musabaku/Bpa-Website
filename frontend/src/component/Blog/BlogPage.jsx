import React, { Fragment } from "react";
import "./BlogPage.css";
import { Link } from "react-router-dom";

const BlogPage = ({ blog }) => {
  console.log("wwat")

  console.log(blog._id)
  console.log(blog)

  return (
    <>
      <Link to={`/blog/${blog._id}`}>
        
        <div className="blog-mainpage" key={blog.title}>
          <div>
            <img src={blog.image} alt={blog.title} />
            <div className="blog-cover">

            <h3>{blog.title}</h3>
            <button className="blog-button">Read More</button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogPage;
