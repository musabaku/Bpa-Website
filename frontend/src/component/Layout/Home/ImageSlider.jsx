import React from 'react';
import Slider from 'react-slick';
import slid1 from "../../../images/Slider/slid1.JPG";
import slid2 from "../../../images/Slider/slid2.JPG";
import slid3 from "../../../images/Slider/slid3.JPG";
import './ImageSlider.css'; // Import your CSS file

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  const images = [
    slid1,
    slid2,
    slid3,
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
