import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Mainlayout from "./layout/Mainlayout";
import About from "./pages/about/About";

const App = () => {
  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
      window.scrollBy({
        top: event.deltaY * 3,
        behavior: "smooth",
      });
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
