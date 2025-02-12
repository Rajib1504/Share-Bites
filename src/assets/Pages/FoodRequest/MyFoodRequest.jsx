import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthPovider";
import Loader from "../../../Components/Loader";

const MyFoodRequest = () => {
  const [myFoods, setMyFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(myFoods);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);
    if (user?.email) {
      axios
        .get(
          `https://zomato-server-delta.vercel.app/food/requests/${user?.email}`,
          {
            withCredentials: true,
          }
        )
        .then((result) => {
          setMyFoods(result.data);
          setLoading(false);
        });
    }
  }, [user.email]);

  return (
    <div className="container min-h-screen mx-auto my-8 p-4">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
        My Food Requests ({myFoods.length})
      </h2>
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        {loading ? (
          <div className="flex w-full mx-auto justify-center items-center">
            <Loader></Loader>
          </div>
        ) : (
          <table className="table-auto w-full border-collapse">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-2 sm:px-4 py-2 text-left">Image</th>
                <th className="px-2 sm:px-4 py-2 text-left">Details</th>
                <th className="px-2 sm:px-4 py-2 text-left">Donator</th>
                <th className="px-2 sm:px-4 py-2 text-left lg:text-center">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {myFoods.map((myFood) => (
                <tr
                  key={myFood._id}
                  className="odd:bg-gray-50 even:bg-gray-100 hover:bg-gray-200"
                >
                  <td className="px-2 sm:px-4 py-4">
                    <div className="avatar">
                      <div className="mask mask-squircle h-10 w-10 sm:h-12 sm:w-12">
                        <img src={myFood?.food_image} alt={myFood?.food_name} />
                      </div>
                    </div>
                  </td>
                  <td className="px-2 sm:px-4 py-4">
                    <div>
                      <p className="font-semibold text-gray-800 text-sm sm:text-base">
                        {myFood?.food_name}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500">
                        {myFood?.pickup_location}
                      </p>
                    </div>
                  </td>
                  <td className="px-2 sm:px-4 py-4">
                    <div>
                      <p className="font-medium text-gray-800 text-sm sm:text-base">
                        {myFood?.donator_name}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500">
                        <span>{myFood?.donator_email}</span> |{" "}
                        <span>{myFood?.expiry_date}</span>
                      </p>
                    </div>
                  </td>
                  <td className="px-2 sm:px-4 py-4 text-center">
                    <span className="px-3 py-1 rounded-full text-white bg-orange-500 text-xs sm:text-sm">
                      {myFood?.food_status || "N/A"}
                    </span>
                    <p className="text-xs sm:text-sm text-gray-500 mt-2">
                      {myFood?.request_date}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default MyFoodRequest;
