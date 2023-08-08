import { useDispatch } from "react-redux";
import React, { useState } from "react";
import "./Search.css";
import { getProperty } from "../../redux/actions/propertyAction";

const Search = () => {
  const dispatch = useDispatch();

  const [keyword, setKeyword] = useState("");
  // const [location, setLocation] = useState("");
  const [price, setPrice] = useState([0, 500000]);
  const [selectedRange, setSelectedRange] = useState("");

  // const locations = [
  //   "Avcilar",
  //   "Beylikduzu",
  //   "Kadikoy",
  //   "Sisli",
  //   "Basaksehir",
  //   "Maslak",
  //   "Kucukcekmece",
  // ];

  const priceRanges = [
    { label: "0-100,000", value: [0, 100000] },
    { label: "100,000-200,000", value: [100000, 200000] },
    { label: "200,000-300,000", value: [200000, 300000] },
    { label: "300,000-400,000", value: [300000, 400000] },
    { label: "400,000-500,000", value: [400000, 500000] },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(getProperty(keyword, price));
  };

  const handlePriceDropdownChange = (selectedValue) => {
    const selectedPriceRange = priceRanges.find(
      (range) => range.label === selectedValue
    );
    setSelectedRange(selectedValue);
    setPrice(selectedPriceRange ? selectedPriceRange.value : [0, 500000]);
  };

  const handleReset = () => {
    setKeyword("");
    setSelectedRange("");
    setPrice([0, 500000]);
    dispatch(getProperty()); // Remove the params to reset the search criteria
  };

  return (
    <form onSubmit={handleSearch} className="search-form">
      <input
        type="text"
        placeholder="Search by name"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      {/* <div className="dropdown">
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">Select Location</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div> */}

      <span className="dropdown">
        {/* <h3>Price Range</h3> */}
        <select
          value={selectedRange}
          onChange={(e) => handlePriceDropdownChange(e.target.value)}
        >
          <option value="">Price Range</option>
          {priceRanges.map((range) => (
            <option key={range.label} value={range.label}>
              {range.label}
            </option>
          ))}
        </select>
      </span>

      <button type="submit" className="searchButton-prop">Search</button>

      <button type="button" className="resetButton-prop" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
};

export default Search;
