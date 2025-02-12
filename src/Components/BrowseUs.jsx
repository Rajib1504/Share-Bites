import React from "react";
import { IoArrowForwardSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const BrowseUs = () => {
  return (
    <div>
      <h1 className="md:text-3xl text-2xl lg:text-4xl font-semibold text-center my-8 text-primary-main">
        Browse Our Menu
      </h1>
      <div className=" w-full mx-auto md:w-full lg:w-5/6 flex flex-wrap justify-around p-4 items-center gap-6">
        {/* Breakfast */}
        <div className="w-64 rounded-lg flex flex-col items-center justify-center border-2 p-6">
          <div className="rounded-full w-12 mb-4">
            {/* img */}
            <div className="rounded-full bg-gray-200 p-2 flex items-center justify-center">
              <img
                src="https://i.ibb.co/TLxdfLr/tea-1.png"
                className="opacity-70 w-8"
                alt="Breakfast"
              />
            </div>
          </div>
          {/* text */}
          <div>
            <h4 className="font-semibold text-xl mb-2 text-center">
              Breakfast
            </h4>
            <p className="text-xs text-center">
              In the new era of technology we look in the future with certainty
              and pride for our life.
            </p>
            <div className="text-[#FF5200] hover:text-[#e94a00] flex gap-1 justify-center items-center font-semibold mt-4 hover:underline ">
              <Link to={"/sortedFoods"}>Explore menu</Link>
              <IoArrowForwardSharp className="text-xl mt-1" />
            </div>
          </div>
        </div>

        {/* Main Dishes */}
        <div className="w-64 rounded-lg flex flex-col items-center justify-center border-2 p-6">
          <div className="rounded-full w-12 mb-4">
            {/* img */}
            <div className="rounded-full bg-gray-200 p-2 flex items-center justify-center">
              <img
                src="https://i.ibb.co/T0C0dxL/Vector-1.png"
                className="opacity-70 w-8"
                alt="Main Dishes"
              />
            </div>
          </div>
          {/* text */}
          <div>
            <h4 className="font-semibold text-xl mb-2 text-center">
              Main Dishes
            </h4>
            <p className="text-xs text-center">
              In the new era of technology we look in the future with certainty
              and pride for our life.
            </p>
            <div className="text-[#FF5200] hover:text-[#e94a00] flex gap-1 justify-center items-center font-semibold mt-4 hover:underline">
              <Link to={"/sortedFoods"}>Explore menu</Link>
              <IoArrowForwardSharp className="text-xl mt-1" />
            </div>
          </div>
        </div>

        {/* Drinks */}
        <div className="w-64 rounded-lg flex flex-col items-center justify-center border-2 p-6">
          <div className="rounded-full w-10 mb-4">
            {/* img */}
            <div className="rounded-full bg-gray-200 p-2 flex items-center justify-center">
              <img
                src="https://i.ibb.co/2gGW4LT/Vector-2.png"
                className="opacity-70 w-8"
                alt="Drinks"
              />
            </div>
          </div>
          {/* text */}
          <div>
            <h4 className="font-semibold text-xl mb-2 text-center">Drinks</h4>
            <p className="text-xs text-center">
              In the new era of technology we look in the future with certainty
              and pride for our life.
            </p>
            <div className="text-[#FF5200] hover:text-[#e94a00] flex gap-1 justify-center items-center font-semibold mt-4 hover:underline">
              <Link to={"/sortedFoods"}>Explore menu</Link>
              <IoArrowForwardSharp className="text-xl mt-1" />
            </div>
          </div>
        </div>

        {/* Desserts */}
        <div className="w-64 rounded-lg flex flex-col items-center justify-center border-2 p-6">
          <div className="rounded-full w-12 mb-4">
            {/* img */}
            <div className="rounded-full bg-gray-200 p-2 flex items-center justify-center">
              <img
                src="https://i.ibb.co/DKZSLRL/Group-1.png"
                className="opacity-70 w-8"
                alt="Desserts"
              />
            </div>
          </div>
          {/* text */}
          <div>
            <h4 className="font-semibold text-xl mb-2 text-center">Desserts</h4>
            <p className="text-xs text-center">
              In the new era of technology we look in the future with certainty
              and pride for our life.
            </p>
            <div className="text-[#FF5200] hover:text-[#e94a00] flex gap-1 justify-center items-center font-semibold mt-4 hover:underline">
              <Link to={"/sortedFoods"}>Explore menu</Link>
              <IoArrowForwardSharp className="text-xl mt-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseUs;
