import React from "react";
import "./Header.css";
import logo from "../../../images/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const {isAuthenticated} = useSelector((state) => state.user);

  return (
    <div>
      <div className="top-header">
        <div className="box1">
          <p><MdEmail /> info@bigpropertyagency.com</p>
          <p><FaWhatsapp />  +90 532 255 23 65</p>
          <Link to="/login">
          <button className="admin-log">Admin-Login</button>

          </Link>
          {isAuthenticated && (
        <Link to="/admin/dashboard">
          <button className="admin-db">Admin-Dashboard</button>
        </Link>
      )}
        </div>

        <div className="box2">
          <span>
            <FaFacebookF />
          </span>
          <span>
            <FaInstagram />
          </span>
          <span>
            <FaYoutube />
          </span>
          <span>
            <FaLinkedin />
          </span>
        </div>
      </div>

      <div className="container-header">
        <div className="header-image">
          <img src={logo} alt="Logo" />
        </div>
        <div className="header-text">
          <ul>
            <li className="header-item"><Link to="/">Home</Link></li>
            <li className="header-item"><Link to="/about">About</Link></li>
            <li className="header-item"><Link to="/services">Services</Link></li>
            <li className="header-item"><Link to="/tc">Turkish Citizenship</Link></li>
            <li className="header-item"><Link to="/properties">Properties</Link></li>
            <li className="header-item"><Link to="/blog">Blog</Link></li>
            <li className="header-item"><Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;