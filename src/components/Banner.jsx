import React from "react";
import TravelImg from "../assets/images/logo2.jpg";

const Banner = () => {
  return (
    <div className="min-h-[550px] bg-gray-100 flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* Image Section */}
          <div data-aos="flip-up" className="flex justify-center">
            <img
              src={TravelImg}
              alt="The Elegant Server & Protocol"
              className="max-w-full h-auto mx-auto drop-shadow-lg object-contain"
            />
          </div>

          {/* Text Content Section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0 lg:px-16">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold text-gray-700 leading-8">
              The Elegant Server & Protocol
            </h1>
            <p data-aos="fade-up" className="text-sm text-gray-500 leading-8">
              At The Elegant Server & Protocol, we believe that every event is a masterpiece, and perfection is in the details. Specializing in weddings and premium hospitality services, we are committed to transforming your vision into an unforgettable reality.
              <br /><br />
              From the first welcome to the final farewell, we create seamless, stress-free experiences that leave a lasting impression. Our passion for hospitality drives us to exceed expectations, bringing refinement, charm, and class to every occasion.
              <br /><br />
              At The Elegant Server & Protocol, we don’t just host events—we craft extraordinary celebrations that you and your guests will cherish forever. 💫✨
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
