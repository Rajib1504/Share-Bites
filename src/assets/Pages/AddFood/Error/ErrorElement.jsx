import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-center px-4">
      <img
        src="https://i.ibb.co/ccqmCmks/no-food.jpg"
        alt="Error Illustration"
        className="w-64 md:w-80"
      />
      <h1 className="text-4xl md:text-5xl font-bold text-[#FF5200] mt-6">
        Oops! Page Not Found
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mt-3 max-w-lg">
        Sorry, the page you are looking for might have been removed or is
        temporarily unavailable.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 btn-ghost border-primary-main hover:text-white text-base font-semibold rounded-lg shadow-md hover:bg-[#FF5200] transition duration-300 ease-in-out"
      >
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
