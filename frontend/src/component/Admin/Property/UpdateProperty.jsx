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
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProperty = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { error, propertyDetails } = useSelector((state) => state.propertyDetails);

  const {
    isUpdated,error: updateError
  } = useSelector((state) => state.properties);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [beds, setBeds] = useState("");
  const [area, setArea] = useState("");
  const [baths, setBaths] = useState("");

  const propertiesId = id;

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

    if (updateError) {
      toast.error(updateError);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      navigate("/admin/properties");
    }
  }, [dispatch, navigate, isUpdated, propertiesId, propertyDetails,error,updateError]);

  const updatePropertySubmitHandler = (e) => {
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

    dispatch(updateProperty(propertiesId, formData));
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
            <div className="form-group">
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
            </div>
            <button type="submit" className="create-property-button">
              Update Property
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default UpdateProperty;
