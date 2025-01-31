import React from "react";
import { my_image, white_arrow, linkedin, github } from "../../../assets/index.js";
import Button from "../../../components/Button.jsx";
import IconButton from "../../../components/IconButton.jsx";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], [0, 1000]);

  return (
    <div className="px-5 h-screen w-full max-container">
      <div className="w-full h-full flex flex-col md:flex-row md:items-center md:justify-between md:gap-10">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="font-Bebas text-7xl text-white">
              HI, I AM <br /> Giovanni Leo.
            </h1>
            <p>Baguio City based full-stack developer passionate about building accessible and user-friendly websites.</p>
          </div>

          <div className="flex items-center gap-5 mt-6">
            <Button
              onClick={() => {
                document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
              }}
              text="CONTACT ME"
              buttonStyle="max-w-[220px] items-center gap-2 py-2 md:justify-between md:px-10"
              textStyle="font-semibold"
            >
              <div className="-mr-2 w-8 h-8 bg-bg_color flex justify-center items-center rounded-full">
                <img className="h-fit" src={white_arrow} alt="" />
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
          </div>
        </div>

        <div className="mt-16 md:mt-0">
          <motion.div className="bg-off_white w-full h-full rounded-md" style={{ y }}>
            <img className="object-cover max-w-full" src={my_image} alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
