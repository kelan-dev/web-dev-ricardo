import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import icon_html from "@/public/logos/logo_html.svg";
import icon_css from "@/public/logos/logo_css.svg";
import icon_javascript from "@/public/logos/logo_javascript.png";
import icon_typescript from "@/public/logos/logo_typescript.svg";
import icon_react from "@/public/logos/logo_react.svg";
import icon_axios from "@/public/logos/logo_axios.png";
import icon_react_query from "@/public/logos/logo_react_query.svg";
import icon_react_router from "@/public/logos/logo_react_router.svg";
import icon_vite from "@/public/logos/logo_vite.svg";
import icon_zustand from "@/public/logos/logo_zustand.png";
import icon_nextjs from "@/public/logos/logo_nextjs.svg";
import icon_tailwind from "@/public/logos/logo_tailwind.svg";
import icon_git from "@/public/logos/logo_git.svg";
import icon_framer_motion from "@/public/logos/logo_framer_motion.svg";
import icon_solidity from "@/public/logos/logo_solidity.svg";

export const navLinkData = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experienceData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  {
    name: "HTML",
    icon: icon_html,
  },
  {
    name: "CSS",
    icon: icon_css,
  },
  {
    name: "JavaScript",
    icon: icon_javascript,
  },
  {
    name: "TypeScript",
    icon: icon_typescript,
  },
  {
    name: "React",
    icon: icon_react,
  },
  {
    name: "Vite",
    icon: icon_vite,
  },
  {
    name: "Next.js",
    icon: icon_nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: icon_tailwind,
  },
  {
    name: "Axios",
    icon: icon_axios,
  },
  {
    name: "React Query",
    icon: icon_react_query,
  },
  {
    name: "React Router DOM",
    icon: icon_react_router,
  },
  {
    name: "Zustand",
    icon: icon_zustand,
  },
  {
    name: "Framer Motion",
    icon: icon_framer_motion,
  },
  {
    name: "Solidity",
    icon: icon_solidity,
  },
  {
    name: "Git",
    icon: icon_git,
  },
] as const;
