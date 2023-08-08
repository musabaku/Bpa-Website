import "./Property.css";
import PropertyCard from "../Layout/Home/PropertyCard";
import Search from "../Search/Search"
import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProperty } from "../../redux/actions/propertyAction";
import Pagination from "react-js-pagination";
import { useParams } from "react-router-dom";

const Property = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedlocation, setSelectedlocation] = useState("");
  const { keyword } = useParams();

  const locations = [
    "Bağcilar",
    "Bahçeşehir",
    "Başakşehir",
    "Beylikdüzü",
    "Kadiköy",
    "Kağithane",
    "Esenyurt",
    "Şişli",
    "Üsküdar",
    "Zeytinburnu"
  ];
  ;
  
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getProperty(keyword, currentPage, selectedlocation));
  // }, [dispatch,keyword, currentPage, selectedlocation]);
  useEffect(() => {
    dispatch(getProperty(keyword,currentPage, [0, 500000],selectedlocation));
  }, [dispatch,keyword,currentPage,selectedlocation]);


  const { properties,
    PropertyCount,
    resultPerPage,
    filteredPropertyCount } = useSelector((state) => state.properties);

    const setCurrentPageNo = (pageNumber) => {
      setCurrentPage(pageNumber);
    };


  return (
    <div>
        <Search />
     

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
  );
};

export default Property;
