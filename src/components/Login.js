import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = credentials;

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const json = await response.json();
      console.log(json);
      if (json.token) {
        alert("Login successful");
        localStorage.setItem("token", json.token);
        navigate("/dashboard");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login. Please try again.");
    }
  };
return (
  <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gray-50 dark:bg-gray-950 px-4">

    <div className="w-full max-w-md">

      {/* Card */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-8">

        {/* Heading */}
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white text-xl font-bold">
            iN
          </div>

          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome back
          </h1>

          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Sign in to continue to your iNotebook account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Email address
            </label>

            <input
              id="email"
              type="email"
              name="email"
              value={credentials.email}
              onChange={onChange}
              placeholder="you@example.com"
              required
              className="w-full rounded-xl border border-gray-300 dark:border-gray-700
              bg-white dark:bg-gray-800
              px-4 py-3 text-gray-900 dark:text-white
              placeholder-gray-400
              outline-none
              transition
              focus:border-blue-500
              focus:ring-4 focus:ring-blue-500/10"
            />
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between mb-2">

              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Password
              </label>

              <button
                type="button"
                className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400"
              >
                Forgot password?
              </button>

            </div>

            <input
              id="password"
              type="password"
              name="password"
              value={credentials.password}
              onChange={onChange}
              placeholder="Enter your password"
              required
              className="w-full rounded-xl border border-gray-300 dark:border-gray-700
              bg-white dark:bg-gray-800
              px-4 py-3 text-gray-900 dark:text-white
              placeholder-gray-400
              outline-none
              transition
              focus:border-blue-500
              focus:ring-4 focus:ring-blue-500/10"
            />
          </div>

          {/* Remember me */}
          <div className="flex items-center gap-2">

            <input
              type="checkbox"
              id="remember"
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />

            <label
              htmlFor="remember"
              className="text-sm text-gray-600 dark:text-gray-400"
            >
              Remember me
            </label>

          </div>

          {/* Login button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 px-4 py-3
            font-semibold text-white
            shadow-sm
            transition
            hover:bg-blue-700
            active:scale-[0.98]
            focus:outline-none
            focus:ring-4 focus:ring-blue-500/30"
          >
            Login
          </button>

        </form>

        {/* Signup */}
        <div className="mt-7 text-center text-sm text-gray-500 dark:text-gray-400">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/signup")}
            className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400"
          >
            Create an account
          </button>
        </div>

      </div>

      {/* Bottom text */}
      <p className="mt-6 text-center text-xs text-gray-400">
        Your notes. Your ideas. Your space.
      </p>

    </div>
  </div>
);
};

export default Login;
