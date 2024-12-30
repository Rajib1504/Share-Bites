import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthPovider";
import { Clock, Info, Mail, MapPin, Package, User } from "lucide-react";
import Swal from "sweetalert2";

const DetailsFood = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  // console.log(user.email);
  const { id } = useParams();
  const [foods, setFoods] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get(`https://zomato-server-delta.vercel.app/food/${id}`, {
        withCredentials: true,
      })
      .then((data) => {
        setFoods(data.data);
      });
  }, [id]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const food_name = form.food_name.value;
    const food_image = form.food_image.value;
    const food_id = form._id.value;
    const donator_name = form.donator_name.value;
    const donator_email = form.donator_email.value;
    const user_email = form.email.value;
    const request_date = form.request_date.value;
    const pickup_location = form.pickup_location.value;
    const expiry_date = form.expiry_date.value;
    const additional_notes = form.additional_notes.value;
    const food_status = "requested";
    const formData = {
      food_name,
      food_image,
      food_id,
      donator_name,
      donator_email,
      user_email,
      request_date,
      pickup_location,
      expiry_date,
      additional_notes,
      food_status,
    };
    // console.log(formData);
    try {
      axios
        .post(
          `https://zomato-server-delta.vercel.app/food/${id}`,
          { withCredentials: true },
          formData
        )
        .then((result) => console.log(result.data));
      if ("insertedId") {
        axios
          .delete(`https://zomato-server-delta.vercel.app/food/${id}`)
          .then((result) => console.log(result.data));

        Swal.fire({
          title: "Success!",
          text: "Request accpted",
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigate("/myFoodRequest");
      }
    } catch (error) {
      const errorm = error.message;
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorm,
      });
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      {/* Food Details Section */}
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
                onClick={openModal}
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
              className="absolute top-4 right-4 text-gray-500 text-2xl hover:text-gray-800"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold text-center mb-4">Request Food</h2>
            <form onSubmit={handleSubmit}>
              {/* Food Name */}
              <div className="mb-4">
                <label className="block text-gray-700">Food Name</label>
                <input
                  type="text"
                  name="food_name"
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
                  name="food_image"
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
                  name="_id"
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
                  name="donator_name"
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
                  name="donator_email"
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
                  name="email"
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
                  name="request_date"
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
                  name="pickup_location"
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
                  name="expiry_date"
                  value={new Date(foods?.expiry_datetime).toLocaleString()}
                  readOnly
                  className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-100"
                />
              </div>
              {/* Additional Notes */}
              <div className="mb-4">
                <label className="block text-gray-700">Additional Notes</label>
                <textarea
                  name="additional_notes"
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
