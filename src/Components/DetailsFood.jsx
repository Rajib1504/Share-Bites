import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthPovider";

const DetailsFood = () => {
  const { user } = useContext(AuthContext);
  // console.log(user.email);
  const { id } = useParams();
  const [foods, setFoods] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:9000/food/${id}`).then((data) => {
      setFoods(data.data);
    });
  }, [id]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      {/* Food Details Section */}
      <div className="max-w-4xl w-full bg-white overflow-hidden shadow-lg rounded-lg">
        <div className="relative h-96">
          <img
            src={foods?.food_image}
            alt={foods?.food_name}
            className="w-full h-full object-cover rounded-t-lg"
          />
        </div>
        <div className="p-8">
          <h1 className="text-4xl font-bold text-center text-gray-900">
            {foods?.food_name}
          </h1>
          <p className="mt-4 text-center text-gray-600">
            {foods?.additional_notes}
          </p>
          <div className="mt-8 flex justify-center">
            <button
              onClick={openModal}
              className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600"
            >
              Request Food
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {/*  */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative overflow-y-auto"
            style={{ maxHeight: "90vh" }} // Add max height for the modal
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold text-center mb-4">Request Food</h2>
            <form>
              {/* Food Name */}
              <div className="mb-4">
                <label className="block text-gray-700">Food Name</label>
                <input
                  type="text"
                  value={foods?.food_name}
                  readOnly
                  className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-100"
                />
              </div>
              {/* Food Image */}
              <div className="mb-4">
                <label className="block text-gray-700">Food Image URL</label>
                <input
                  type="text"
                  value={foods?.food_image}
                  readOnly
                  className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-100"
                />
              </div>
              {/* Food ID */}
              <div className="mb-4">
                <label className="block text-gray-700">Food ID</label>
                <input
                  type="text"
                  value={foods?._id}
                  readOnly
                  className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-100"
                />
              </div>
              {/* Donator Name */}
              <div className="mb-4">
                <label className="block text-gray-700">Donator Name</label>
                <input
                  type="text"
                  value={foods?.donator?.name}
                  readOnly
                  className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-100"
                />
              </div>
              {/* Donator Email */}
              <div className="mb-4">
                <label className="block text-gray-700">Donator Email</label>
                <input
                  type="email"
                  value={foods?.donator?.email}
                  readOnly
                  className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-100"
                />
              </div>
              {/* User Email */}
              <div className="mb-4">
                <label className="block text-gray-700">Your Email</label>
                <input
                  type="email"
                  value={user?.email}
                  readOnly
                  className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-100"
                />
              </div>
              {/* Request Date */}
              <div className="mb-4">
                <label className="block text-gray-700">Request Date</label>
                <input
                  type="text"
                  value={new Date().toLocaleString()}
                  readOnly
                  className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-100"
                />
              </div>
              {/* Pickup Location */}
              <div className="mb-4">
                <label className="block text-gray-700">Pickup Location</label>
                <input
                  type="text"
                  value={foods?.pickup_location}
                  readOnly
                  className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-100"
                />
              </div>
              {/* Expiry Date */}
              <div className="mb-4">
                <label className="block text-gray-700">Expiry Date</label>
                <input
                  type="text"
                  value={new Date(foods?.expiry_datetime).toLocaleString()}
                  readOnly
                  className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-100"
                />
              </div>
              {/* Additional Notes */}
              <div className="mb-4">
                <label className="block text-gray-700">Additional Notes</label>
                <textarea
                  value={foods?.additional_notes}
                  onChange={(e) =>
                    setFoods({ ...foods, additional_notes: e.target.value })
                  }
                  className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-orange-500"
                  rows="3"
                  placeholder="Add any additional notes..."
                ></textarea>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600"
              >
                Request Food
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsFood;
