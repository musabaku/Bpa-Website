import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
// import Aboutpic from "../../../images/Services/Service.JPG";

import {
  RiHome2Fill,
  RiBuilding2Fill,
  RiMoneyEuroCircleFill,
  RiHandHeartFill,
  RiBookOpenFill, 
  RiCheckboxCircleFill
} from 'react-icons/ri';

const servicesData = [
  {
    icon: <RiHome2Fill />,
    title: 'Property Listings',
    description:
      'Explore our wide range of property listings in prime locations.',
  },
  {
    icon: <RiBuilding2Fill />,
    title: 'Commercial Properties',
    description: 'Find the perfect commercial property to grow your business.',
  },
  {
    icon: <RiMoneyEuroCircleFill />,
    title: 'Property Valuation',
    description: 'Get accurate property valuation and pricing guidance.',
  },
  {
    icon: <RiHandHeartFill />,
    title: 'Customer Support',
    description:
      'We provide dedicated customer support to assist you at every step.',
  },
];

const Services = () => {
  return (
    <div>
      {/* <span className="about-intro"> */}
          {/* <img src={Aboutpic} alt="About" className="about-image" /> */}
        {/* </span> */}
      <div className="services">
        <h2>Our Services</h2>
        <div className="services-container">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <div className="bouncing-dots">
        {servicesData.map((_, index) => (
          <span className="dot" style={{ '--dot-index': index }} key={index}></span>
        ))}
      </div>
      </div>
      <div className="guide-services">
        <h2>
          <RiBookOpenFill style={{ marginRight: '10px',color:'blue' }} /> Comprehensive Guide to Our Services
        </h2>
      </div>
      <div className="guide-container">
            <Link className="buy-property-h1" to="/services/buyProperty">
              <h3><RiCheckboxCircleFill className='iconsvvg' style={{ marginRight: '10px' , color : 'green' }}/>Buying Property in Turkey: Legal Procedures</h3>
            </Link>
            <Link className="buy-property-h1" to="/services/propertyManagement">
              <h3><RiCheckboxCircleFill  className='iconsvvg' style={{ marginRight: '10px' , color : 'green' }}/>Streamlined Property Management in Turkey: An Overview</h3>
            </Link>
            <Link className="buy-property-h1" to="/services/resale">
              <h3><RiCheckboxCircleFill className='iconsvvg'  style={{ marginRight: '10px' , color : 'green' }}/>Premium Resale Properties in Turkey: Your Ideal Investment</h3>
            </Link>
            <Link className="buy-property-h1" to="/services/primeProperties">
              <h3><RiCheckboxCircleFill  className='iconsvvg' style={{ marginRight: '10px' , color : 'green' }}/>Discover Prime Properties in Turkey: Best Prices Guaranteed</h3>
            </Link>
       
      </div>
    </div>
  );
};

export default Services;
