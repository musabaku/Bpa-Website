import "./style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from "./component/Layout/Header/Header";
import Home from "./component/Layout/Home/Home";
import Footer from "./component/Layout/Footer/Footer";
import TC from "./component/Layout/TC/TC";
import Contact from "./component/Layout/Contact/Contact";
import Blog from "./component/Blog/Blog";
import BuyProperty from "./component/Layout/Services/BuyProperty";
import PropertyManagement from "./component/Layout/Services/PropertyManagement";
import Resale from "./component/Layout/Services/Resale";
import PrimeProperties from "./component/Layout/Services/PrimeProperties";
import NotFound from "./component/Layout/NotFound/NotFound";

import Services from "./component/Layout/Services/Services";
import About from "./component/About/About";
import Property from "./component/Property/Property";
import PropertyDetails from "./component/Property/PropertyDetails";
import BlogDetails from "./component/Blog/BlogDetails";

import Dashboard from "./component/Admin/Dashboard";

import CreateProperty from "./component/Admin/Property/CreateProperty";
import PropertyList from "./component/Admin/Property/PropertyList";
import UpdateProperty from "./component/Admin/Property/UpdateProperty";

import CreateBlog from "./component/Admin/Blog/CreateBlog";
import BlogList from "./component/Admin/Blog/BlogList";
import UpdateBlog from "./component/Admin/Blog/UpdateBlog";


import AdminLogin from "./component/Layout/Header/AdminLogin";
import React , {useEffect} from "react";

export default function App() {
  useEffect(() => {
    const currentPath = window.location.pathname;

    if (currentPath === '/about') {
      window.location.pathname = '/about'; // Redirect internally
    } else if (currentPath === '/services') {
      window.location.pathname = '/services'; // Redirect internally
    }
     else if (currentPath === '/contact-us') {
      window.location.pathname = '/contact-us'; // Redirect internally
    }
     else if (currentPath === '/') {
      window.location.pathname = '/'; // Redirect internally
    }
     else if (currentPath === '/home') {
      window.location.pathname = '/'; // Redirect internally
    
    } else if (currentPath === '/properties') {
      window.location.pathname = '/properties';
  }
     else if (currentPath === '/blog') {
      window.location.pathname = '/blog';
  }
     else if (currentPath === '/tc') {
      window.location.pathname = '/tc';
  }
     else if (currentPath === '/properties') {
      window.location.pathname = '/properties';
  }
     else if (currentPath === '/property/:id') {
      window.location.pathname = '/property/:id';
  }
     else if (currentPath === '/blog/:id') {
      window.location.pathname = '/blog/:id';
  }
  
}, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/tc" element={<TC />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="/services/buyProperty" element={<BuyProperty />} />
        <Route
          path="/services/propertyManagement"
          element={<PropertyManagement />}
        />
        <Route path="/services/resale" element={<Resale />} />
        <Route path="/services/primeProperties" element={<PrimeProperties />} />

        <Route path="/properties" element={<Property />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/blog/:id" element={<BlogDetails />} />

        <Route path="/admin/dashboard" element={<Dashboard />} />

        <Route path="/admin/allproperty" element={<PropertyList />} />
        <Route path="/admin/createproperty" element={<CreateProperty />} />
        <Route path="/admin/property/:id" element={<UpdateProperty />} />

        <Route path="/admin/createblog" element={<CreateBlog />} />
        <Route path="/admin/allblog" element={<BlogList />} />
        <Route path="/admin/blog/:id" element={<UpdateBlog />} />

        <Route path="/login" element={<AdminLogin />} />
        <Route path='*' element={<NotFound />} />

      </Routes>
      <ToastContainer /> 
      <Footer />
    </Router>
  );
}
