import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white hover:text-gray-200">
          <div className="text-white text-2xl font-bold">MiAplicación</div>
        </Link>
        <ul className="flex space-x-6">
          <li className="text-white hover:text-gray-200 rounded transition-transform transition-colors duration-100 ease-in-out hover:bg-blue-600 hover:scale-105 hover:shadow-lg">
            <Link to="/quehacemos">Que Hacemos?</Link>
          </li>
          <li className="text-white hover:text-gray-200 rounded transition-transform transition-colors duration-100 ease-in-out hover:bg-blue-600 hover:scale-105 hover:shadow-lg">
            <Link to="/servicios">Servicios</Link>
          </li>
          <li className="text-white hover:text-gray-200 rounded transition-transform transition-colors duration-100 ease-in-out hover:bg-blue-600 hover:scale-105 hover:shadow-lg">
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
