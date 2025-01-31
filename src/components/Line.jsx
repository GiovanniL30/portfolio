import React from "react";
import { motion } from "framer-motion";

const Line = ({ style }) => {
  return (
    <motion.hr className={`border-line_color w-full ${style}`} initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 1 }} />
  );
};

export default Line;
