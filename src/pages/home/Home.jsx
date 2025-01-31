import React from "react";
import Hero from "./sections/Hero";
import About from "../../components/About";
import Projects from "./sections/Projects";
import { Link } from "react-router-dom";
import PageTransition from "../../components/PageTransition";
import { motion } from "framer-motion";
import Line from "../../components/Line";

const Home = () => {
  return (
    <PageTransition>
      <section className="w-full mt-[110px] md:mt-[0px]">
        <Hero />
        <Line />
        <Projects />
        <Line style="mt-20" />
        <About containerStyle="h-screen">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            <Link to="/about" className="cursor-pointer hover:opacity-50 duration-500 ease-linear">
              <div className="relative text-primary w-fit">
                <p className="uppercase">More about me</p>
                <div className="w-full h-0.5 bg-primary"></div>
              </div>
            </Link>
          </motion.div>
        </About>
      </section>
    </PageTransition>
  );
};

export default Home;
