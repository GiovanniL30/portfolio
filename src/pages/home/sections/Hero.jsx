import React from "react";
import { my_image, white_arrow, linkedin, github } from "../../../assets/index.js";
import Button from "../../../components/Button.jsx";
import IconButton from "../../../components/IconButton.jsx";

const Hero = () => {
  return (
    <div className="px-5 h-screen w-full">
      <div className="w-full h-full flex flex-col md:flex-row md:items-center md:justify-center md:gap-10 ">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="font-Bebas text-7xl text-white">
              HI, I AM <br /> Giovanni Leo.
            </h1>
            <p>Baguio City based full-stack developer passionate about building accessible and user friendly websites.</p>
          </div>

          <div className="flex items-center gap-5 mt-6">
            <Button
              text="CONTACT ME"
              buttonStyle="max-w-[220px] w-fit px-4 items-center gap-2 py-2 md:justify-between md:px-10"
              textStyle="font-semibold"
            >
              <div className="-mr-2 w-8 h-8 bg-bg_color flex justify-center items-center rounded-full">
                <img className="h-fit" src={white_arrow} alt="" />
              </div>
            </Button>
            <IconButton buttonStyle="h-12 w-12">
              <a href="" target="_blank">
                <img src={linkedin} alt="" />
              </a>
            </IconButton>
            <IconButton buttonStyle="h-12 w-12">
              <a href="" target="_blank">
                <img src={github} alt="" />
              </a>
            </IconButton>
          </div>
        </div>
        <div className="mt-16 md:mt-0">
          <div className="bg-off_white w-full h-full rounded-md">
            <img src={my_image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
