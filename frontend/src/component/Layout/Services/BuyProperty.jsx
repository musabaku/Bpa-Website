import React from 'react';
import "./articles.css"
import img1 from "../../../images/Services/BuyProperty/1.jpg"
import img2 from "../../../images/Services/BuyProperty/2.jpg"
import img3 from "../../../images/Services/BuyProperty/3.jpg"

const BuyProperty = () => {

  return (
    <div className='buyproperty-container'>
      <div className='serviceimg'>

      <img src={img1} className='img1' alt='img' />
      </div>
      <h1>Buying Property in Turkey: Legal Procedures and Tips for Foreign Buyers</h1>
    <h2>Introduction:</h2>
    <p>Investing in real estate in Turkey can be a lucrative opportunity for foreign buyers. Thanks to the countrys growing economy, favorable climate, and attractive property prices. However, buying property in Turkey as a foreign buyer involves navigating a complex legal landscape, which can be daunting without the right guidance and knowledge. In this article, we will provide valuable tips and guidance for foreign buyers interested in buying property in Turkey. From researching the market to finalizing the purchase. We cover all the necessary steps to ensure a smooth and successful property purchase process.</p>

    <h2>Research the Turkish Property Market:</h2>
    <img src={img2} className='img2' alt='img' />

    <p>Research the Property MarketTo make an informed decision, its important to research the Turkish property market thoroughly. Understand popular cities, regions, and neighborhoods, and consider factors such as property prices, rental yields, infrastructure development, and growth prospects.</p>

    <h2>Engage a Reliable Real Estate Agent:</h2>
    <p>Enlist the services of a reputable real estate agent with experience in working with foreign buyers. A knowledgeable agent can offer valuable insights, assist with property selection, negotiate on your behalf, and guide you through the legal procedures.</p>

    <h2>Verify Property Ownership and Title Deeds:</h2>
    <img src={img3} className='img2' alt='img' />

    <p>Verify Property Ownership and Title DeedsBefore proceeding with a purchase, verify the ownership and title deeds of the property. Request the seller to provide a Tapu (title deed) and verify its authenticity with the Land Registry Office. Ensure there are no liens or encumbrances on the property and check for any zoning or usage restrictions.</p>

    <h2>Obtain a Tax Identification Number (TIN):</h2>
    <p>To engage in financial transactions, including property purchase, obtain a Tax Identification Number (TIN) from the local tax office. This number is necessary for tax reporting and identification purposes.</p>

    <h2>Sign a Purchase Agreement:</h2>
    <p>Once youve selected a property, sign a purchase agreement with the seller. This agreement outlines the terms and conditions, including the purchase price, payment schedule, and any special clauses. Engage a qualified lawyer to review the contract and ensure all necessary details are included.</p>

    <h2>Finalize the Purchase:</h2>
    <p>After completing all legal procedures, its time to finalize the purchase. Transfer the purchase price to the sellers bank account and ensure the Tapu (title deed) is transferred to your name at the Land Registry Office. Your lawyer can guide you through this process and provide the necessary documentation.</p>

    <h2>Conclusion:</h2>
    <p>Buying property in Turkey as a foreign buyer can be a rewarding experience, but its important to navigate the legal procedures effectively. Conduct thorough research, engage a reliable real estate agent, verify ownership and title deeds, obtain a Tax Identification Number, sign a purchase agreement, apply for military clearance (if required), and finalize the purchase. By following these steps and seeking professional guidance, you can confidently invest in the Turkish property market and reap the benefits it offers. Stay updated with the latest regulations and consult legal professionals specializing in Turkish real estate to ensure a smooth and successful property purchase process.</p>

    </div>
  );
};

export default BuyProperty;


// import React, { useState, useEffect } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// import axios from "axios"
// const ContentInput = () => {
//   const [content, setContent] = useState('');

//   // Load content from local storage on component mount
//   useEffect(() => {
//     const savedContent = localStorage.getItem('content');
//     if (savedContent) {
//       setContent(savedContent);
//     }
//   }, []);

//   const handleChange = (value) => {
//     setContent(value);
//   };

//   const handleSubmit = async() => {

//   await axios.post()

//     console.log('Content submitted:', content);

//     // Save the content to local storage
//     localStorage.setItem('content', content);
//   };

//   return (
//     <div>
//       <h2>Content Input</h2>
//       <ReactQuill value={content} onChange={handleChange} />
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// };

// export default ContentInput;
