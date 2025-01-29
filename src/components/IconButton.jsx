import React from "react";

const IconButton = ({ children, buttonStyle }) => {
  return <button className={`w-10 h-10 rounded-full flex items-center justify-center bg-neutral_dark_grey ${buttonStyle}`}>{children}</button>;
};

export default IconButton;
