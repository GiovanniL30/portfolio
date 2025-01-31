import { aeiluminate_ss, furniro_ss, personal_ss, techwonder_ss, github, instagram, linkedin } from "../assets/index.js";

export const projects = [
  {
    title: "Personal Protfolio",
    description:
      "This is  my personal website portfolio, where I showcase my skills and capabilities as a developer. This is the website you are visiting now, designed to highlight my passion for programming and the projects I've worked on. Here, you’ll find a collection of my work, from front-end development with ReactJS to back-end development with Node.js and MySQL. I'm continuously learning and evolving as a developer, and this portfolio reflects my growth and dedication to building high-quality, accessible web applications.",
    year: 2025,
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/GiovanniL30/porfolio",
    live: null,
    cover: personal_ss,
    tags: ["Portfolio"],
  },
  {
    title: "Social Media Website",
    description:
      "Social Media Website for our Website Technologies subject . This platform is designed for school alumni to reconnect and engage with one another. Alumni can post photos, create albums, and share memories, as well as send private messages to stay in touch. It also allows users to post and discover events, such as reunions or social gatherings, and share job listings to support career development within the alumni network.",
    year: 2024,
    tech: ["Node JS", "React JS", "Express JS", "MySql"],
    github: "https://github.com/GiovanniL30/aeiluminate-alumni",
    live: "https://aeiluminate.onrender.com",
    cover: aeiluminate_ss,
    tags: ["School Project"],
  },
  {
    title: "E-commerce Website",
    description:
      "Implemented the Figma design found on community page and added simple functionalities like viewing products , adding products to cart, etc...",
    year: 2023,
    tech: ["Node JS", "React", "Express JS"],
    github: "https://github.com/GiovanniL30/furniro-ecommerce",
    live: null,
    cover: furniro_ss,
    tags: ["Challenge", "Personal Project"],
  },
  {
    title: "Tech Wonder E-commerce",
    description: "Simple E-commerce website for viewing and adding items to the cart",
    year: 2023,
    tech: ["React"],
    github: "https://github.com/GiovanniL30/TechWonder",
    live: "https://techwonder.onrender.com",
    cover: techwonder_ss,
    tags: ["Challenge", "Personal Project"],
  },
];

export const experience = [
  {
    title: "BSIT Student",
    location: "Saint Louis University - Baguio",
    description: "I am currently a regular 3rd-year BSIT student and a self-taught programmer who began learning programming during my first years.",
    year: "2023 - Present",
  },
];

export const socialLinks = [
  {
    link: "www.linkedin.com/in/giovanni-leo-4774ab255",
    icon: linkedin,
  },
  {
    link: "https://github.com/GiovanniL30",
    icon: github,
  },
  {
    link: "https://www.instagram.com/g.leo__/",
    icon: instagram,
  },
];

export const capabilities = [
  {
    title: "Frontend Development",
    skills: ["React JS", "HTML", "CSS", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend Development",
    skills: ["MySQL", "Node JS", "Express JS"],
  },
  {
    title: "Tools and Services",
    skills: ["Supabase", "App Write", "VsCode", "Git", "Github", "Figma", "Postman", "Vite"],
  },
  {
    title: "Programming Languages",
    skills: ["Python", "Javascript", "Java", "TypeScript"],
  },
];
