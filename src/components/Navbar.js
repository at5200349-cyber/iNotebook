import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = (props) => {
  const { mode, setMode } = props;
  const location = useLocation();
  return (
    <nav className=" bg-gray-600 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          iNotebook
        </Link>

        <div className=" flex space-x-6">
          <Link
            to="/"
            className={`${
              location.pathname === "/"
                ? "text-blue-500 font-bold"
                : "text-white hover:text-blue-400"
            } transition`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`${
              location.pathname === "/about"
                ? "text-blue-500 font-bold"
                : "text-white hover:text-blue-400"
            } transition`}
          >
            About
          </Link>
        </div>
        <div className="space-x-3">
          <button className="px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-200 transition dark:bg-pink-400 dark:text-white dark:hover:bg-pink-600   ">
            Login{" "}
          </button>
          <button className="px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-200 transition dark:bg-pink-400 dark:text-white dark:hover:bg-pink-600">
            Sing up
          </button>
          <button
            onClick={() => setMode(!mode)}
            className="px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700"
          >
            {mode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
