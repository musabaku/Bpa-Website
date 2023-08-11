import React, { Fragment, useEffect } from "react";
import "./Home.css";
import TCshort from "./TCshort";
// import TopProperty from './TopProperty';
import CountStats from "./CountStats";
import AboutShort from "./AboutShort";
// import RecentBlog from './RecentBlog.jsx';
import Search from "../../Search/Search";
import BlogCard from "./BlogCard.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getProperty } from "../../../redux/actions/propertyAction";
import PropertyCard from "./PropertyCard.jsx";
import Loader from "../../Loader/Loader";
import ImageSlider from "./ImageSlider";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

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
          <Search />
          <ImageSlider />
{/* 
          <div class="about-design">
          <div class="sider-line"></div>
          <div class="middler-line"></div>
          <div class="sider-line"></div>
        </div> */}
<div className="box-viewall">

          <h1 className="h1-popular">Popular Properties</h1>
          <div className="propButton">
          <Link to={"/properties"} >
            <button>
              View All  <RiArrowRightSLine />
            </button>
            </Link>
          </div>
</div>
          <div className="big-container">
            {properties &&
              properties.slice(0, 8).map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
              
          </div>

            <CountStats />
          <TCshort />

          <AboutShort />
      
          

          <div className="blog-container">
            <BlogCard />
          </div>
        
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
