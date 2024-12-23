import axios from "axios";
import React, { useEffect, useState } from "react";
import { GiFrayedArrow } from "react-icons/gi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineAccessTime } from "react-icons/md";
import { Link } from "react-router-dom";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  // console.log(foods);
  useEffect(() => {
    axios
      .get("http://localhost:9000/food/sortedFoods")
      .then((data) => setFoods(data.data));
  }, []);
  return (
    <div className="">
      Feature section {foods.length}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-full md:w-11/12 gap-3  ">
        {foods.map((food) => (
          //     <p >{food.food_name}</p>
          <div
            key={food._id}
            className="hover:border-2 pb-3 bg-primary-default hover:border-gray-300 hover:shadow-md duration-100 lg:w-90 w-full rounded-xl hover:p-3 flex flex-col gap-1 items-center justify-between"
          >
            {/* image  */}
            <figure className="w-full">
              <img
                src={`${food.food_image}`}
                alt="Shoes"
                className="rounded-xl h-60 object-cover w-full"
              />
            </figure>
            {/* title  */}
            <div className="text-xl py-2 font-bold  hover:text-primary-main">
              {food.food_name}
            </div>
            {/* text  */}
            <div className="flex justify-between  px-4 w-full items-center">
              <div>
                <div className="flex justify-center items-center gap-2">
                  <p className="font-bold text-primary-main">Quantity:</p>
                  <p> {food.quantity}</p>
                </div>
              </div>
              <div className="rounded-full p-1 px-3 bg-green-500 hover:bg-green-600 font-semibold">
                {food.status}
              </div>
              {/* <div className="rounded-full p-1 px-3 bg-primary-sub hover:bg-primary-main font-semibold">
            {food.status}
          </div> */}
            </div>
            {/* timings  */}
            <div className="flex justify-center flex-wrap-reverse items-center gap-2">
              <span className="flex items-center gap-1">
                <MdOutlineAccessTime className=" text-primary-main" />{" "}
                <p className="text-sm">{food.expiry_datetime}</p>
              </span>
              <span className="flex items-center gap-1">
                <IoLocationOutline className=" text-primary-main" />
                <p className="text-sm">{food.pickup_location}</p>
              </span>
            </div>
            <Link
              to={`/food/${food?._id}`}
              className="btn btn-wide mx-auto px-4 py-2 mt-4 text-white bg-gradient-to-r from-[#f6a078] to-[#902f02] rounded-lg hover:from-[#f86300] hover:to-[#f4993f] transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-lg focus:outline-none flex justify-center items-center font-semibold gap-3"
            >
              View Details <GiFrayedArrow />
            </Link>
          </div>
        ))}
      </div>
      {/* show all button  */}
    </div>
  );
};

export default AvailableFoods;
