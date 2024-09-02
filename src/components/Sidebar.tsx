import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  IoIosHome,
  IoIosSettings,
  IoIosHelpCircleOutline,
} from "react-icons/io";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { IoPeople } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { MdOutlineMessage } from "react-icons/md";
import { BiSolidLogOutCircle } from "react-icons/bi";

const Sidebar: React.FC = () => {
  const location = useLocation();

  // Function to determine if a link is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-[100%] bg-blue-50 hidden xl:flex flex-col">
      <div className="flex justify-center items-center mt-10">
        <Link to="/" className="text-xl font-bold text-blue-600">
          T-Concept
        </Link>
      </div>
      <aside className="h-[80vh] mt-[4rem] flex flex-col items-end justify-center">
        <div className="w-68 h-[80vh] flex flex-col items-center p-4">
          <div className="h-[80vh] flex flex-col justify-between items-center">
            <nav className="mt-10">
              <ul className="space-y-10 text-xl">
                <li
                  className={`${
                    isActive("/dashboard")
                      ? "bg-blue-600 text-white"
                      : "hover:bg-blue-600 text-gray-700 hover:text-white"
                  } w-[100%] px-20 p-1 rounded-lg`}
                >
                  <div className="flex items-center space-x-2">
                    <IoIosHome />
                    <Link to="/dashboard">Home</Link>
                  </div>
                </li>
                <li
                  className={`${
                    isActive("/dashboard/invoices")
                      ? "bg-blue-600 text-white"
                      : "hover:bg-blue-600 text-gray-700 hover:text-white"
                  } w-[100%] px-20 p-1 rounded-lg`}
                >
                  <div className="flex items-center space-x-2">
                    <LiaFileInvoiceSolid />
                    <Link to="/dashboard/invoice">Invoices</Link>
                  </div>
                </li>
                <li
                  className={`${
                    isActive("/dashboard/clients")
                      ? "bg-blue-600 text-white"
                      : "hover:bg-blue-600 text-gray-700 hover:text-white"
                  } w-[100%] px-20 p-1 rounded-lg`}
                >
                  <div className="flex items-center space-x-2">
                    <IoPeople />
                    <Link to="/dashboard/clients">Clients</Link>
                  </div>
                </li>
                <li
                  className={`${
                    isActive("/dashboard/product")
                      ? "bg-blue-600 text-white"
                      : "hover:bg-blue-600 text-gray-700 hover:text-white"
                  } w-[100%] px-20 p-1 rounded-lg`}
                >
                  <div className="flex items-center space-x-2">
                    <AiOutlineProduct />
                    <Link to="/dashboard/product">Products</Link>
                  </div>
                </li>
                <li
                  className={`${
                    isActive("/dashboard/settings")
                      ? "bg-blue-600 text-white"
                      : "hover:bg-blue-600 text-gray-700 hover:text-white"
                  } w-[100%] px-20 p-1 rounded-lg`}
                >
                  <div className="flex items-center space-x-2">
                    <IoIosSettings />
                    <Link to="/dashboard/settings">Settings</Link>
                  </div>
                </li>
                <li
                  className={`${
                    isActive("/dashboard/message")
                      ? "bg-blue-600 text-white"
                      : "hover:bg-blue-600 text-gray-700 hover:text-white"
                  } w-[100%] px-20 p-1 rounded-lg`}
                >
                  <div className="flex items-center space-x-2">
                    <MdOutlineMessage />
                    <Link to="/dashboard/message">Messages</Link>
                  </div>
                </li>
                <li
                  className={`${
                    isActive("/dashboard/help")
                      ? "bg-blue-600 text-white"
                      : "hover:bg-blue-600 text-gray-700 hover:text-white"
                  } w-[100%] px-20 p-1 rounded-lg`}
                >
                  <div className="flex items-center space-x-2 ">
                    <IoIosHelpCircleOutline />
                    <Link to="/dashboard/help">Help</Link>
                  </div>
                </li>
              </ul>
            </nav>
            <div className=" flex items-center space-x-2">
              <BiSolidLogOutCircle size={25} className="text-gray-700" />
              <p className="text-red-600 text-center text-xl font-bold">
                Log out
              </p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
