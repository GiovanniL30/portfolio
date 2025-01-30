import React from "react";

const Button = ({ text, type = "button", onClick, children, buttonStyle, textStyle }) => {
  return (
    <button type={type} onClick={onClick} className={`flex justify-center w-full bg-primary rounded-3xl ${buttonStyle}`}>
      <p className={`text-bg_color ${textStyle}`}>{text}</p>
      {children}
    </button>
  );
};

export default Button;
