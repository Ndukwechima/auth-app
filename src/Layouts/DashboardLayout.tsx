import React from "react";
import DashboardHeader from "../components/DashboardHeader";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout: React.FC = () => {
  return (
    <div className="flex bg-blue-50 ">
      <Sidebar />
      <div className="flex-1">
        <div className="pt-4">
          <DashboardHeader />
        </div>
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
