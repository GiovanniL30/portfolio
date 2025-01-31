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
    <nav className="z-50 w-full fixed top-0 bg-bg_color h-[80px] px-5">
      <div className="max-container flex justify-between items-center">
        <div className="w-full">
          <Link to="/">
            <p className="font-bold text-2xl font-Bebas tracking-wider">Giovanni Leo</p>
          </Link>
        </div>

        <DesktopNav location={location} />

        <Hamburger toggleNav={toggleNav} />
        <MobileNav isOpen={open} toggleNav={toggleNav} location={location} />
      </div>
    </nav>
  );
};

const DesktopNav = ({ location }) => {
  return (
    <ul className="hidden md:flex justify-end gap-5">
      {location.pathname === "/" ? (
        <>
          <NavItemScroll to="work" label="Work" />
          <NavItemScroll to="contact" label="Contact" />
        </>
      ) : (
        <NavItemLink to="/" label="Home" />
      )}
      <NavItemLink to="/about" label="About" />
    </ul>
  );
};

const MobileNav = ({ isOpen, toggleNav, location }) => {
  return (
    <div
      className={`z-50 fixed top-0 right-0 w-3/4 h-screen bg-bg_color transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-500 ease-in-out md:hidden flex flex-col justify-center items-center`}
    >
      <button className="absolute top-5 right-5 text-white" onClick={toggleNav}>
        ✖
      </button>

      <ul className="flex flex-col gap-5 text-center">
        {location.pathname === "/" ? (
          <>
            <NavItemScroll to="work" label="Work" onClick={toggleNav} />
            <NavItemScroll to="contact" label="Contact" onClick={toggleNav} />
          </>
        ) : (
          <NavItemLink to="/" label="Home" onClick={toggleNav} />
        )}
        <NavItemLink to="/about" label="About" onClick={toggleNav} />
      </ul>
    </div>
  );
};

const Hamburger = ({ toggleNav }) => {
  return (
    <button onClick={toggleNav} className="md:hidden z-50">
      <div className="w-8 h-5 flex flex-col items-center justify-center gap-2">
        <span className="bg-off_white w-full h-[2px] transition-all duration-300"></span>
        <span className="bg-off_white w-full h-[2px] transition-all duration-300"></span>
        <span className="bg-off_white w-full h-[2px] transition-all duration-300"></span>
      </div>
    </button>
  );
};

const NavItemLink = ({ to, label, onClick }) => (
  <li>
    <Link to={to} onClick={onClick}>
      <p>{label}</p>
    </Link>
  </li>
);

const NavItemScroll = ({ to, label, onClick }) => (
  <li>
    <ScrollLink to={to} smooth={true} duration={500} onClick={onClick}>
      <p>{label}</p>
    </ScrollLink>
  </li>
);

export default Navbar;
