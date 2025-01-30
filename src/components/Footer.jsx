import React from "react";
import { socialLinks } from "../data";
import Button from "../components/Button";

const Footer = () => {
  return (
    <div
      id="contact"
      className="max-container mt-32 mb-10
  "
    >
      <div className="px-5 flex flex-col lg:flex-row ">
        <div className="flex flex-col gap-3 lg:w-1/2 ">
          <div className="flex flex-col gap-4">
            <h1 className="font-Bebas text-6xl text-white lg:text-7xl">let's Connect</h1>

            <div className="flex flex-col gap-1">
              <p>
                Say hello at{" "}
                <a className="relative" href="" target="_blank">
                  giovannileo100@gmail.com <div className="absolute bg-primary w-full h-[0.5px] left-0"></div>
                </a>
              </p>
              <p>
                For more info, here's my{" "}
                <a className="relative" href="" target="_blank">
                  resume <div className="absolute bg-primary w-full h-[0.5px] left-0"></div>
                </a>
              </p>
            </div>
            <div className="flex gap-7 items-center">
              {socialLinks.map((social, index) => (
                <div key={index}>
                  <a href={social.link} target="_blank">
                    <img src={social.icon} alt="" />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block mt-auto">
            <p>© 2025 Giovanni Leo</p>
          </div>
        </div>
        <Form />
        <div className="lg:hidden mt-10 ">
          <p>© 2025 Giovanni Leo</p>
        </div>
      </div>
    </div>
  );
};

const Form = () => {
  return (
    <form className="flex flex-col gap-5 mt-10 lg:w-1/2 lg:mt-0">
      <Input title="Name" />
      <Input title="Email" type="email" />
      <Input required={false} title="Subject" />
      <div className="flex flex-col gap-2">
        <p>Message</p>
        <textarea className="resize-none w-full h-32 p-2 rounded-md bg-neutral_dark_grey outline-none  focus:outline-dark_grey"></textarea>
      </div>
      <Button buttonStyle="h-10 flex items-center max-w-[150px]" type="submit" text="Submit" textStyle="text-dark_grey font-semibold uppercase" />
    </form>
  );
};

const Input = ({ title, type = "text", required = true }) => {
  return (
    <div className="flex flex-col gap-2">
      <p>{title}</p>
      <input required={required} className="w-full h-10 rounded-md bg-neutral_dark_grey outline-none pl-3 focus:outline-dark_grey" type={type} />
    </div>
  );
};

export default Footer;
