import React, { useState, useEffect, useRef } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

// Use public folder paths instead of imports
const logo = "/assets/logo.jpg";
const images = [
  "/assets/1.jpg",
  "/assets/2.jpg",
  "/assets/18.jpg",
  "/assets/14.jpg",
];

const App = () => { 
  const [indexSelect, setIndexSelect] = useState(0);
  const autoPlayRef = useRef(null);

  useEffect(() => {
    autoPlayRef.current = setTimeout(() => {
      handleNext();
    }, 7000);
    return () => clearTimeout(autoPlayRef.current);
  }, [indexSelect]);

  const handleNext = () => {
    setIndexSelect((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setIndexSelect((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden font-poppins">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full flex justify-between px-4 py-4 bg-opacity-80 backdrop-blur-md text-white z-50">
        <a href="#"><img src={logo} alt="Logo" className="h-10" /></a>
      </header>

      {/* Carousel */}
      <div className="carousel h-full w-full overflow-hidden relative">
        {/* Background Image */}
        <div className="absolute w-full h-full bg-cover bg-center transition-all duration-700 ease-in-out" 
          style={{ backgroundImage: `url(${images[indexSelect]})` }}>
        </div>

        {/* Content */}
        <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 w-full max-w-4xl text-left text-white p-8 bg-black bg-opacity-50 rounded-lg shadow-lg">
          <div className="text-lg font-bold tracking-widest opacity-80">The</div>
          <h1 className="text-6xl font-bold mt-2">Elegants</h1>
          <h2 className="text-6xl font-extrabold text-red-600">Service</h2>
          <p className="text-lg font-light mt-3 leading-relaxed">
            Hospitality is simply an opportunity to show love and care. It's all about making people feel welcome and valued, whether they're guests in your home, customers in a business, or anyone in need of a little kindness. 💖
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <button className="border border-gray-300 px-5 py-3 hover:bg-white hover:text-black transition">SEE MORE</button>
            <button className="border border-gray-300 px-5 py-3 hover:bg-white hover:text-black transition">Contact US</button>
          </div>
        </div>

        {/* Thumbnail Slider */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4">
          {images.map((img, idx) => (
            <div key={idx} className={`relative w-32 h-48 ${idx === indexSelect ? 'border-2 border-white' : ''}`}>
              <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover rounded-lg" />
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-white bg-opacity-60 text-white text-center">
                <div className="font-bold"> {idx + 1}</div>
                <div className="font-light"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-10 text-white">
        <button className="w-12 h-12 rounded-full bg-gray-700 bg-opacity-50 backdrop-blur-lg flex items-center justify-center hover:bg-gray-600 transition" onClick={handlePrev}>
          <MdNavigateBefore size={40} />
        </button>
        <button className="w-12 h-12 rounded-full bg-gray-700 bg-opacity-50 backdrop-blur-lg flex items-center justify-center hover:bg-gray-600 transition" onClick={handleNext}>
          <MdNavigateNext size={40} />
        </button>
      </div>
    </div>
  );
};

export default App;
