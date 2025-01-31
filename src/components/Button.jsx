const Button = ({ text, type = "button", onClick, children, buttonStyle, textStyle, disabled = false }) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`flex justify-center w-full bg-primary rounded-3xl cursor-pointer hover:opacity-50 duration-500 ease-linear ${buttonStyle}`}
    >
      <p className={`text-bg_color text-nowrap ${textStyle}`}>{text}</p>
      {children}
    </button>
  );
};

export default Button;
