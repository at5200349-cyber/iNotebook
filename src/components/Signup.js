import React, { useState } from "react";
import { Link ,} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, cpassword } = credentials;
try {
    if (password !== cpassword) {
      alert("Passwords do not match");
      return;
    }

    const response = await fetch(
      "http://localhost:5000/api/auth/Createuser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }
    );

    const json = await response.json();

    if (json.success) {
      alert("Account created successfully");
      localStorage.setItem("token", json.token);
      navigate("/dashboard");
    }
  } catch (error) {
    console.error("Error during signup:", error);
    alert("An error occurred during signup. Please try again.");  }
      
    
  };

  return (
    <>
     
  <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
    <div className="w-full max-w-md">

      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          Create your account
        </h1>

        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Start managing your notes with iNotebook
        </p>
      </div>

      {/* Signup Card */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">

        <form onSubmit={handleSubmit}>

          {/* Name */}
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={credentials.name}
              onChange={onChange}
              className="w-full border border-gray-300 dark:border-gray-600
              bg-white dark:bg-gray-700 text-gray-900 dark:text-white
              rounded-xl p-3 outline-none
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              transition"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={onChange}
              className="w-full border border-gray-300 dark:border-gray-600
              bg-white dark:bg-gray-700 text-gray-900 dark:text-white
              rounded-xl p-3 outline-none
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              transition"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={onChange}
              className="w-full border border-gray-300 dark:border-gray-600
              bg-white dark:bg-gray-700 text-gray-900 dark:text-white
              rounded-xl p-3 outline-none
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              transition"
              placeholder="Create a password"
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
              Confirm Password
            </label>

            <input
              type="password"
              name="cpassword"
              value={credentials.cpassword}
              onChange={onChange}
              className="w-full border border-gray-300 dark:border-gray-600
              bg-white dark:bg-gray-700 text-gray-900 dark:text-white
              rounded-xl p-3 outline-none
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              transition"
              placeholder="Confirm your password"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700
            text-white font-semibold py-3 rounded-xl
            transition duration-200 shadow-md
            hover:shadow-lg"
          >
            Create Account
          </button>

        </form>

        {/* Login link */}
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  </div>

    </>
  );
};

export default Signup;