import React from "react";
import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../../../data/index.js";

const Projects = () => {
  return (
    <div id="work" className="px-5 pt-[100px] max-container">
      <div className="w-full h-full">
        <div>
          <h1 className="font-Bebas text-white text-6xl md:text-7xl">Featured Projects</h1>
          <p className="mt-2">Here are some of the selected projects that showcase my passion for web development.</p>
        </div>
        <div className="flex flex-col gap-32 mt-32 ">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              year={project.year}
              tech={project.tech}
              github={project.github}
              live={project.live}
              cover={project.cover}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
