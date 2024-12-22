import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="flex items-center pb-4 justify-center pt-2 sm:pt-4 bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white  rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center  text-gray-800 mb-4">
            Register
          </h2>
          <form onSubmit={handleRegister}>
            {/* Name */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5200]"
                placeholder="Enter your name"
                required
              />
            </div>
            {/* Email */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5200]"
                placeholder="Enter your email"
                required
              />
            </div>
            {/* Photo URL */}
            <div className="mb-4">
              <label
                htmlFor="photoURL"
                className="block text-sm font-medium text-gray-600"
              >
                Photo URL
              </label>
              <input
                type="text"
                id="photoURL"
                name="photoURL"
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5200]"
                placeholder="Enter photo URL"
                required
              />
            </div>
            {/* Password */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5200]"
                placeholder="Enter your password"
                required
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-4 py-2 mt-4 text-white bg-gradient-to-r from-[#ef5919] to-[#c86638] rounded-lg hover:from-[#eb956d] hover:to-[#FF5200] transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-lg focus:outline-none"
            >
              Submit
            </button>
          </form>
          {/* Google Login Button */}
          <button className="w-full px-4 py-2 mt-4 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-200 focus:outline-none">
            <div
              //   onClick={handelGoogle}
              className="flex items-center gap-2 justify-center"
            >
              <img
                className="w-6"
                src="https://i.ibb.co/mSSztJP/google-logo-9808.png"
                alt=""
              />
              <p className="">Google Login</p>
            </div>
          </button>
          {/* Link to Login Page */}
          <p className="mt-4 text-sm text-center  text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-[#FF5200] hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
