import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthPovider";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `relative text-black font-medium transition duration-300 ${
              isActive
                ? "after:content-[''] after:block after:h-[2px] after:w-full after:bg-orange-500 after:absolute after:bottom-[-2px] after:left-0"
                : ""
            } hover:after:content-[''] hover:after:block hover:after:h-[2px] hover:after:w-full hover:after:bg-orange-500 hover:after:absolute hover:after:bottom-[-2px] hover:after:left-0`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/sortedFoods"
          className={({ isActive }) =>
            `relative text-black font-medium transition duration-300 ${
              isActive
                ? "after:content-[''] after:block after:h-[2px] after:w-full after:bg-orange-500 after:absolute after:bottom-[-2px] after:left-0"
                : ""
            } hover:after:content-[''] hover:after:block hover:after:h-[2px] hover:after:w-full hover:after:bg-orange-500 hover:after:absolute hover:after:bottom-[-2px] hover:after:left-0`
          }
        >
          Available Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/aboutUs"
          className={({ isActive }) =>
            `relative text-black font-medium transition duration-300 ${
              isActive
                ? "after:content-[''] after:block after:h-[2px] after:w-full after:bg-orange-500 after:absolute after:bottom-[-2px] after:left-0"
                : ""
            } hover:after:content-[''] hover:after:block hover:after:h-[2px] hover:after:w-full hover:after:bg-orange-500 hover:after:absolute hover:after:bottom-[-2px] hover:after:left-0`
          }
        >
          About Us
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/myFoodRequest"
              className={({ isActive }) =>
                `relative text-black font-medium transition duration-300 ${
                  isActive
                    ? "after:content-[''] after:block after:h-[2px] after:w-full after:bg-orange-500 after:absolute after:bottom-[-2px] after:left-0"
                    : ""
                } hover:after:content-[''] hover:after:block hover:after:h-[2px] hover:after:w-full hover:after:bg-orange-500 hover:after:absolute hover:after:bottom-[-2px] hover:after:left-0`
              }
            >
              My Food Request
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/manageFoods"
              className={({ isActive }) =>
                `relative text-black font-medium transition duration-300 ${
                  isActive
                    ? "after:content-[''] after:block after:h-[2px] after:w-full after:bg-orange-500 after:absolute after:bottom-[-2px] after:left-0"
                    : ""
                } hover:after:content-[''] hover:after:block hover:after:h-[2px] hover:after:w-full hover:after:bg-orange-500 hover:after:absolute hover:after:bottom-[-2px] hover:after:left-0`
              }
            >
              Manage Foods
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addfood"
              className={({ isActive }) =>
                `relative text-black font-medium transition duration-300 ${
                  isActive
                    ? "after:content-[''] after:block after:h-[2px] after:w-full after:bg-orange-500 after:absolute after:bottom-[-2px] after:left-0"
                    : ""
                } hover:after:content-[''] hover:after:block hover:after:h-[2px] hover:after:w-full hover:after:bg-orange-500 hover:after:absolute hover:after:bottom-[-2px] hover:after:left-0`
              }
            >
              Add Food
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="bg-primary-default sticky top-0 duration-100 ">
      <div className="navbar lg:w-11/12 mx-auto w-full z-50 p-0 justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center">
          {/* Mobile Dropdown */}
          <div className="dropdown lg:hidden">
            <button tabIndex={0} className="btn btn-ghost ">
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
              className="menu menu-sm z-10 dropdown-content bg-white text-gray-700 font-semibold rounded-box mt-3 w-36 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          {/* Logo */}
          <Link to={"/"}>
            <div className="flex items-center gap-1">
              <img
                className="w-14 hidden sm:block"
                src={`https://i.ibb.co/dpSMLyd/Brown-Simple-Circle-Restaurant-Logo-photoaidcom-cropped.png`}
                alt="Logo"
              />
              <h2 className="text-lg sm:text-2xl font-bold">Share-Bites</h2>
            </div>
          </Link>
        </div>

        {/* Center Navigation */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal gap-4">{links}</ul>
        </div>

        {/* Right Section */}
        <div className="flex items-center mr-2 justify-between gap-4">
          {user && user.email ? (
            <>
              <div
                className="tooltip tooltip-left"
                data-tip={`${user?.displayName}`}
              >
                <img
                  src={`${user?.photoURL}`}
                  alt="User Icon"
                  className="w-5 sm:w-10 rounded-full"
                />
              </div>
              <button
                onClick={logOut}
                className="flex justify-center items-center btn btn-sm text-primary-sub bg-transparent rounded-xl border-2 border-primary-sub hover:bg-primary-sub hover:text-white transition duration-300 ease-in-out bg-white shadow-md"
              >
                Log out
              </button>
            </>
          ) : (
            <div className="flex items-start gap-2">
              <Link
                to="/login"
                className="flex justify-center items-center btn btn-sm text-primary-main bg-transparent rounded-xl border-2 border-primary-main hover:bg-primary-main hover:text-white transition duration-300 ease-in-out shadow-md"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="flex justify-center items-center btn btn-sm text-primary-main bg-transparent rounded-xl border-2 border-primary-main hover:bg-primary-main hover:text-white transition duration-300 ease-in-out shadow-md"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
