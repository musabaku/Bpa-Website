import React, { Fragment, useEffect } from "react";
import "./Home.css";
import TCshort from "./TCshort";
// import TopProperty from './TopProperty';
import CountStats from "./CountStats";
import AboutShort from "./AboutShort";
// import RecentBlog from './RecentBlog.jsx';
import { RiArrowRightSLine } from "react-icons/ri";

import BlogCard from "./BlogCard.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getProperty } from "../../../redux/actions/propertyAction";
import PropertyCard from "./PropertyCard.jsx";
import Loader from "../../Loader/Loader";
import turkish from "../../../images/turkciti.JPG";



const Home = () => {
  const { properties, loading } = useSelector((state) => state.properties);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProperty());
  }, [dispatch]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div>
            <div className="main-box">
              <div className="header-text1">
                <h1>Welcome to Big Property Agency</h1>
                <p>Discover a World of Amazing Products</p>
                <a href="/products" className="explore-button">
                  Explore Now
                </a>
              </div>

              <div className="header-image1">
                <img src={turkish} alt="Logo" />
              </div>
            </div>
          </div>

          <h1 className="h1-popular">Popular Properties</h1>
          <div className="big-container">
            {properties &&
              properties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
          </div>

          <TCshort />

          <AboutShort />

          <CountStats />
            <div className="blogHeading">
              <h3>Latest Posts on Our Blog</h3>
            </div>
          <div className="blog-container">
            <BlogCard />
          </div>
            <div className="blogButton">
              <button>
                View All <RiArrowRightSLine />
              </button>
            </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
