import React from "react";
import Login from "./components/login/Login";
import { Routes, Route } from "react-router-dom";
import ResetPassword from "./components/resetPassword/ResetPassword";
import Register from "./components/register/Register";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
};

export default App;
