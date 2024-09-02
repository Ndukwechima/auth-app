import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import Alex from "../assets/alex.jpg";
import { IoIosSearch } from "react-icons/io";

const DashboardHeader: React.FC = () => {
  return (
    <header className=" py-4 pl-10 pr-[4rem] text-gray-800 dark:bg-gray-800 dark:text-white flex justify-between items-center">
      <div className="w-[30%] text-lg font-bold hidden xl:block ">
        <h3>
          Welcome back <span className="text-blue-600">Chima!</span>
        </h3>
      </div>

      <div className="w-[30%] relative flex items-center space-x-2 hover:shadow-md rounded-xl">
        <IoIosSearch className="absolute text-gray-500 ml-2" size={24} />
        <input
          type="text"
          placeholder="Tap to search"
          className="w-[20%] md:w-[60%] md:bg-blue-50 px-6 py-[6px] outline-none rounded-md"
        />
      </div>
      <div className="w-[30%] md:w-[20%] flex justify-end space-x-4">
        <div className="relative">
          <div className="w-5 h-5 rounded-full text-white bg-blue-700 flex justify-center items-center absolute top-0 ">
            <p className="font-bold">2</p>
          </div>
          <IoMdNotificationsOutline className="w-8 h-8 text-gray-500" />
        </div>
        <div>
          <img src={Alex} alt="Alex" className="w-8 h-8 rounded-full" />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
