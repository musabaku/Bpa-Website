import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/core';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/scrollbar/scrollbar.min.css';

import slid1 from "../../../images/Slider/slid1.JPG";
import slid2 from "../../../images/Slider/slid2.JPG";
import slid3 from "../../../images/Slider/slid3.JPG";

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);

const ImageSlider = () => {
  const images = [slid1, slid2, slid3];

 

  const slideImageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  return (
    <div className="swiperStyle">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index + 1}`} style={slideImageStyle} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
