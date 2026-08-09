import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">

      {/* Hero */}
      <div className="max-w-5xl mx-auto px-6 py-24 text-center">

        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
          Your notes,{" "}
          <span className="text-blue-600">
            your way.
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          iNotebook helps you create, organize and manage
          your notes in one simple and secure place.
        </p>

        <div className="mt-8">

          <button
            onClick={() => navigate("/signup")}
            className="px-6 py-3 bg-blue-600 text-white
            rounded-lg font-medium
            hover:bg-blue-700 transition"
          >
            Get Started
          </button>

          <button
            onClick={() => navigate("/login")}
            className="ml-4 px-6 py-3
            border border-gray-300 dark:border-gray-700
            text-gray-700 dark:text-gray-200
            rounded-lg font-medium
            hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Login
          </button>

        </div>

      </div>


      {/* Features */}
      <div className="max-w-5xl mx-auto px-6 pb-20">

        <div className="grid md:grid-cols-3 gap-6">

          <div className="p-6 border rounded-xl
            border-gray-200 dark:border-gray-800">
            
            <h2 className="text-xl font-semibold
              text-gray-900 dark:text-white">
              Simple
            </h2>

            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Create and manage your notes easily.
            </p>

          </div>


          <div className="p-6 border rounded-xl
            border-gray-200 dark:border-gray-800">

            <h2 className="text-xl font-semibold
              text-gray-900 dark:text-white">
              Secure
            </h2>

            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Your account and notes are protected.
            </p>

          </div>


          <div className="p-6 border rounded-xl
            border-gray-200 dark:border-gray-800">

            <h2 className="text-xl font-semibold
              text-gray-900 dark:text-white">
              Organized
            </h2>

            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Keep all your ideas organized in one place.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Home;