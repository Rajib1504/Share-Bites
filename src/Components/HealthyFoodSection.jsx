import React from "react";

const HealthyFoodSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center mx-auto m-8 rounded-xl w-full   justify-center bg-primary-default py-12 px-6">
      {/* Image Section */}
      <div className="md:w-1/2 w-full flex justify-center">
        <img
          src="https://i.ibb.co/pyLjZ18/Image.png"
          className="rounded-lg shadow-md w-full max-w-md object-cover "
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 w-full px-4 md:pl-12 mt-8 md:mt-0">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
          We provide healthy food for your family.
        </h2>
        <p className="text-gray-600 mb-4">
          Our story began with a vision to create a unique dining experience
          that merges fine dining, exceptional service, and a vibrant ambiance.
          Rooted in city's rich culinary culture, we aim to honor our local
          roots while infusing a global palate.
        </p>
        <p className="text-gray-600 mb-6">
          At our place, we believe that dining is not just about food, but also
          about the overall experience. Our staff, renowned for their warmth and
          dedication, strives to make every visit an unforgettable event.
        </p>
        <button className="px-6 py-3 bg-[#FF5200] text-white font-medium rounded-lg hover:bg-[#e04700] shadow-md transition duration-300">
          More About Us
        </button>
      </div>
    </div>
  );
};

export default HealthyFoodSection;
