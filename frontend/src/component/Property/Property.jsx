import "./Property.css";
import PropertyCard from "../Layout/Home/PropertyCard";
import Search from "../Search/Search"
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProperty } from "../../redux/actions/propertyAction";
const Property = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProperty());
  }, [dispatch]);
  const { properties } = useSelector((state) => state.properties);

  return (
    <div>
        <Search />
      <div className="mainproperty-container">
        {properties &&
          properties.map((property) => (
            <PropertyCard property={property} key={property._id} />
          ))}
      </div>
    </div>
  );
};

export default Property;
