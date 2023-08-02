import "./Blog.css";
import BlogPage from "./BlogPage";
import RecentProperty from "./RecentProperty";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlog } from "../../redux/actions/blogAction";
import { getProperty } from "../../redux/actions/propertyAction";
const Blog = () => {
  const dispatch = useDispatch();
  const { properties } = useSelector((state) => state.properties);

  useEffect(() => {
    dispatch(getProperty());
    dispatch(getBlog());
  }, [dispatch]);


  const { blogs } = useSelector((state) => state.blogs);
  console.log(blogs);

  return (
    <>
      <div className="blogmain-box">
        <div className="blogmain-container">
          <h1>Our Blog</h1>
          <p>
            Here are our blog posts about Everything related to Istanbul, mainly
            real estate. For example, you can find tips about buying property
            for sale in Istanbul or information and statistics about Istanbul
            property sales. Additionally, you can find blog posts about living
            in Istanbul, establishing a business, registering a company, and so
            on.
          </p>
          {blogs &&
            blogs.map((blog) => <BlogPage blog={blog} key={blog._id} />)}
        </div>
        <div className="recent-properties">
        <h2>Recent Properties</h2>

          {properties &&
            properties
              .slice(0, 5)
              .map((property) => (
                <RecentProperty property={property} key={property._id} />
              ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
