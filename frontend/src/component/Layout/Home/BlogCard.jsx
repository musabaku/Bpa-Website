import React from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import './BlogCard.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BlogCard = ({ data }) => {

  const settings = {
    dots: true,
    // infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true, 
    autoplaySpeed: 10000, 
  };
  

  return (
    <div className="blogCard">
      <div className="blogHeading">
        <h3>Latest Posts on Our Blog</h3>
      </div>
     <Slider {...settings}>
              <div className="blogContent" key={data.title}>
                <img src={data.image} alt={data.title} className="blogImage" />
                <h4>{data.title}</h4>
              </div>
    </Slider>
      <div className="blogButton">
        <button>
          View All <RiArrowRightSLine />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
