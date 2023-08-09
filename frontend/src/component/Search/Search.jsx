import { useDispatch } from "react-redux";
import React, { useState } from "react";
import "./Search.css";
import { getProperty } from "../../redux/actions/propertyAction";

const Search = () => {
  const dispatch = useDispatch();

  const [keyword, setKeyword] = useState("");
  const [price, setPrice] = useState([0, 500000]);
  const [selectedRange, setSelectedRange] = useState("");

 
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
    dispatch(getProperty()); 
  };

  return (
    <form onSubmit={handleSearch} className="search-form">
      <input
        type="text"
        placeholder="Search by name"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

    

      <span className="dropdown">
   
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

