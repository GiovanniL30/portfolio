import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animation

const About = ({ children, containerStyle }) => {
  return (
    <div className={`px-5 max-container ${containerStyle}`}>
      <div className="w-full h-full flex flex-col gap-4 justify-center">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:self-start">
            <motion.h1
              className="font-Bebas text-6xl md:text-7xl text-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About Me
            </motion.h1>
          </div>
          <div className="flex flex-col gap-4 md:w-1/2">
            <motion.h1
              className="text-white text-xl md:text-3xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              I am a full stack web developer based in Baguio City.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              I am a passionate full stack web developer based in Baguio City, with a strong focus on building accessible and user-friendly
              applications. My skill set includes Node.js, ReactJS, Express, and MySQL, and I absolutely love programming. I’m always seeking to learn
              and grow, exploring new technologies and best practices. Outside of programming, I enjoy playing games and watching during my free time.
              I'm excited about solving real-world problems through code and continuously improving my skills.
            </motion.p>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
