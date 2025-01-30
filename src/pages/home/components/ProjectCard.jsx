import React from "react";
import { github as github_img, primary_arrow } from "../../../assets";

const ProjectCard = ({ title, description, year, tech, github, live, cover, tags }) => {
  return (
    <div className="flex flex-col gap-5 md:flex-row items-center">
      <ProjectImage cover={cover} tags={tags} />
      <ProjectInformation title={title} description={description} year={year} tech={tech} github={github} live={live} />
    </div>
  );
};

const ProjectImage = ({ cover, tags }) => {
  return (
    <div className="relative bg-dark_grey w-full h-full py-20 lg:py-32 px-5 rounded-lg md:w-1/2">
      <div className="rounded-lg w-full h-full">
        <img className="object-cover rounded-lg" src={cover} alt="" />
      </div>
      <div className="absolute top-5 left-5  flex gap-2 items-center flex-wrap">
        {tags.map((tag, index) => (
          <div className="bg-bg_color text-white rounded-full  text-xs py-2 px-4" key={index}>
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};
const ProjectInformation = ({ title, description, year, tech, github, live }) => {
  return (
    <div className="flex flex-col gap-5 md:w-1/2 lg:gap-8">
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
        {live && (
          <a className="flex relative gap-2 items-center" target="_blank" href={live}>
            <p className="text-nowrap text-primary uppercase">Live Demo</p>
            <img className="max-w-full" src={primary_arrow} alt="" />
            <div className="absolute  -bottom-2 left-0 right-0 bg-primary h-0.5"></div>
          </a>
        )}
        <a className="flex relative gap-2 items-center" target="_blank" href={github}>
          <p className="text-nowrap text-primary uppercase">See on Github</p>
          <img className="max-w-full" src={github_img} alt="" />
          <div className="absolute -bottom-2 left-0 right-0 bg-primary h-0.5"></div>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
