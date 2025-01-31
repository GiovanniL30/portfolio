import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Mainlayout from "./layout/Mainlayout";
import AboutPage from "./pages/about/AboutPage";
import SmoothScrolling from "./components/SmoothScrooling";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <SmoothScrolling>
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainlayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SmoothScrolling>
  );
};

export default App;
