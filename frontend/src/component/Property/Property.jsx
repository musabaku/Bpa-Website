import "./Property.css";
import PropertyCard from "../Layout/Home/PropertyCard";
import Search from "../Search/Search";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProperty } from "../../redux/actions/propertyAction";
import Pagination from "react-js-pagination";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
const Property = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedlocation, setSelectedlocation] = useState("");
  const { keyword ,price} = useParams();

  const resetSelectedLocation = () => {
    setSelectedlocation("");
  };
  console.log("here222");

  const locations = [
    "Bagcilar",
    "Bahcesehir",
    "Kadikoy",
    "Kagithane",
    "Sisli",
    "Uskudar",
  ];

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getProperty());
  // }, [dispatch]);
  // useEffect(() => {
  //   dispatch(getProperty());
  // }, [dispatch]);
  useEffect(() => {
    dispatch(getProperty(keyword, price,currentPage,selectedlocation));
  }, [dispatch,keyword,price,currentPage,selectedlocation]);

  const {
    properties,
    loading,
    PropertyCount,
    resultPerPage,
    filteredPropertyCount,
  } = useSelector((state) => state.properties);

  const setCurrentPageNo = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div>
            {/* <Search /> */}
            <Search resetSelectedLocation={resetSelectedLocation} />

            <div className="locationBox">
            {locations.map((location) => (
              <span
                className={`location-link ${
                  location === selectedlocation ? "active" : ""
                }`}
                key={location}
                onClick={() => setSelectedlocation(location)}
              >
                {location}
              </span>
            ))}
          </div>

            <div className="mainproperty-container">
              {properties &&
                properties.map((property) => (
                  <PropertyCard property={property} key={property._id} />
                ))}
            </div>
            <div className="paginationBox">
              {resultPerPage < filteredPropertyCount && (
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={resultPerPage}
                  totalItemsCount={PropertyCount}
                  onChange={setCurrentPageNo}
                  nextPageText="Next"
                  prevPageText="Prev"
                  firstPageText="1st"
                  lastPageText="Last"
                  itemClass="page-item"
                  linkClass="page-link"
                  activeClass="pageItemActive"
                  activeLinkClass="pageLinkActive"
                />
              )}
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Property;

{
  /* <Fragment>
{loading ? (
 <Loader />
) : 
(<Fragment>


</Fragment>)}
</Fragment> */
}
