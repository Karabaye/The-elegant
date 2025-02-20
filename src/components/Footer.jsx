import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-white py-6 text-center"
    >
      <div className="container mx-auto flex flex-col items-center">
        {/* Logo or Brand Name */}
        <h2 className="text-2xl font-bold">The Elegant Server & Protocol</h2>
        <p className="text-sm text-gray-400 mt-2">
          Exquisite Hospitality, Flawless Celebrations.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="#"
            className="text-gray-400 hover:text-white transition"
          >
            <FaFacebook size={24} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="#"
            className="text-gray-400 hover:text-white transition"
          >
            <FaTwitter size={24} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="#"
            className="text-gray-400 hover:text-white transition"
          >
            <FaInstagram size={24} />
          </motion.a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 mt-4">
          &copy; {new Date().getFullYear()} The Elegant Server & Protocol. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
