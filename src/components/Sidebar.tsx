import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar: React.FC = () => {
  const location = useLocation();

  // Function to determine if a link is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className=" flex flex-col bg-blue-50">
      <div>
        <Link to="/" className="text-lg font-bold text-black">
          Logo
        </Link>
      </div>
      <aside className="h-[80vh] mt-[10rem] flex flex-col items-end justify-center">
        <div className="w-64 h-[80vh] flex flex-col items-center p-4">
          <div className="h-[80vh] flex flex-col justify-between">
            <nav className="mt-10">
              <ul className="space-y-4 text-xl">
                <li
                  className={`${
                    isActive("/dashboard")
                      ? "bg-blue-600 text-white"
                      : "hover:bg-blue-600 text-black hover:text-white"
                  } w-[100%] px-20 p-1 rounded-lg`}
                >
                  <Link to="/dashboard">Home</Link>
                </li>
                <li
                  className={`${
                    isActive("/dashboard/clients")
                      ? "bg-blue-600 text-white"
                      : "hover:bg-blue-600 text-black hover:text-white"
                  } w-[100%] px-20 p-1 rounded-lg`}
                >
                  <Link to="/dashboard/clients">Clients</Link>
                </li>
                <li
                  className={`${
                    isActive("/dashboard/settings")
                      ? "bg-blue-600 text-white"
                      : "hover:bg-blue-600 text-black hover:text-white"
                  } w-[100%] px-20 p-1 rounded-lg`}
                >
                  <Link to="/dashboard/settings">Settings</Link>
                </li>
                <li
                  className={`${
                    isActive("/dashboard/help")
                      ? "bg-blue-600 text-white"
                      : "hover:bg-blue-600 text-black hover:text-white"
                  } w-[100%] px-20 p-1 rounded-lg`}
                >
                  <Link to="/dashboard/help">Help</Link>
                </li>
              </ul>
            </nav>
            <div>
              <p className="text-gray-800 text-center text-2xl font-bold">
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
