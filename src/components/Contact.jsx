import React from "react";
import ContactImage from "../assets/images/logo2.jpg";

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
      {/* Title */}
      <h2 className="text-4xl font-bold text-gray-800 mb-8 uppercase">Contact Us</h2>

      {/* Flexbox for Image */}
      <div className="flex justify-center w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <img 
          src={ContactImage} 
          alt="Contact Us" 
          className="w-full h-auto max-h-[500px] object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default ContactPage;
