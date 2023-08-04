import React,{useEffect} from 'react'
import Sidebar from './Sidebar'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAdminProperty } from "../../redux/actions/propertyAction";
import "./Dashboard.css"
const Dashboard = () => {
  const dispatch = useDispatch();

  const { properties } = useSelector((state) => state.properties);



  useEffect(() => {
    dispatch(getAdminProperty());
  }, [dispatch]);


  return (
    <>
     <div className="dashboard">
      {/* <MetaData title="Dashboard - Admin Panel" /> */}
      <Sidebar />

      <div className="dashboardContainer">
        <h1>Dashboard</h1>

        <div className="dashboardSummary">
   
          <div className="dashboardSummaryBox2">
            <Link to="/admin/allproperty">
              <p>Properties</p>
              <p>{properties && properties.length}</p>
            </Link>
           
          </div>
        </div>

       
      </div>
    </div>
    </>
  )
}

export default Dashboard