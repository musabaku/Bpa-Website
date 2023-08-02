import "./PropertyDetails.css";
import { useParams } from "react-router-dom";
import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPropertyDetails,
  updatePropertyDescription,
} from "../../redux/actions/propertyAction";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Loader from "../../component/Loader/Loader";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import feature from "../../images/feature.JPG"
const PropertyDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [description, setDescription] = useState("");
  const { loading, propertyDetails } = useSelector(
    (state) => state.propertyDetails
  );
  const [showEditor, setShowEditor] = useState(false); // New state variable to manage editor visibility

  useEffect(() => {
    dispatch(getPropertyDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (propertyDetails.description) {
      setDescription(propertyDetails.description);
    }
  }, [propertyDetails]);

  const handleSave = () => {
    dispatch(updatePropertyDescription(id, description));
    setShowEditor(false); // Hide the editor after saving
  };

  const handleEdit = () => {
    setShowEditor(true); // Show the editor and save button
  };

  return (
    <div className="propertyMain-details-container">
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
               <div className="propertyMain-image-features-container">
            <div className="propertyMain-image-container">
              <img src={propertyDetails.image.url} alt={propertyDetails.name} />
            </div>
            <div className="propertyMain-features">
              <h2>Property Features</h2>
              <img src={feature} alt="feature" className="featuree" />
              <div>
                <span><FaMoneyCheckDollar /> ${propertyDetails.price}</span>
                <p><FaLocationDot /> {propertyDetails.location}</p>
              </div>
              <div className="propertyMain-features-details">
                <div className="propertyMain-feature">
                  <FaBed />
                  <span>{propertyDetails.beds}</span>
                  <span>Beds</span>
                </div>
                <div className="propertyMain-feature">
                  <FaBath />
                  <span>{propertyDetails.baths}</span>
                  <span>Baths</span>
                </div>
                <div className="propertyMain-feature">
                  <BiArea />
                  <span>{propertyDetails.area} m²</span>
                  <span>Area</span>
                </div>
              </div>
            </div>
          </div>
          <div className="propertyMain-info-container">
            {/* <h1 className="propertyMain-name">{propertyDetails.name}</h1> */}
            {showEditor ? (
              <div className="propertyMain-description">
                <ReactQuill
                  theme="snow"
                  value={description}
                  onChange={(value) => setDescription(value)}
                  style={{ fontFamily: "sans-serif" }}
                />
                <button
                  className="propertyMain-save-button"
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="propertyMain-description">
                <div
                  className="propertyMain-description-text"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
                <button
                  className="propertyMain-edit-button"
                  onClick={handleEdit}
                >
                  Edit
                </button>
              </div>
            )}
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default PropertyDetails;
