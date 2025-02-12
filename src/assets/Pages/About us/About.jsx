import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-orange-600 text-center mb-6">
          About Share Bites
        </h1>
        <p className="text-gray-700 text-lg text-center mb-4">
          Share Bites is a food distribution platform dedicated to reducing food
          waste and hunger by connecting surplus food from restaurants, grocery
          stores, and donors to people in need.
        </p>
        <div className="my-6">
          <h2 className="text-2xl font-semibold text-orange-500">
            Our Mission
          </h2>
          <p className="text-gray-700 mt-2">
            Our goal is to create a sustainable and efficient food-sharing
            system where no meal goes to waste. We collaborate with businesses
            and individuals to rescue and redistribute food, ensuring it reaches
            those who need it the most.
          </p>
        </div>
        <div className="my-6">
          <h2 className="text-2xl font-semibold text-orange-500">
            How We Work
          </h2>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
            <li>
              Partnering with local restaurants, stores, and food producers to
              collect surplus food.
            </li>
            <li>
              Using technology to match food donations with community
              organizations and individuals in need.
            </li>
            <li>
              Ensuring food safety and quality through proper handling and
              distribution.
            </li>
          </ul>
        </div>
        <div className="my-6">
          <h2 className="text-2xl font-semibold text-orange-500">Join Us</h2>
          <p className="text-gray-700 mt-2">
            Whether you're a business looking to donate food, a volunteer eager
            to help, or someone in need, Share Bites welcomes you to be a part
            of our journey towards a world without hunger.
          </p>
        </div>
        <div className="text-center mt-6">
          <Link
            to={"/"}
            className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition"
          >
            Get Involved
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
