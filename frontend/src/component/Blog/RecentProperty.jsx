import React, { Fragment } from "react";
import "./RecentProperty.css";

import { FaLocationDot } from "react-icons/fa6";
import { FaMoneyCheckDollar } from "react-icons/fa6";

import { Link } from "react-router-dom";

const PropertyDetails = ({ property }) => {
  return (
    <Fragment>
      <Link to={`/property/${property._id}`}>
        <div className="recent1-properties">
          <div className="propertySide">
            <img src={property.image.url} alt="property" className="recentimg" />
            <div className="propertySide-details">
              <h3>{property.name}</h3>
              <span>
                <FaMoneyCheckDollar /> ${property.price}
              </span>
              <p>
                <FaLocationDot /> {property.location}, Istanbul
              </p>
            </div>
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

export default PropertyDetails;
