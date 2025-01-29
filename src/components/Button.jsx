import React from "react";

const Button = ({ text, onClick, children, buttonStyle, textStyle }) => {
  return (
    <button onClick={onClick} className={`flex justify-center w-full bg-primary rounded-3xl ${buttonStyle}`}>
      <p className={`text-bg_color ${textStyle}`}>{text}</p>
      {children}
    </button>
  );
};

export default Button;
