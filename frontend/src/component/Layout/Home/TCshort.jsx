import React from 'react';
import turkish from '../../../images/turkciti.JPG';
import { Link } from "react-router-dom";

import './TCshort.css';
const TCshort = () => {
  return (
    <div>
      <div className="container">
        <div className="text-image">
          <div className="image">
            <img src={turkish} alt="img" />
          </div>
          <h2>Obtain Turkish citizenship by investing in Turkish property</h2>
        </div>
        <div className="ptc">
          <p className="p-tc">
            Investing in Turkish property with a minimum price of 400,000 USD
            can lead to obtaining Turkish citizenship through a government
            program. The program requires a thorough application process and
            successful applicants can enjoy the benefits of Turkish citizenship,
            including visa-free travel to many countries and access to a growing
            economy.
          </p>
          <Link to={"/tc"} >
          <button className="btn-ptc">Read More</button>

            </Link>

          <div class="about-design">
                <div class="sideb-line"></div>
                <div class="middleb-line"></div>
                <div class="sideb-line"></div>
              </div>
        </div>
      </div>
    </div>
  );
};

export default TCshort;
