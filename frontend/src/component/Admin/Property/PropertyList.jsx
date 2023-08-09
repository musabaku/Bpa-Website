import React,{Fragment,useEffect} from 'react'
import Sidebar from '../Sidebar'
import { useSelector, useDispatch } from "react-redux";
import { getAdminProperty,clearErrors, deleteProperty } from "../../../redux/actions/propertyAction";
import { FaEye ,FaTrash} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./PropertyList.css"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropertyDescription from "./PropertyDescription"; 
import { useNavigate } from "react-router-dom";

const PropertyList = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {properties, error } = useSelector((state) => state.properties);
  const { error: deleteError } = useSelector((state) => state.deleteProperty);

 
  const deletePropertyHandler = (id) => {
    toast.success("Property Deleted Successfully");
    navigate("/admin/dashboard");
    dispatch(deleteProperty(id));
  };
  
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      toast.error(deleteError);
      dispatch(clearErrors());
    }

    dispatch(getAdminProperty());
  }, [dispatch, error, navigate,deleteError]

  );
  return (

    <Fragment>
      {/* <MetaData title={`ALL properties - Admin`} /> */}

      <div className="dashboard">
        <Sidebar />
        <div className="propertyListContainer">
          <h1 id="propertyListHeading">All Properties</h1>

          <div className="propertyListTable">
            <table>
              <thead>
                <tr>
                  <th>Property ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Location</th>
                  <th>Beds</th>
                  <th>Area</th>
                  <th>Baths</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {properties.map((item) => (
                  <tr key={item._id}>
                    <td>{item._id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.location}</td>
                    <td>{item.beds}</td>
                    <td>{item.area}</td>
                    <td>{item.baths}</td>
                    <td>
                    <PropertyDescription description={item.description} />
                      </td>
                    <td>
                      <Link to={`/admin/property/${item._id}`}>
                        <FaEye />
                      </Link>
                      <button onClick={() => deletePropertyHandler(item._id)}>
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default PropertyList