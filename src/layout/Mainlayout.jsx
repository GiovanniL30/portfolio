import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Line from "../components/Line";

const Mainlayout = () => {
  return (
    <main>
      <Navbar />
      <div>
        <Outlet />
        <Line />
        <Footer />
      </div>
    </main>
  );
};

export default Mainlayout;
