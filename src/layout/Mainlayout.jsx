import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Mainlayout = () => {
  return (
    <main>
      <Navbar />
      <div className="mt-[110px] md:mt-[0px]">
        <Outlet />
        <hr className="border-line_color w-full" />
        <Footer />
      </div>
    </main>
  );
};

export default Mainlayout;
