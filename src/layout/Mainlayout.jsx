import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Mainlayout = () => {
  return (
    <main>
      <Navbar />
      <div>
        <Outlet />
        <hr className="border-line_color w-full" />
        <Footer />
      </div>
    </main>
  );
};

export default Mainlayout;
