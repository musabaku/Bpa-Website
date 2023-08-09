import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Sidebar from "../Sidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  updateBlog,
  getBlogDetails,
  clearErrors,
} from "../../../redux/actions/blogAction";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const UpdateBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { error, blogDetails } = useSelector((state) => state.blogDetails);

  const { error: updateError } = useSelector((state) => state.updateBlog);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (blogDetails && blogDetails._id !== id) {
      dispatch(getBlogDetails(id));
    } else {
      setTitle(blogDetails.title);
      setImage(blogDetails.image);
      setDescription(blogDetails.description);
    }

    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (updateError) {
      toast.error(updateError);
      dispatch(clearErrors());
    }
  }, [dispatch, navigate, blogDetails, error, updateError, id]);
  const updateHandler = () => {
    navigate("/admin/allblog");
    toast.success("Blog Updated Successfully");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title,
      image,
      description,
    };

    dispatch(updateBlog(id, formData));
    updateHandler();
  };

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="create-blog-container">
        <h2>Update Blog</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image Link:</label>
            <input
              type="text"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <ReactQuill
              theme="snow"
              value={description}
              onChange={(value) => setDescription(value)}
            />
          </div>
          <button type="submit" className="create-blog-button">
            Update Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBlog;
