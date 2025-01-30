import React from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";

const Home = () => {
  return (
    <section className="w-full">
      <Hero />
      <hr className="border-line_color w-full" />
      <Projects />
      <hr className="border-line_color w-full" />
      <About />
    </section>
  );
};

export default Home;
