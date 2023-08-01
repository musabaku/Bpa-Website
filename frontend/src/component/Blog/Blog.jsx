import "./Blog.css";
import BlogPage from "./BlogPage";
// import PropertyCard from "../Layout/Home/PropertyCard";
import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlog } from "../../redux/actions/blogAction";
const Blog = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(getBlog())
    },[dispatch])
    const {blogs} = useSelector((state)=>state.blogs)
  console.log(blogs)
  return (
    <>
    <h1>Blog</h1>
    <div className='blogmain-container'>
        {blogs &&
          blogs.map((blog) => (
            <BlogPage blog={blog} key={blog._id} />
          ))}
      </div>

    </>
  )
}

export default Blog