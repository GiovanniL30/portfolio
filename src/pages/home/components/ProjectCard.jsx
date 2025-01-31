import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { github as github_img, primary_arrow } from "../../../assets";

const ProjectCard = ({ title, description, year, tech, github, live, cover, tags }) => {
  return (
    <div className="flex flex-col md:gap-5 md:flex-row items-center">
      <ProjectImage cover={cover} tags={tags} />
      <ProjectInformation title={title} description={description} year={year} tech={tech} github={github} live={live} />
    </div>
  );
};

const ProjectImage = ({ cover, tags }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  return (
    <div className="relative bg-dark_grey w-full h-full py-20 lg:py-32 px-5 rounded-lg md:w-1/2">
      <motion.div style={{ y }} className="rounded-lg w-full h-full">
        <img className="object-cover rounded-lg" src={cover} alt="" />
      </motion.div>
      <div className="absolute top-5 left-5 flex gap-2 items-center flex-wrap">
        {tags.map((tag, index) => (
          <div className="bg-bg_color text-white rounded-full text-xs py-2 px-4" key={index}>
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectInformation = ({ title, description, year, tech, github, live }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <motion.div className="flex flex-col gap-5 md:w-1/2 lg:gap-8" style={{ y }}>
      <div className="flex flex-col gap-2">
        <h1 className="text-white text-3xl">{title}</h1>
        <p>{description}</p>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="uppercase text-white text-md">Project Info</h2>
        <hr className="h-[0.5px] border-off_white border-t" />
        <div className="flex w-full justify-between items-center">
          <p className="text-white">Year</p>
          <p>{year}</p>
        </div>
        <hr className="h-[0.5px] border-off_white border-t" />
        <div className="flex w-full justify-between items-center">
          <p className="text-white">Tech</p>
          <p>{tech.join(", ")}</p>
        </div>
        <hr className="h-[0.5px] border-off_white border-t" />
      </div>
      <div className="flex gap-3 md:mt-10 md:gap-7">
        {live && <ProjectLink image={primary_arrow} link={live} text="Live Demo" />}
        <ProjectLink image={github_img} link={github} text="See on Github" />
      </div>
    </motion.div>
  );
};

const ProjectLink = ({ image, link, text }) => {
  return (
    <a className="flex relative gap-2 items-center" target="_blank" href={link}>
      <p className="text-nowrap text-primary uppercase">{text}</p>
      <img className="max-w-full" src={image} alt="" />
      <div className="absolute -bottom-2 left-0 right-0 bg-primary h-0.5"></div>
    </a>
  );
};

export default ProjectCard;
