import React from "react";
import "./About.css";
// import Aboutpic from "../../images/About/About.jpg";
import customer from "../../images/About/customer.JPG";
import experience from "../../images/About/experience.JPG";
import { RiPhoneLine, RiAdvertisementLine, RiDatabaseLine, RiShoppingCartLine, RiToolsLine } from 'react-icons/ri';
const About = () => {


const departmentsData = [
 
  
  {
    icon: RiDatabaseLine,
    title: 'Data Department',
    description: 'Constantly seeks unique real estate opportunities and discounts, offering diverse options to clients.',
  },
  {
    icon: RiShoppingCartLine,
    title: 'Sales Department',
    description: 'Guides clients on field trips to various projects, recommending the best options based on their needs.',
  },
  {
    icon: RiPhoneLine,
    title: 'Phone Consultation',
    description: 'Provides expert advice and answers customer inquiries related to all aspects of real estate.',
  },
  {
    icon: RiToolsLine,
    title: 'After-sale Department',
    description: 'Assists clients with post-purchase departments such as title deed extraction and property furnishing.',
  },
  {
    icon: RiAdvertisementLine,
    title: 'Marketing Department',
    description: 'Supplies and processes essential real estate information, including news, photos, and videos, for clients.',
  },
];
  return (
    <>
      <div className="aboutmain-container">
        {/* <div className="about-intro">
          <img src={Aboutpic} alt="About" className="about-image" />
        </div> */}

        <div className="abouth2">
          <h2>Big Property Agency</h2>
        </div>
        <div class="about-design">
          <div class="sider-line"></div>
          <div class="middler-line"></div>
          <div class="sider-line"></div>
        </div>
        <div className="departments">
  <h2>Our Departments</h2>
  <div className="departments-container">
    {departmentsData.map((department, index) => (
      <div className="department-card" key={index}>
        <div className="department-icon">{department.icon()}</div>
        <h3>{department.title}</h3>
        <p>{department.description}</p>
      </div>
    ))}
  </div>
  <div className="bouncing-dots">
    {departmentsData.map((_, index) => (
      <span className="dot" style={{ '--dot-index': index }} key={index}></span>
    ))}
  </div>
</div>
        <div className="aboutmain-text">
          <div className="exp-div customerexp">
            <img
              src={customer}
              alt="customer"
              className="
               aboutimg"
            />
            <div className="exp-text">
              <h3 className="aboutmain-h3">Our Experience Sets Us Apart</h3>
              <div class="about-design">
                <div class="sideb-line"></div>
                <div class="middleb-line"></div>
                <div class="sideb-line"></div>
              </div>
              <p className="aboutmain-p">
                With over 12 years of dedicated department in the Turkish real
                estate sector, Big Property Agency stands out as a seasoned
                player in the market. Our extensive experience has allowed us to
                navigate the complexities of the industry with finesse, making
                us a trusted name among both local and international clients.
                Having successfully helped close to 1900 people realize their
                dream of homeownership, our track record speaks for itself.
              </p>
            </div>
          </div>

          <div className="customer-div customerexp">
            <img
              src={experience}
              alt="experience"
              className="exp-image aboutimg"
            />
            <div className="exp-text">
              <h3 className="aboutmain-h3">A Customer-Centric Approach</h3>
              <div class="about-design">
                <div class="sideb-line"></div>
                <div class="middleb-line"></div>
                <div class="sideb-line"></div>
              </div>
              <p className="aboutmain-p">
                At Big Property Agency, our clients are at the heart of
                everything we do. We take immense pride in the long-term
                relationships we have built over the years, and our commitment
                to their satisfaction is unwavering. From the moment clients
                step into our sales offices to the final stages of their
                property acquisition, our professional and multilingual staff
                ensures a seamless and stress-free experience. With a focus on
                transparency, trust, and delivering the best prices on the
                market, we continue to be the go-to real estate agency for those
                seeking quality department and expert guidance in Turkey.
              </p>
            </div>
          </div>
        </div>


      </div>
    </>
  );
};

export default About;
