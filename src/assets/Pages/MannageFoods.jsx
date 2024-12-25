import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthPovider";
import { FaPen, FaTrash } from "react-icons/fa"; // Icons for actions

const MannageFoods = () => {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:9000/food/mannage/${user?.email}`)
      .then((result) => setFoods(result.data));
  }, [user?.email]);

  const handleUpdate = (id) => {
    console.log(`Update food with ID: ${id}`);
    // Logic for update
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this food item?")) {
      console.log(`Delete food with ID: ${id}`);
      // Logic for delete
    }
  };

  return (
    <div className="container mx-auto my-8 p-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        My Total Foods: {foods.length}
      </h2>
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="table-auto w-full border-collapse">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Image</th>
              <th className="px-4 py-2 text-left">Food Details</th>
              <th className="px-4 py-2 text-left">Additional Info</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {foods.map((food, index) => (
              <tr
                key={index}
                className="odd:bg-gray-50 even:bg-gray-100 hover:bg-gray-200"
              >
                <td className="px-4 py-4">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={food.food_image} alt={food.food_name} />
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <p className="font-semibold text-gray-800">
                    {food.food_name}
                  </p>
                  <p className="text-sm text-gray-500">
                    Pickup: {food.pickup_location}
                  </p>
                  <p className="text-sm text-gray-500">
                    Expiry: {food.expiry_date}
                  </p>
                </td>
                <td className="px-4 py-4">
                  <p className="text-sm font-semibold text-gray-800">
                    Status:{" "}
                    <span className="badge bg-orange-400 p-3">
                      {food.food_status}
                    </span>
                  </p>
                  <p className="text-sm text-gray-500">
                    {food.additional_notes}
                  </p>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleUpdate(food._id)}
                      className="text-blue-500 hover:text-blue-700 border-2 border-blue-200 hover:bg-blue-200 rounded-full p-2"
                    >
                      <FaPen size={20} />
                    </button>
                    <button
                      onClick={() => handleDelete(food._id)}
                      className="text-red-500 hover:text-red-700 border-red-200 border-2 p-2 hover:bg-red-300 rounded-full"
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
    </div>
  );
};

export default MannageFoods;
