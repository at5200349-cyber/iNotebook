import React from "react";
import{Link} from "react-router-dom";

const Navbar = () => {
  return (
    
      <nav className=" bg-gray-600 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white">
            
            iNotebook
          </Link>

          <div className=" flex space-x-6">
            <Link to="/" className="text-white hover:text-blue-400 transition">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-blue-400 transition">
              About
            </Link>
          </div>
          <div className="space-x-3">
            <button className="px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-200 transition">
              Login{" "}
            </button>
            <button className="px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-200 transition">
              Sing up
            </button>
          </div>
        </div>
      </nav>
   
  );
};

export default Navbar;
