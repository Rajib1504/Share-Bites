import React, { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthPovider";
import axios from "axios";
import Swal from "sweetalert2";

const AddFood = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const food_name = form.food_name.value;
    const food_image = form.food_image.value;
    const status = form.status.value;
    const quantity = parseInt(form.quantity.value);
    const quantity_type = form.quantity_type.value;
    const expiry_datetime = form.expiry_datetime.value;
    const pickup_location = form.pickup_location.value;
    const additional_notes = form.additional_notes.value;
    const donator = {
      name: form.donatorName.value,
      email: form.donatorEmail.value,
      profile_image: form.donatorImage.value,
    };
    const formData = {
      food_name,
      food_image,
      quantity,
      quantity_type,
      pickup_location,
      status,
      expiry_datetime,
      additional_notes,
      donator,
    };

    console.log(formData);
    axios
      .post("https://zomato-server-delta.vercel.app/food", formData)
      .then((data) => {
        console.log(data.data);
        Swal.fire({
          title: "Success!",
          text: "Food added successful",
          icon: "success",
          confirmButtonText: "Ok",
        });
        // form.reset();
      })
      .catch((error) => {
        const errorm = error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorm,
        });
      });
  };
  return (
    <div className="max-w-md mx-auto p-3 hover:border-2 mt-3 duration-100 hover:shadow-lg bg-primary-default  hover:rounded-lg hover:border-gray-300">
      <form onSubmit={handleSubmit} className="space-y-2">
        <h2 className="text-center font-bold hover:text-primary-main hover:underline text-xl">
          Add Food
        </h2>
        {/* Food Name */}
        <div>
          <label
            htmlFor="foodName"
            className="block text-sm font-medium text-gray-700"
          >
            Food Name
          </label>
          <input
            type="text"
            id="foodName"
            name="food_name"
            className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-orange-500"
            placeholder="Enter food name"
            required
          />
        </div>

        <div className="flex justify-between items-center gap-2">
          {/* Food Quantity */}
          <div>
            <label
              htmlFor="foodQuantity"
              className="block text-sm font-medium text-gray-700"
            >
              Food Quantity
            </label>
            <input
              type="text"
              id="foodQuantity"
              name="quantity"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-orange-500"
              placeholder="Enter food quantity"
              required
            />
          </div>
          {/* Food Quantity type*/}
          <div>
            <label
              htmlFor="foodQuantityType"
              className="block text-sm font-medium text-gray-700"
            >
              Food Quantity Type
            </label>
            <input
              type="text"
              id="foodQuantityType"
              name="quantity_type"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-orange-500"
              placeholder="Enter food quantity type"
              required
            />
          </div>
        </div>
        <div className="flex justify-between items-center gap-2">
          {/* Food Image */}
          <div>
            <label
              htmlFor="foodImage"
              className="block text-sm font-medium text-gray-700"
            >
              Food Image URL
            </label>
            <input
              type="url"
              id="foodImage"
              name="food_image"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-orange-500"
              placeholder="Enter image URL"
              required
            />
          </div>
          {/* Pickup Location */}
          <div>
            <label
              htmlFor="pickupLocation"
              className="block text-sm font-medium text-gray-700"
            >
              Pickup Location
            </label>
            <input
              type="text"
              id="pickupLocation"
              name="pickup_location"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-orange-500"
              placeholder="Enter pickup location"
              required
            />
          </div>
        </div>
        <div className="flex gap-4 items-center">
          {/* Status */}
          <div className="w-1/2">
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700"
            >
              Status
            </label>
            <select
              disabled
              name="status"
              id="status"
              className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-100 cursor-not-allowed focus:ring focus:ring-orange-500"
            >
              <option value="available">Available</option>
              <option value="available">UnAvailable</option>
            </select>
          </div>

          {/* Expiry Date/Time */}
          <div className="w-1/2">
            <label
              htmlFor="expiryDateTime"
              className="block text-sm font-medium text-gray-700"
            >
              Expiry Date/Time
            </label>
            <input
              type="datetime-local"
              id="expiryDateTime"
              name="expiry_datetime"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-orange-500"
              required
            />
          </div>
        </div>

        {/* Additional Notes */}
        <div>
          <label
            htmlFor="additionalNotes"
            className="block text-sm font-medium text-gray-700"
          >
            Additional Notes
          </label>
          <textarea
            id="additionalNotes"
            name="additional_notes"
            className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-orange-500"
            placeholder="Enter additional notes"
            rows="3"
          ></textarea>
        </div>

        {/* Donor Details */}
        <div className="border-t pt-4 mt-4 border-primary-main">
          <h3 className="text-lg hover:text-primary-main text-gray-800 text-center font-semibold">
            Donor Details
          </h3>

          {/* Donor Name */}
          <div>
            <label
              htmlFor="donatorName"
              className="block text-sm ring-primary-main font-medium text-gray-700"
            >
              Donor Name
            </label>
            <input
              defaultValue={user?.displayName}
              disabled
              type="text"
              id="donatorName"
              name="donatorName"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-orange-500"
              placeholder="Enter donor name"
              required
            />
          </div>

          <div className="flex justify-between items-center mb-3 gap-2">
            {/* Donor Email */}
            <div>
              <label
                htmlFor="donatorEmail"
                className="block text-sm font-medium text-gray-700"
              >
                Donor Email
              </label>
              <input
                defaultValue={user?.email}
                disabled
                type="email"
                id="donatorEmail"
                name="donatorEmail"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-orange-500"
                placeholder="Enter donor email"
                required
              />
            </div>

            {/* Donor Image */}
            <div>
              <label
                htmlFor="donatorImage"
                className="block text-sm font-medium text-gray-700"
              >
                Donor Image URL
              </label>
              <input
                type="url"
                defaultValue={user?.photoURL}
                disabled
                id="donatorImage"
                name="donatorImage"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-orange-500"
                placeholder="Enter donor image URL"
                required
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 focus:outline-none"
        >
          Add Food
        </button>
      </form>
    </div>
  );
};

export default AddFood;
