import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import Alex from "../assets/alex.jpg";

const DashboardHeader: React.FC = () => {
  return (
    <header className="py-4 pl-10 pr-[4rem] text-gray-700 flex justify-between items-center">
      <div className="text-lg font-bold">
        <h3>
          Welcome back <span className="text-blue-600">Chima!</span>
        </h3>
      </div>

      <input
        type="text"
        placeholder="Search..."
        className="w-1/5 px-2 py-1 rounded border bg-slate-50 outline-none"
      />
      <div className="flex items-center space-x-4">
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
