import React from "react";
import { experience } from "../../../data/index.js";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="max-container mt-10">
      <div className="px-5">
        <div className="flex flex-col md:flex-row gap-5">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white font-Bebas text-6xl md:text-7xl md:w-1/2"
          >
            My Experience
          </motion.h1>
          <div className="md:w-1/2">
            {experience.map((exp, index) => (
              <ExperienceList key={index}>
                <ExperienceItem title={exp.title} year={exp.year} location={exp.location} description={exp.description} />
              </ExperienceList>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperienceList = ({ children }) => {
  return <div className="flex flex-col">{children}</div>;
};

const ExperienceItem = ({ title, year, location, description }) => {
  return (
    <motion.div className="flex flex-col gap-3" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="flex justify-between">
        <h1 className="text-xl text-white">{title}</h1>
        <p>{year}</p>
      </div>
      <p className="text-primary">{location}</p>
      <p>{description}</p>
    </motion.div>
  );
};

export default Experience;
