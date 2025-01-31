import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../../../data/index.js";

const Projects = () => {
  return (
    <div id="work" className="px-5 pt-[100px] max-container">
      <div className="w-full h-full">
        <div>
          <motion.h1 className="font-Bebas text-white text-6xl md:text-7xl">Featured Projects</motion.h1>

          <motion.p
            className="mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileOutOfView={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            Here are some of the selected projects that showcase my passion for web development.
          </motion.p>
        </div>

        <div className="flex flex-col gap-32 mt-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileOutOfView={{ opacity: 0, y: 100 }}
              transition={{ duration: 1.5 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                year={project.year}
                tech={project.tech}
                github={project.github}
                live={project.live}
                cover={project.cover}
                tags={project.tags}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
