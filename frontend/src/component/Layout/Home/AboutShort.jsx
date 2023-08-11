import React, { Fragment } from 'react';
import './AboutShort.css';
import cusservice from '../../../images/aboutShort/cusservice.JPG';
import customer from '../../../images/aboutShort/customer.JPG';
import growth from '../../../images/aboutShort/growth.JPG';
import industry from '../../../images/aboutShort/inndustry.JPG';
const AboutShort = () => {
  return (
    <Fragment>
      <div className="about-container">
        <div className="about-heading">
          <h2> Why Choose Us? </h2>
        </div>
        <div className="about-text">
          <p>
          Big Property Agency is a trusted and experienced real estate company
            in Turkey, serving clients for over 12 years. With sales offices
            strategically located in Istanbul and a dedicated team fluent in
            multiple languages, we have successfully assisted 1900+ individuals
            in becoming homeowners. Our commitment to professionalism, customer
            satisfaction, and personalized service sets us apart. We prioritize
            building long-term relationships, offering support and guidance
            throughout the sales process.
          </p>
        </div>
        <div className="about-logo-box">
          <div className="box-container">
            <img src={industry} alt="Logo" className="logo" />
            <div className="content">
              <h3>Extensive Industry Experience</h3>
              <p className="text">
              With over 12 years in the Turkish real estate sector, we bring seasoned expertise to the table</p>
            </div>
          </div>
          <div className="box-container">
            <img src={customer} alt="Logo" className="logo" />
            <div className="content">
              <h3>Customer-Centric Approach</h3>

              <p className="text">
              Our clients are our priority. We've built enduring relationships based on trust and transparency.</p>
            </div>
          </div>
          <div className="box-container">
            <img src={growth} alt="Logo" className="logo" />
            <div className="content">
              <h3>Proven Track Record</h3>

              <p className="text">
              We've helped nearly 1900 individuals achieve their dream of homeownership.
              </p>
            </div>
          </div>
          <div className="box-container">
            <img src={cusservice} alt="Logo" className="logo" />
            <div className="content">
              <h3>Comprehensive Services</h3>

              <p className="text">
              Our friendly support team is always ready to assist you with any questions or concerns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutShort;