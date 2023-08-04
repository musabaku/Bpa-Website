
import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  updateProperty,
  getPropertyDetails,
} from "../actions/PropertyActions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MetaData from "../layout/MetaData";
import { FiImage, FiDollarSign, FiFileText, FiLayers, FiBook, FiPlusCircle, FiStar } from "react-icons/fi";
import SideBar from "./Sidebar";
import { UPDATE_Property_RESET } from "../constant/PropertyConstant";
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProperty = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { propertyDetails } = useSelector((state) => state.propertyDetails);

  const {
    loading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.Property);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [Stock, setStock] = useState(0);
  const [imageUrl, setImageUrl] = useState("");

//   const categories = [
//     "Footwear",
//     "Laptop",
//     "SmartPhones",
//     "Pants",
//     "Shirts",
//     "Camera",
//   ];
const productId = id;

  useEffect(() => {
    if (propertyDetails && propertyDetails._id !== propertiesId) {
        dispatch(getpropertiesDetails(propertiesId));
      } else {
        setName(propertyDetails.name);
        setDescription(propertyDetails.description);
        setPrice(propertyDetails.price);
        setCategory(propertyDetails.category);
        setStock(propertyDetails.Stock);
        setImageUrl(propertyDetails.imageUrl);
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
      toast.success("Property Updated Successfully");
      navigate("/admin/Propertys");
      dispatch({ type: UPDATE_Property_RESET });
    }
  }, [
    dispatch,
    error,
    navigate,
    isUpdated,
    PropertyId,
    Property,
    updateError,
  ]);

  const updatePropertySubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("description", description);
    myForm.set("category", category);
    myForm.set("Stock", Stock);
    myForm.set("imageUrl", imageUrl);
    dispatch(updateProperty(PropertyId, myForm));
  };

  return (
    <Fragment>
    
    </Fragment>
  );
};

export default UpdateProperty;