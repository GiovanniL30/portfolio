import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const toggleNav = () => {
    setOpen((prev) => !prev);
  };

  return (
    <nav className="z-50 w-full fixed top-0 bg-bg_color h-[80px] px-5 overflow-hidden ">
      <div className="max-container flex justify-between  items-center">
        <div className="w-full">
          <Link to="/">
            <p className="font-bold text-2xl font-Bebas tracking-wider">Giovanni Leo</p>
          </Link>
        </div>
        <ul
          className={`w-full flex justify-end ${
            open ? "translate-x-0" : "translate-x-[200%]"
          } md:translate-x-0 md:gap-10 transition-all duration-500 ease-linear`}
        >
          {location.pathname === "/" ? (
            <>
              <li>
                <ScrollLink to="work" smooth={true} duration={500}>
                  <p>Work</p>
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="contact" smooth={true} duration={500}>
                  <p>Contact</p>
                </ScrollLink>
              </li>
            </>
          ) : (
            <li>
              <Link to="/">
                <p>Home</p>
              </Link>
            </li>
          )}
          <li>
            <Link to="/about">
              <p>About</p>
            </Link>
          </li>
        </ul>
        <Hamburger toggleNav={toggleNav} />
      </div>
    </nav>
  );
};

const Hamburger = ({ toggleNav }) => {
  return (
    <button onClick={toggleNav}>
      <div className="md:hidden w-8 h-5 flex flex-col items-center justify-center gap-2">
        <span className="bg-off_white w-full h-[0.5px]"></span>
        <span className="bg-off_white w-full h-[0.5px]"></span>
        <span className="bg-off_white w-full h-[0.5px]"></span>
      </div>
    </button>
  );
};

export default Navbar;
