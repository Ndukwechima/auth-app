import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  //   const location = useLocation();

  return (
    <>
      {/* Hide Header and Footer on Register, Login, and Reset Password pages */}
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
