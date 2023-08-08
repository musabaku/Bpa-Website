import "./BlogDetails.css";
import { useParams } from "react-router-dom";
import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBlogDetails,
} from "../../redux/actions/blogAction";

import Loader from "../../component/Loader/Loader";
// import { FaBed } from "react-icons/fa";
// import { FaBath } from "react-icons/fa";
// import { BiArea } from "react-icons/bi";
// import { FaLocationDot } from "react-icons/fa6";
// import { FaMoneyCheckDollar } from "react-icons/fa6";
// import feature from "../../images/feature.JPG"
const BlogDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [description, setDescription] = useState("");
  const { loading, blogDetails } = useSelector(
    (state) => state.blogDetails
  );


  console.log("at")

  useEffect(() => {
    dispatch(getBlogDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (blogDetails.description) {
      setDescription(blogDetails.description);
    }
  }, [blogDetails]);


  return (
    <div className="blogMain-details-container">
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
               <div className="blogMain-image-features-container">
            <div className="blogMain-image-container">
              <img src={blogDetails.image} alt={blogDetails.name} />
            </div>
       
          </div>
        
          <div className="blogMain-info-container">
            <div className="blogMain-description">
              <div
                className="blogMain-description-text"
                dangerouslySetInnerHTML={{
                  __html: blogDetails.description,
                }}
              />
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default BlogDetails;

/* <h1 className="blogMain-name">{blogDetails.name}</h1> */

/* <div className="blogMain-info-container">
{showEditor ? (
  <div className="blogMain-description">
    <ReactQuill
      theme="snow"
      value={description}
      onChange={(value) => setDescription(value)}
      style={{ fontFamily: "sans-serif" }}
    />
    <button
      className="blogMain-save-button"
      onClick={handleSave}
    >
      Save
    </button>
  </div>
) : (
  <div className="blogMain-description">
    <div
      className="blogMain-description-text"
      dangerouslySetInnerHTML={{ __html: description }}
    />
    <button
      className="blogMain-edit-button"
      onClick={handleEdit}
    >
      Edit
    </button>
  </div>
)}
</div> */

     /* <div className="blogMain-features">
              <h2>blog Features</h2>
              <img src={feature} alt="feature" className="featuree" />
              <div>
                <span><FaMoneyCheckDollar /> ${blogDetails.price}</span>
                <p><FaLocationDot /> {blogDetails.location}</p>
              </div>
              <div className="blogMain-features-details">
                <div className="blogMain-feature">
                  <FaBed />
                  <span>{blogDetails.beds}</span>
                  <span>Beds</span>
                </div>
                <div className="blogMain-feature">
                  <FaBath />
                  <span>{blogDetails.baths}</span>
                  <span>Baths</span>
                </div>
                <div className="blogMain-feature">
                  <BiArea />
                  <span>{blogDetails.area} m²</span>
                  <span>Area</span>
                </div>
              </div>
            </div> */