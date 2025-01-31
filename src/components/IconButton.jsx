import React from "react";
import { motion } from "framer-motion";

const IconButton = ({ children, buttonStyle }) => {
  return (
    <motion.button
      className={`w-10 h-10 rounded-full flex items-center justify-center bg-neutral_dark_grey ${buttonStyle}`}
      whileHover={{ scale: 0.95, opacity: 0.8 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.button>
  );
};

export default IconButton;
