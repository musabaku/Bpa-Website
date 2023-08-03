import React, { Fragment } from 'react';
import './PropertyCard.css';
import { FaBed } from 'react-icons/fa';
import { FaBath } from 'react-icons/fa';
import { BiArea } from 'react-icons/bi';
import { FaLocationDot } from 'react-icons/fa6';
import { FaMoneyCheckDollar } from 'react-icons/fa6';

import {Link} from "react-router-dom"

const PropertyDetails = ({ property }) => {
  return (
    <Fragment>
            <Link to={`/property/${property._id}`}>
            
            <div className="popular-property" key={property.name}>

              <img src={property.image.url} alt={property.name} />

              <div className="property-details">
                <h3>{property.name}</h3>
                <span><FaMoneyCheckDollar/>  ${property.price}</span>
                <p><FaLocationDot/>  {property.location}, Istanbul</p>
                </div>

                <div className="property-features">
                  <div className="property-feature lne">
                    <div className="icon-text">
                      <FaBed className="icon" />
                      <span>{property.beds}</span>
                    </div>
                    <span className="feature-label">Beds</span>
                  </div>

                  <div className="property-feature lne">
                    <div className="icon-text">
                      <FaBath className="icon" />
                      <span>{property.baths}</span>
                    </div>
                    <span className="feature-label">Baths</span>
                  </div>

                  <div className="property-feature">
                    <div className="icon-text">
                      <BiArea className="icon" />
                      <span>{property.area} m²</span>
                    </div>
                    <span className="feature-label">Area</span>
                  </div>

                </div>
            </div>
            </Link>
    </Fragment>
  );
};

export default PropertyDetails;
