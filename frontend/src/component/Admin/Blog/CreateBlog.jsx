import React, { useState,useEffect } from "react";
// import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Sidebar from '../Sidebar';
import { useDispatch,useSelector } from "react-redux";
import { createBlog,getAdminBlog,clearErrors } from "../../../redux/actions/blogAction";
import "./CreateBlog.css"; // Import the CSS file for styling
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.createBlog);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.set("title", title);
    myForm.set("image", image);
    myForm.set("description", description);

    dispatch(createBlog(myForm));
    toast.success("Blog Created Successfully");
    navigate("/admin/dashboard");
    dispatch(getAdminBlog());
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }


  }, [dispatch, error]);
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="create-blog-container">
        <h2>Create a Blog</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={handleTitleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image Link:</label>
            <input
              type="text"
              id="image"
              value={image}
              onChange={handleImageChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <ReactQuill
              theme="snow"
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>
          <button type="submit" className="create-blog-button">
            Create Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
