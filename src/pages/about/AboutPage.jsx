import React from "react";
import About from "../../components/About";
import Button from "../../components/Button";
import IconButton from "../../components/IconButton";
import MyImage from "./components/MyImage";
import { download, linkedin, github } from "../../assets";
import Capabilities from "./section/Capabilities";
import Experience from "./section/Experience";
import PageTransition from "../../components/PageTransition";

const AboutPage = () => {
  return (
    <PageTransition>
      <section className="w-full mt-[110px] pb-10">
        <About>
          <div className="flex flex-wrap items-center gap-5 mt-6">
            <Button
              text="DOWNLOAD RESUME"
              buttonStyle=" px-3 max-w-fit  items-center gap-2 py-2 md:justify-between md:px-5"
              textStyle="font-semibold"
            >
              <div className="-mr-2 w-8 h-8 bg-bg_color flex justify-center items-center rounded-full">
                <img className="h-fit" src={download} alt="" />
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
        </About>
        <MyImage />
        <Capabilities />
        <hr className="border-line_color w-full my-20" />
        <Experience />
      </section>
    </PageTransition>
  );
};

export default AboutPage;
