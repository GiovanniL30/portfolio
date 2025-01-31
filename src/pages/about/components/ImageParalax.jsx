import React, { useRef } from "react";
import { about_image } from "../../../assets";
import { motion, useScroll, useTransform } from "framer-motion";

const ImageParalax = () => {
  return (
    <div
      style={{
        paddingLeft: 12,
        paddingRight: 12,
      }}
    >
      <div className="relative h-[100vh]">
        <StickyImage imgUrl={about_image} />
      </div>
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.7, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        scale,
        opacity,
      }}
      ref={targetRef}
      className="sticky top-0 z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

export default ImageParalax;
