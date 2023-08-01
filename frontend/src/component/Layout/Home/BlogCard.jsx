import React from "react";
import "./BlogCard.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BlogCard = () => {
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <div className="blogCard">
        <Slider {...settings}>
          {datas.map((data, index) => (
            <div className="blogContent" key={index}>
              <img src={data.image} alt={data.title} className="blogImage" />
              <h4>{data.title}</h4>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default BlogCard;
