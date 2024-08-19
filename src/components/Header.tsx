import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <div className="text-lg font-bold">Logo</div>
      <nav className="space-x-4">
        <Link to="/" className="text-lg font-semibold">
          Home
        </Link>
        <Link to="/services" className="text-lg font-semibold">
          Services
        </Link>
        <Link to="/products" className="text-lg font-semibold">
          Products
        </Link>
        <Link to="/register" className="text-lg font-semibold">
          Register
        </Link>
      </nav>
    </header>
  );
};

export default Header;
