import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-900  opacity-50 p-4 flex">
      <div className=" container text-white text-2xl font-bold">
        <p className="">MI LOGO </p>
      </div>
      <div className="container mx-5 flex justify-end items-center">
        <a
          href="https://wa.me/3413217314"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mr-4"
        >
          <FaWhatsapp size={24} />
        </a>
        <a
          href="https://www.instagram.com/tu_usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          <FaInstagram size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
