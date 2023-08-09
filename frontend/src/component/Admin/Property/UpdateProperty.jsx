import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  updateProperty,
  getPropertyDetails,
 
} from "../../../redux/actions/propertyAction";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import SideBar from "../Sidebar";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProperty = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { error, propertyDetails } = useSelector(
    (state) => state.propertyDetails
  );

  const {  error: updateError } = useSelector(
    (state) => state.updateProperty
  );

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [beds, setBeds] = useState("");
  const [area, setArea] = useState("");
  const [baths, setBaths] = useState("");

  const propertiesId = id;
  const locationOptions = [
    "Bagcilar",
    "Bahcesehir",
    "Basaksehir",
    "Beylikduzu",
    "Kadikoy",
    "Kagithane",
    "Esenyurt",
    "Sisli",
    "Uskudar",
    "Zeytinburnu"
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
  
  useEffect(() => {
    if (propertyDetails && propertyDetails._id !== propertiesId) {
      dispatch(getPropertyDetails(propertiesId));
    } else {
      setName(propertyDetails.name);
      setDescription(propertyDetails.description);
      setImage(propertyDetails.image);
      setPrice(propertyDetails.price);
      setLocation(propertyDetails.location);
      setBeds(propertyDetails.beds);
      setArea(propertyDetails.area);
      setBaths(propertyDetails.baths);
    }

    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    

    // if (isDeleted) {
    //   toast.success("Product Deleted Successfully");
    //   console.log("gds")

    // }
    if (updateError) {
      toast.error(updateError);
      dispatch(clearErrors());
    }

    // if (isUpdated) {
    //   navigate("/admin/allproperty");
    //   toast.success("Property Updated Successfully")
    //   dispatch({ type: "updatePropertyReset" });

    // }
  }, [
    dispatch,
    navigate,

    propertiesId,
    propertyDetails,
    error,
    updateError,
  ]);
  const updateHandler = () => {
    navigate("/admin/allproperty");
    toast.success("Property Updated Successfully");
  };
  // const updateHandler =()=>{
  //   toast.success("Property Created Successfully");
  //   navigate("/admin/dashboard");
  // }

  const updatePropertySubmitHandler =async (e) => {
    e.preventDefault();

    const formData = {
      name,
      description,
      image,
      price,
      location,
      beds,
      area,
      baths,
    };

   await dispatch(updateProperty(propertiesId, formData));
    updateHandler();

  };

  return (
    <Fragment>
      <div className="dashboard">
        <SideBar />

        <div className="create-property-container">
          <h2>Update Property</h2>
          <form onSubmit={updatePropertySubmitHandler}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <ReactQuill
                theme="snow"
                value={description}
                onChange={setDescription}
              />
            </div>
            <div className="form-group">
              <label htmlFor="image">Image Link:</label>
              <input
                type="text"
                id="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
              />
            </div>
            {/* <div className="form-group">
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="location">Location:</label>
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="beds">Beds:</label>
              <input
                type="number"
                id="beds"
                value={beds}
                onChange={(e) => setBeds(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="area">Area:</label>
              <input
                type="number"
                id="area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="baths">Baths:</label>
              <input
                type="number"
                id="baths"
                value={baths}
                onChange={(e) => setBaths(e.target.value)}
                required
              />
            </div> */}
            <div className="form-group">
              <label htmlFor="price">Price:</label>
              <select
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
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
            <div className="form-group">
              <label htmlFor="location">Location:</label>
              <select
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
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
            <div className="form-group">
              <label htmlFor="beds">Beds:</label>
              <select
                id="beds"
                value={beds}
                onChange={(e) => setBeds(e.target.value)}
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
                onChange={(e) => setArea(e.target.value)}
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
                onChange={(e) => setBaths(e.target.value)}
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
            <button
              type="submit"
              className="create-property-button"
            >
              Update Property
            </button>
          </form>
        
        </div>
      </div>
    </Fragment>
  );
};

export default UpdateProperty;
