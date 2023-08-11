import React, { useEffect } from "react";
import "./BlogCard.css";
import { useDispatch, useSelector } from "react-redux";
import { getBlog } from "../../../redux/actions/blogAction";
import BlogPage from "../../Blog/BlogPage";
import { RiArrowRightSLine } from "react-icons/ri";

const BlogCard = () => {
  const dispatch = useDispatch();
console.log("here111")
  useEffect(() => {
    dispatch(getBlog());
  }, [dispatch]);

  const { blogs } = useSelector((state) => state.blogs);
  return (
    <>
      <div className="bloghome-box">
        <div className="bloghome-container">
          <h2 className="bloghome-box-h2">Latest Posts on Our Blog</h2>
          {blogs &&
            blogs.slice(0, 6).map((blog) => <BlogPage blog={blog} key={blog._id} />)}
        </div>
        <div className="blogButton">
            <button>
              View All <RiArrowRightSLine />
            </button>
          </div>
      </div>
    </>
  );
};

export default BlogCard;
