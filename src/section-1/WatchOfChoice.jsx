import React from 'react';

const WatchOfChoice = () => {
  return (
    <div className="flex flex-col lg:flex-row  min-h-[100vh] items-center justify-around md:px-8 w-fullfont-sans ">
      {/* Content Section */}
      <div className="flex-1 max-w-xl lg:pr-12 text-center lg:text-left mb-8 lg:mb-0  ">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
          Watch of Choice
        </h1>
        <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
          Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse.
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded shadow-lg transition duration-300 ease-in-out uppercase text-sm">
          SHOW WATCHES
        </button>
      </div>

      {/* Image Section */}
      <div className=" flex justify-center h-[70vh] items-center">

        <img
          src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/choce_watch1.png"
          alt="Rolex Cellini Watch"
          className="max-w-full h-[100%] "
        />
      </div>
    </div>
  );
};

export default WatchOfChoice;