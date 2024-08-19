import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Products from "./pages/Products";
import DashboardHome from "./dashboardPages/DashboardHome";
import Clients from "./dashboardPages/Clients";
import Settings from "./dashboardPages/Settings";
import Help from "./dashboardPages/Help";
import MainLayout from "./Layouts/MainLayout";
import DashboardLayout from "./Layouts/DashboardLayout";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import ResetPassword from "./pages/resetPassword/ResetPassword";

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
      </Route>

      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<DashboardHome />} />
        <Route path="/dashboard/clients" element={<Clients />} />
        <Route path="/dashboard/settings" element={<Settings />} />
        <Route path="/dashboard/help" element={<Help />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
};

export default App;
