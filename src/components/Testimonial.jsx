import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Client from '../assets/images/bos.jpg'
import Client1 from '../assets/images/c2.jpg'
import Client2 from '../assets/images/c1.jpg'

const testimonials = [
  {
    id: 1,
    name: "Muhoza Eugene",
    role: "CEO, Elegant Events",
    image: Client,
    text: "The Elegant Server & Protocol made our event truly special. Their attention to detail and professionalism were outstanding!"
  },
  {
    id: 2,
    name: "Twahirwa Wilson",
    role: "Client",
    image: Client1,
    text: "Absolutely amazing service! They handled everything seamlessly, allowing me to enjoy my wedding day stress-free."
  },
  {
    id: 3,
    name: "Kanamugire moses",
    role: "Client",
    image: Client2,
    text: "Exceptional service! The team was professional, courteous, and ensured a memorable experience for all our guests."
  }
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="max-w-2xl mx-auto bg-dark-blue shadow-lg rounded-lg p-6 relative overflow-hidden">
      <div className="flex flex-col items-center text-center space-y-4">
        <img src={testimonials[index].image} alt={testimonials[index].name} className="w-20 h-20 rounded-full shadow-md" />
        <h3 className="text-lg font-semibold">{testimonials[index].name}</h3>
        <p className="text-gray-300 text-sm">{testimonials[index].role}</p>
        <p className="text-gray-400 italic">"{testimonials[index].text}"</p>
      </div>
      {/* Navigation Buttons */}
      <button onClick={handlePrev} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-400 p-2 rounded-full shadow-md hover:bg-gray-300">
        <FaChevronLeft />
      </button>
      <button onClick={handleNext} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-400 p-2 rounded-full shadow-md hover:bg-gray-300">
        <FaChevronRight />
      </button>
    </div>
  );
}; 

export default TestimonialSlider;
