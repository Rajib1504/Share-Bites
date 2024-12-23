import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Clock, MapPin, Package, Info, Mail, User } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";

const DetailsFood = () => {
  const { id } = useParams();
  const [foods, setFoods] = useState([]);
  console.log(foods);
  useEffect(() => {
    axios
      .get(`http://localhost:9000/food/${id}`)
      .then((data) => setFoods(data.data));
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto bg-white overflow-hidden shadow-lg rounded-lg">
        {/* Hero Image Section */}
        <div className="relative h-96">
          <img
            src={foods?.food_image}
            alt={foods?.food_name}
            className="w-full h-full object-cover rounded-t-lg"
          />
          <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black/50 to-transparent rounded-t-lg">
            <span
              className={`px-4 py-1 rounded-full text-sm font-medium ${
                foods?.status === "available" ? "bg-green-500" : "bg-red-500"
              } text-white`}
            >
              {foods?.status}
            </span>
          </div>
        </div>

        <div className="p-8">
          {/* Food Details */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900 text-center">
              {foods?.food_name}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
              <div className="flex items-center space-x-3 text-gray-600">
                <Clock className="w-5 h-5 text-[#FF5200]" />
                <div>
                  <p className="font-medium">Expiry Date</p>
                  <p>{new Date(foods?.expiry_datetime).toLocaleString()}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin className="w-5 h-5 text-[#FF5200]" />
                <div>
                  <p className="font-medium">Pickup Location</p>
                  <p>{foods?.pickup_location}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-gray-600">
                <Package className="w-5 h-5 text-[#FF5200]" />
                <div>
                  <p className="font-medium">Quantity</p>
                  <p>
                    {foods?.quantity} {foods?.quantity_type}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-gray-600">
                <Info className="w-5 h-5 text-[#FF5200]" />
                <div>
                  <p className="font-medium">Additional Notes</p>
                  <p>{foods?.additional_notes || "No additional notes"}</p>
                </div>
              </div>
            </div>

            {/* Donor Information */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                Donor Information
              </h2>
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                <img
                  src={foods?.donator?.profile_image}
                  alt={foods?.donator?.name}
                  className="rounded-full w-24 h-24 object-cover ring-4 ring-gray-100"
                />
                <div className="flex-1 space-y-4">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <User className="w-5 h-5 text-[#FF5200]" />
                    <div>
                      <p className="font-medium">Name</p>
                      <p>{foods?.donator?.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Mail className="w-5 h-5 text-[#FF5200]" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p>{foods?.donator?.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Request Button */}
            <div className="mt-12 flex justify-center">
              <button
                className="px-8 py-3 bg-[#FF5200] text-white font-semibold rounded-lg hover:bg-[#e94a00] 
                          transform transition duration-200 hover:scale-105 focus:outline-none focus:ring-2 
                          focus:ring-[#FF5200] focus:ring-offset-2 shadow-lg"
              >
                Request Food
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsFood;
