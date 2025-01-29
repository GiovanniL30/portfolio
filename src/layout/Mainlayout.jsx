import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Mainlayout = () => {
  return (
    <main className="py-5 max-w-[1800px] mx-auto">
      <Navbar />
      <div className="mt-[110px] md:mt-[0px]">
        <Outlet />
        <Footer />
      </div>
    </main>
  );
};

export default Mainlayout;
