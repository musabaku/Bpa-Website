import "./style.css";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Header from "./component/Layout/Header/Header";
import Home from "./component/Layout/Home/Home";
import Footer from "./component/Layout/Footer/Footer"
import TC from "./component/Layout/TC/TC"
import Contact from "./component/Layout/Contact/Contact"
import Blog from "./component/Blog/Blog";


import BuyProperty from "./component/Layout/Services/BuyProperty"
import PropertyManagement from "./component/Layout/Services/PropertyManagement"
import Resale from "./component/Layout/Services/Resale"
import PrimeProperties from "./component/Layout/Services/PrimeProperties"



import Services from "./component/Layout/Services/Services"
import About from "./component/About/About"
import Property from "./component/Property/Property"
import PropertyDetails from "./component/Property/PropertyDetails"





export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/tc" element={<TC />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />



        <Route path="/services/buyProperty" element={<BuyProperty />} />
        <Route path="/services/propertyManagement" element={<PropertyManagement />} />
        <Route path="/services/resale" element={<Resale />} />
        <Route path="/services/primeProperties" element={<PrimeProperties />} />



        <Route path="/properties" element={<Property />} />
        <Route path="/property/:id" element={<PropertyDetails />} />


        </Routes>
      <Footer />
    </Router>
  );
}