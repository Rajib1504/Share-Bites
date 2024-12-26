import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center max-h-screen min-h-80 items-center">
      <div className="relative w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 animate-spin">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-10 h-10 border-t-4 border-white border-solid rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
