import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/availablefoods">Available Foods</NavLink>
      </li>

      <li>
        <NavLink to="/myFoodRequest">My Food Request </NavLink>
      </li>

      <li>
        <NavLink to="/addfood">Add Food</NavLink>
      </li>
    </>
  );
  return (
    <div>
      {" "}
      <div className="navbar bg-[#f0f7fad7] w-full z-50 dark:bg-slate-900 dark:text-white p-0 justify-between items-center dark:border-b dark:pb-2">
        {/* Left Section */}
        <div className="flex items-center">
          {/* Mobile Dropdown */}
          <div className="dropdown lg:hidden">
            <button tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm z-10 dropdown-content bg-[#272626e1] text-white dark:bg-[#272626e1] dark:text-white font-semibold rounded-box mt-3 w-36 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          {/* Logo */}
          <div className="flex items-center gap-1">
            <img
              className="w-16 hidden sm:block "
              src={`https://i.ibb.co/dtDLyHN/movie-logo-removebg-preview.png`}
              alt="Logo"
            />
            <h2 className="text-lg sm:text-2xl font-bold">Movie-world</h2>
          </div>
        </div>

        {/* Center Navigation */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal gap-4">{links}</ul>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-between gap-4 ">
          {/* {user && user?.email ? ( */}
          <>
            <div
              className=" tooltip tooltip-left"
              // data-tip={`${user?.displayName}`}
            >
              <img
                // src={`${user?.photoURL}`}
                alt="User Icon"
                className="w-5 sm:w-10 rounded-full"
              />
            </div>
            <button
              // onClick={logOut}
              className="flex justify-center items-center  px-2 w-18 h-10 sm:w-32 sm:h-12 text-blue-600 bg-transparent rounded-xl border-2 border-sky-400 hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out"
            >
              Log out
            </button>
          </>
          {/* ) : ( */}
          <div className="flex items-start gap-2">
            <Link
              to="/login"
              className="flex justify-center items-center  btn  text-blue-600 bg-transparent rounded-xl border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="flex justify-center items-center  btn text-blue-600 bg-transparent rounded-xl border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out"
            >
              Register
            </Link>
          </div>
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
