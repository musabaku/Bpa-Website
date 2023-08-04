import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Sidebar from "../Sidebar";
import { useDispatch } from "react-redux";
import { createProperty } from "../../../redux/actions/propertyAction";
import "./CreateProperty.css"; // Import the CSS file for styling

const CreateProperty = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [beds, setBeds] = useState("");
  const [area, setArea] = useState("");
  const [baths, setBaths] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleBedsChange = (e) => {
    setBeds(e.target.value);
  };

  const handleAreaChange = (e) => {
    setArea(e.target.value);
  };

  const handleBathsChange = (e) => {
    setBaths(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const propertyData = {
      name,
      description,
      image: { url: image },
      price,
      location,
      beds,
      area,
      baths,
    };

    dispatch(createProperty(propertyData));
  };

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="create-property-container">
        <h2>Create a Property</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <ReactQuill
              theme="snow"
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image Link:</label>
            <input
              type="text"
              id="image"
              value={image}
              onChange={handleImageChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={handlePriceChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={handleLocationChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="beds">Beds:</label>
            <input
              type="number"
              id="beds"
              value={beds}
              onChange={handleBedsChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="area">Area:</label>
            <input
              type="number"
              id="area"
              value={area}
              onChange={handleAreaChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="baths">Baths:</label>
            <input
              type="number"
              id="baths"
              value={baths}
              onChange={handleBathsChange}
              required
            />
          </div>
          <button type="submit" className="create-property-button">
            Create Property
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProperty;
