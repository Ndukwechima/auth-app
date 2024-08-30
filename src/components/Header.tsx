import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-700  text-white dark:bg-gray-800 dark:text-white py-4 px-8 flex justify-between items-center shadow-md ">
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
      <ThemeToggle />
    </header>
  );
};

export default Header;
