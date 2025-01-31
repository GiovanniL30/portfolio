import React from "react";
import About from "../../components/About";
import Button from "../../components/Button";
import IconButton from "../../components/IconButton";
import { download, linkedin, github } from "../../assets";
import Capabilities from "./section/Capabilities";
import Experience from "./section/Experience";
import PageTransition from "../../components/PageTransition";
import Line from "../../components/Line";
import { motion } from "framer-motion";
import ImageParalax from "./components/ImageParalax";

const AboutPage = () => {
  return (
    <PageTransition>
      <section className="w-full mt-[110px] pb-10">
        <About containerStyle="mt-32 mb-32">
          <motion.div
            className="flex flex-wrap items-center gap-5 mt-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ amount: 0.2 }}
          >
            <Button
              onClick={() => (window.location.href = "https://drive.google.com/uc?export=download&id=1A6jVahdAOiVD_3FaDcXa4f2xhzadtnC7")}
              text="DOWNLOAD RESUME"
              buttonStyle=" px-3 max-w-fit  items-center gap-2 py-2 md:justify-between md:px-5"
              textStyle="font-semibold"
            >
              <div className="-mr-2 w-8 h-8 bg-bg_color flex justify-center items-center rounded-full">
                <img className="h-fit" src={download} alt="" />
              </div>
            </Button>
            <IconButton buttonStyle="h-12 w-12">
              <a href="https://www.linkedin.com/in/giovanni-leo-4774ab255/" target="_blank">
                <img src={linkedin} alt="" />
              </a>
            </IconButton>
            <IconButton buttonStyle="h-12 w-12">
              <a href="https://github.com/GiovanniL30" target="_blank">
                <img src={github} alt="" />
              </a>
            </IconButton>
          </motion.div>
        </About>
        <ImageParalax />
        <Capabilities />
        <Line style="mt-10" />
        <Experience />
      </section>
    </PageTransition>
  );
};

export default AboutPage;
