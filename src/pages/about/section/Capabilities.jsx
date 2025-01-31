import React from "react";
import { motion } from "framer-motion";
import { capabilities } from "../../../data/index";

const Capabilities = () => {
  return (
    <div className="max-container pt-[110px] relative">
      <div className="px-5">
        <div className="flex flex-col md:flex-row gap-5 relative">
          <motion.h1
            className="font-Bebas text-6xl md:text-7xl text-white md:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Capabilities
          </motion.h1>

          <motion.div className="md:w-1/2 flex flex-col gap-10 mt-5 md:mt-0">
            {capabilities.map((capability, index) => (
              <SkillContainer key={index} title={capability.title}>
                {capability.skills.map((skill, skillIndex) => (
                  <SkillTag key={skillIndex} text={skill} />
                ))}
              </SkillContainer>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const SkillContainer = ({ title, children }) => {
  return (
    <motion.div className="flex flex-col" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <h1 className="text-white text-xl">{title}</h1>
      <div className="flex flex-wrap gap-3 mt-5">{children}</div>
    </motion.div>
  );
};

const SkillTag = ({ text }) => {
  return (
    <motion.div
      className="flex items-center justify-end border-[0.5px] border-neutral_dark_grey py-3 px-5 rounded-full"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <p>{text}</p>
    </motion.div>
  );
};

export default Capabilities;
