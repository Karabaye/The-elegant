import React from "react";

// images 

import hospitality from "../assets/images/16.jpg"
import catering from "../assets/images/10.jpg"
import events from "../assets/images/6.jpg"
import concierge from "../assets/images/11.jpg"
const services = [
  {
    title: "HOSPITALITY AGENCY",
    items: ["Protocol Team", "Ushers (Waiters)", "BARISTA & Bartender", "Private chef"],
    image: hospitality,
  },
  {
    title: "OUTSIDE CATERING",
    items: ["Coffee, Tea & Juices", "Mobile bar", "BARBECUE (BBQ)"],
    image: catering,
  },
  {
    title: "EVENTS PLANNING",
    items: ["Full Planning", "Partial Planning", "Venue Scouting"],
    image: events,
  },
  {
    title: "CONCIERGE SERVICES",
    items: ["Rentals", "Vendors"],
    image: concierge,
  },
];

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10 uppercase">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="relative bg-white shadow-lg rounded-lg p-6 border-l-4 border-red-500 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
              <img src={service.image} alt={service.title} className="w-24 h-24 rounded-full object-cover border-4 border-gray-200" />
              <div className="text-center md:text-left">
                <h3 className="text-lg font-bold uppercase tracking-wide bg-gradient-to-r from-black to-red-500 text-white px-3 py-1 rounded-md inline-block">
                  {service.title}
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm mt-2">
                  {service.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
