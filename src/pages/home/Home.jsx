import React from "react";
import Hero from "./sections/Hero";
import About from "../../components/About";
import Projects from "./sections/Projects";
import { Link } from "react-router-dom";
import PageTransition from "../../components/PageTransition";

const Home = () => {
  return (
    <PageTransition>
      <section className="w-full mt-[110px] md:mt-[0px]">
        <Hero />
        <hr className="border-line_color w-full" />
        <Projects />
        <hr className="border-line_color w-full mt-20" />
        <About containerStyle="h-screen">
          <Link to="/about" className="cursor-pointer">
            <div className="relative text-primary w-fit ">
              <p className="uppercase">More about me</p>
              <div className="w-full h-0.5 bg-primary"></div>
            </div>
          </Link>
        </About>
      </section>
    </PageTransition>
  );
};

export default Home;
