import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthPovider";
import { FaPen, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const MannageFoods = () => {
  const { user } = useContext(AuthContext);
  const [allFoods, setAllFoods] = useState([]);
  const [openModal, setIsModalOpen] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);

  // Fetching data
  useEffect(() => {
    axios
      .get(
        `https://zomato-server-delta.vercel.app/food/mannage/${user?.email}`,
        {
          withCredentials: true,
        }
      )
      .then((result) => setAllFoods(result.data));
  }, [user?.email]);

  // Open modal and set selected food
  const handleUpdate = (food) => {
    setSelectedFood(food);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModel = () => {
    setIsModalOpen(false);
    setSelectedFood(null);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedData = {
      food_name: form.food_name.value,
      food_image: form.food_image.value,
      quantity: form.quantity.value,
      quantity_type: form.quantity_type.value,
      pickup_location: form.pickup_location.value,
      expiry_datetime: form.expiry_datetime.value,
      status: form.status.value,
      additional_notes: form.additional_notes.value,
    };
    axios
      .put(
        `https://zomato-server-delta.vercel.app/food/update/${selectedFood._id}`,
        updatedData
      )
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Food updated successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
        closeModel();
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  // Handle delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://zomato-server-delta.vercel.app/myfood/${id}`)
          .then(() => {
            setAllFoods(allFoods.filter((food) => food._id !== id));
            Swal.fire("Deleted!", "Your food has been deleted.", "success");
          });
      }
    });
  };

  return (
    <div className="container mx-auto my-8 p-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        My Total Foods: {allFoods.length}
      </h2>
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="table-auto w-full border-collapse">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Image</th>
              <th className="px-4 py-2 text-left">Food Details</th>
              <th className="px-4 py-2 text-left">Quantity</th>
              <th className="px-4 py-2 text-left">Additional Info</th>
              <th className="px-4 py-2 text-left">Donator Details</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allFoods.map((food, index) => (
              <tr
                key={index}
                className="odd:bg-gray-50 even:bg-gray-100 hover:bg-gray-200"
              >
                <td className="px-4 py-4">
                  <img
                    src={food.food_image}
                    alt={food.food_name}
                    className="h-12 w-12 object-cover rounded-full"
                  />
                </td>
                <td className="px-4 py-4">
                  <p className="font-semibold text-gray-800">
                    {food.food_name}
                  </p>
                  <p className="text-sm text-gray-500">
                    Pickup: {food.pickup_location}
                  </p>
                  <p className="text-sm text-gray-500">
                    Expiry: {new Date(food.expiry_datetime).toLocaleString()}
                  </p>
                </td>
                <td className="px-4 py-4">
                  <p className="text-sm text-gray-800 font-semibold">
                    {food.quantity} {food.quantity_type}
                  </p>
                </td>
                <td className="px-4 py-4">
                  <p className="text-sm font-semibold text-gray-800">
                    Status:{" "}
                    <span
                      className={`badge ${
                        food.status === "available"
                          ? "bg-green-500"
                          : "bg-red-500"
                      } text-white p-2 rounded`}
                    >
                      {food.status}
                    </span>
                  </p>
                  <p className="text-sm text-gray-500">
                    {food.additional_notes}
                  </p>
                </td>
                <td className="px-4 py-4">
                  <p className="font-semibold text-gray-800">
                    {food.donator.name}
                  </p>
                  <p className="text-sm text-gray-500">{food.donator.email}</p>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleUpdate(food)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FaPen size={20} />
                    </button>
                    <button
                      onClick={() => handleDelete(food._id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash size={20} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {openModal && selectedFood && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg"
            style={{ maxHeight: "90vh", overflowY: "auto" }}
          >
            {/* Modal Content */}
          </div>
        </div>
      )}
    </div>
  );
};

export default MannageFoods;
