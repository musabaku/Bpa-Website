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
import { useNavigate } from 'react-router-dom';


import AdminLogin from "./component/Layout/Header/AdminLogin";
import React , {useEffect} from "react";

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const currentPath = window.location.pathname;

    if (currentPath === '/about') {
      navigate('/about');
    } else if (currentPath === '/services') {
      navigate('/services');
    } else if (currentPath === '/contact-us') {
      navigate('/contact-us');
    } else if (currentPath === '/') {
      navigate('/');
    } else if (currentPath === '/home') {
      navigate('/');
    } else if (currentPath === '/properties') {
      navigate('/properties');
    } else if (currentPath === '/blog') {
      navigate('/blog');
    } else if (currentPath === '/tc') {
      navigate('/tc');
    } else if (currentPath === '/property/:id') {
      navigate('/property/:id');
    } else if (currentPath === '/blog/:id') {
      navigate('/blog/:id');
    }
  }, [navigate]);
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
