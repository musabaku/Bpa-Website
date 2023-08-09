import React, { useState,useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Sidebar from "../Sidebar";
import { useDispatch ,useSelector} from "react-redux";
import { createProperty,getAdminProperty,clearErrors } from "../../../redux/actions/propertyAction";
import "./CreateProperty.css"; // Import the CSS file for styling
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';

const CreateProperty = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.createProperty);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [beds, setBeds] = useState("");
  const [area, setArea] = useState("");
  const [baths, setBaths] = useState("");

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }


  }, [dispatch, error]);
  const locationOptions = [
    "Bagcilar",
    "Bahcesehir",
    "Kadikoy",
    "Kagithane",
    "Sisli",
    "Uskudar",
  ];
  const priceRanges = [
    { label: "0", value: "0" },
    { label: "50,000", value: "50000" },
    { label: "100,000", value: "100000" },
    { label: "150,000", value: "150000" },
    { label: "200,000", value: "200000" },
    { label: "250,000", value: "250000" },
    { label: "300,000", value: "300000" },
    { label: "350,000", value: "350000" },
    { label: "400,000", value: "400000" },
    { label: "450,000", value: "450000" },
    { label: "500,000", value: "500000" },
  ];
  const bedOptions = Array.from({ length: 10 }, (_, index) => index + 1);

  const bathOptions = Array.from({ length: 10 }, (_, index) => index + 1);

  const areaOptions = [100, 150, 200, 250, 300, 350, 400];
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
    toast.success("Property Created Successfully");
    navigate("/admin/dashboard");
    dispatch(createProperty(propertyData));
    dispatch(getAdminProperty());
    
  };
// const handleClick =()=>{
 
// }
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
  <select
    id="price"
    value={price}
    onChange={handlePriceChange}
    required
  >
    <option value="" disabled>
      Select price
    </option>
    {priceRanges.map((range, index) => (
      <option key={index} value={range.value}>
        {range.label}
      </option>
    ))}
  </select>
</div>

          {/* <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={handlePriceChange}
              required
            />
          </div> */}
          {/* <div className="form-group">
            <label htmlFor="location">Location:  "Bagcilar",
  "Bahcesehir",
  "Basaksehir",
  "Beylikduzu",
  "Kadikoy",
  "Kagithane",
  "Esenyurt",
  "Sisli",
  "Uskudar",
  "Zeytinburnu"</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={handleLocationChange}
              required
            />
          </div> */}
          <div className="form-group">
  <label htmlFor="location">Location:</label>
  <select
    id="location"
    value={location}
    onChange={handleLocationChange}
    required
  >
    <option value="" disabled>
      Select a location
    </option>
    {locationOptions.map((loc, index) => (
      <option key={index} value={loc}>
        {loc}
      </option>
    ))}
  </select>
</div>
          {/* <div className="form-group">
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
          </div> */}
            <div className="form-group">
            <label htmlFor="beds">Beds:</label>
            <select
              id="beds"
              value={beds}
              onChange={handleBedsChange}
              required
            >
              <option value="" disabled>
                Select beds
              </option>
              {bedOptions.map((bed, index) => (
                <option key={index} value={bed}>
                  {bed}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="area">Area:</label>
            <select
              id="area"
              value={area}
              onChange={handleAreaChange}
              required
            >
              <option value="" disabled>
                Select area
              </option>
              {areaOptions.map((areaVal, index) => (
                <option key={index} value={areaVal}>
                  {areaVal}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="baths">Baths:</label>
            <select
              id="baths"
              value={baths}
              onChange={handleBathsChange}
              required
            >
              <option value="" disabled>
                Select baths
              </option>
              {bathOptions.map((bath, index) => (
                <option key={index} value={bath}>
                  {bath}
                </option>
              ))}
            </select>
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
