import "./PropertyDetails.css";
import { useParams } from "react-router-dom";
import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPropertyDetails,
  updatePropertyDescription,
} from "../../redux/actions/propertyAction";

import Loader from "../../component/Loader/Loader";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import feature from "../../images/feature.JPG";
const PropertyDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [description, setDescription] = useState("");
  const { loading, propertyDetails } = useSelector(
    (state) => state.propertyDetails
  );

  useEffect(() => {
    dispatch(getPropertyDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (propertyDetails.description) {
      setDescription(propertyDetails.description);
    }
  }, [propertyDetails]);


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
                <span>
                  <FaMoneyCheckDollar /> ${propertyDetails.price}
                </span>
                <p>
                  <FaLocationDot /> {propertyDetails.location}
                </p>
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
            <div className="propertyMain-description">
              <div
                className="propertyMain-description-text"
                dangerouslySetInnerHTML={{
                  __html: propertyDetails.description,
                }}
              />
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default PropertyDetails;

