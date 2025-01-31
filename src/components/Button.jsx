import React from "react";
import { motion } from "framer-motion";

const Button = ({ text, type = "button", onClick, children, buttonStyle, textStyle }) => {
  return (
    <motion.button
      whileHover={{ scale: 0.95, opacity: 0.8 }}
      transition={{ duration: 0.2 }}
      type={type}
      onClick={onClick}
      className={`flex justify-center w-full bg-primary rounded-3xl ${buttonStyle}`}
    >
      <p className={`text-bg_color text-nowrap ${textStyle}`}>{text}</p>
      {children}
    </motion.button>
  );
};

export default Button;
