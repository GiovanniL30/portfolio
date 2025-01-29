import React from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";

const Home = () => {
  return (
    <section>
      <Hero />
      <hr className="bg-line_color" />
      <Projects />
      <About />
    </section>
  );
};

export default Home;
