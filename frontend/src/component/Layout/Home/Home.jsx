import React, { Fragment, useEffect } from "react";
import "./Home.css";
import TCshort from "./TCshort";
// import TopProperty from './TopProperty';
import CountStats from "./CountStats";
import AboutShort from "./AboutShort";
// import RecentBlog from './RecentBlog.jsx';
import BlogCard from "./BlogCard.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getProperty } from "../../../redux/actions/propertyAction";
import PropertyCard from "./PropertyCard.jsx";
import Loader from "../../Loader/Loader";
import turkish from "../../../images/turkciti.JPG";

const datas = [
  {
    image: "https://i.ibb.co/wd1rBdL/1.jpg",
    title: "Top Cities for Profitable Real Estate Investment in Turkey",
  },
  {
    image: "https://i.ibb.co/3CCGXJj/2.jpg",
    title: "Exploring Turkey’s Booming Real Estate Market",
  },
  {
    image: "https://i.ibb.co/wQLbL92/3.jpg",
    title:
      "Impact of Changing Mortgage Interest Rates on Turkey’s Property Market",
  },
  {
    image: "https://i.ibb.co/wd1rBdL/1.jpg",
    title: "Notaries Take the Lead: A New Era in Real Estate Transactions",
  },

  // Add more data objects as needed
];

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
          <div className="blog-container">

          {datas &&
            datas.map((data) => <BlogCard data={data} key={data._id} />)}
          </div>

        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
