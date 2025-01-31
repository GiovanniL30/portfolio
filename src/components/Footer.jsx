import React, { useState } from "react";
import { socialLinks } from "../data";
import Button from "../components/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inputLength = 10;

const Footer = () => {
  const token = import.meta.env.VITE_TOKEN;
  const mailServer = import.meta.env.VITE_SERVER;

  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    email: false,
    subject: false,
    message: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const validateForm = () => {
    return /\S+@\S+\.\S+/.test(formData.email) && formData.subject.trim().length > 5 && formData.message.trim().length > inputLength;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fill out all fields correctly.");
      return;
    }
    setIsSubmitting(true);

    try {
      const response = await fetch(`${mailServer}/api/mail?token=${token}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          senderEmail: formData.email,
          message: formData.message,
          subject: formData.subject,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send the message");
      }

      await response.json();
      toast.success("Message sent successfully!", { theme: "dark" });

      setFormData({ email: "", subject: "", message: "" });
      setTouched({ email: false, subject: false, message: false });
    } catch (error) {
      toast.error("Error sending message. Please try again.", { theme: "dark" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="max-container mt-32 mb-10">
      <div className="px-5 flex flex-col lg:flex-row">
        <div className="flex flex-col gap-3 lg:w-1/2">
          <div className="flex flex-col gap-4">
            <h1 className="font-Bebas text-6xl text-white lg:text-7xl">Let's Connect</h1>
            <div className="flex flex-col gap-1">
              <p>
                Say hello at{" "}
                <a href="mailto:giovannileo100@gmail.com" target="_blank" className="border-b-primary border-b-2">
                  giovannileo100@gmail.com
                </a>
              </p>
              <p>
                For more info, here's my{" "}
                <a
                  href="https://drive.google.com/file/d/1A6jVahdAOiVD_3FaDcXa4f2xhzadtnC7/view?usp=sharing"
                  target="_blank"
                  className="border-b-primary border-b-2"
                >
                  resume
                </a>
              </p>
            </div>
            <div className="flex gap-7 items-center">
              {socialLinks.map((social, index) => (
                <div className="hover-opactity" key={index}>
                  <a href={social.link} target="_blank" rel="noopener noreferrer">
                    <img src={social.icon} alt={social.name} />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block mt-auto">
            <p>© 2025 Giovanni Leo</p>
          </div>
        </div>

        <Form
          formData={formData}
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleSubmit={handleSubmit}
          touched={touched}
          validateForm={validateForm}
          isSubmitting={isSubmitting}
        />

        <div className="lg:hidden mt-10">
          <p>© 2025 Giovanni Leo</p>
        </div>
      </div>
    </div>
  );
};

const Form = ({ formData, handleChange, handleBlur, handleSubmit, touched, validateForm, isSubmitting }) => {
  return (
    <form className="flex flex-col gap-5 mt-10 lg:w-1/2 lg:mt-0" onSubmit={handleSubmit}>
      <Input
        title="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        onBlur={handleBlur}
        isValid={/\S+@\S+\.\S+/.test(formData.email)}
        touched={touched.email}
        disabled={isSubmitting}
      />
      <Input
        title="Subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        onBlur={handleBlur}
        isValid={formData.subject.trim().length > 5}
        touched={touched.subject}
        disabled={isSubmitting}
      />
      <div className="flex flex-col gap-2">
        <p>Message</p>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`resize-none w-full h-32 p-2 rounded-md bg-neutral_dark_grey outline-none focus:outline-dark_grey ${
            touched.message && formData.message.trim().length <= inputLength ? "border-2 border-red-500" : ""
          }`}
          disabled={isSubmitting}
        />
        {touched.message && formData.message.trim().length <= inputLength && (
          <p className="text-red-500 text-sm">Message should be at least {inputLength} characters long.</p>
        )}
      </div>
      <Button
        buttonStyle="h-10 flex items-center max-w-[150px]"
        type="submit"
        text={isSubmitting ? "Submitting..." : "Submit"}
        textStyle={`text-dark_grey font-semibold uppercase ${!validateForm() && "opacity-50 cursor-not-allowed"}`}
        disabled={!validateForm() || isSubmitting}
      />
    </form>
  );
};

const Input = ({ title, type = "text", name, value, onChange, onBlur, isValid, touched, disabled }) => {
  return (
    <div className="flex flex-col gap-2">
      <p>{title}</p>
      <input
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`w-full h-10 rounded-md bg-neutral_dark_grey outline-none pl-3 focus:outline-dark_grey ${
          !isValid && touched ? "border-2 border-red-500" : ""
        }`}
        type={type}
        disabled={disabled}
      />
      {touched && !isValid && <p className="text-red-500 text-sm">Please enter a valid {title.toLowerCase()}.</p>}
    </div>
  );
};

export default Footer;
