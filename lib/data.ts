import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { IoRocketOutline } from "react-icons/io5";

export const links = [
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
    name: "Contributions",
    hash: "#contributions",
  },
  {
    name: "Contact",
    hash: "#contact",
  }
] as const;

export const experiencesData = [
  {
    title: "Secondary Technical College",
    location: "Salzburg, AT",
    description:
      "Specialization on Programming and Electronics. Between my studies I got to work at several companies but most notably SBS with which a recurring partnership started to take form.",
    icon: React.createElement(LuGraduationCap),
    date: "2010 - 2015",
  },
  {
    title: "Fullstack Developer",
    location: "SBS Software GmbH",
    description:
      "I initially worked as a full-stack native android developer which over time transitioned to Progressive Web App development with Firmware interaction.",
    icon: React.createElement(CgWorkAlt),
    date: "2014 - 2018",
  },
  {
    title: "B.Sc. at University",
    location: "Linz, AT",
    description:
      "Specialization on Mobile (Responsive) Development and Business Management. During my studies I was often involved in projects, one of which turned into a company.",
    icon: React.createElement(LuGraduationCap),
    date: "2015 - 2018",
  },
  {
    title: "Startup Founder",
    location: "Kennstwen GmbH",
    description:
      "Kennstwen is a B2B2C platform that connects craftsman directly to their customers and vice versa. Amongst other things used by cooperations to support tenants with craftsmat referencing.",
    icon: React.createElement(IoRocketOutline),
    date: "2017 - 2019",
  },
  {
    title: "M.Sc. at University",
    location: "Linz, AT",
    description:
      "Specialization on Mobile (Responsive) Development and Business Management. Aborted shortly before graduation with a perfect score of 1.0 to persue business projects.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2020",
  },
  {
    title: "Head of Data Science & SEO",
    location: "LightCyde GmbH",
    description:
      "As Head of Data Science & SEO I not only leverage huge amounts of data to encourage customer innovation, but also synergize this data to hyperscale organic traffic and other KPIs via data driven SEO.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - present",
  }
] as const;

export const projectsData = [
  {
    title: "GGDL",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "AVC",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Anz",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Websites",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  }
] as const;

export const contributionsData = [
  {
    title: "ionic header parallax",
    description:
      "A smooth parallax effect for headers, transforming a cover photo into a toolbar as users scroll.",
    type: "code",
    url: 'https://github.com/RaschidJFR/ionic-header-parallax/pull/29'
  },
  {
    title: "capacitor video recorder",
    description:
      "Native video recording with camera and microphone access (native iOS and Android).",
    type: "code",
    url: 'https://github.com/TeamMaestro/capacitor-video-recorder/pull/30'
  },
  {
    title: "xlsx with styles",
    description:
      "Custom cell styles and embedding images in Excel sheets via JavaScript.",
    type: "code",
    url: 'https://github.com/sleitor/xlsx-with-styles/pull/3'
  },
  {
    title: "angular qr scanner",
    description:
      "QR code scanning directly from a webcam and rendering the captured image onto a 2D canvas for processing.",
    type: "code",
    url: 'https://github.com/goergch/angular2-qrscanner/pull/44'
  },
  {
    title: "LM Studio",
    description:
      "Reporting and tracking issues related to the LM Studio desktop application",
    type: "issue",
    url: 'https://github.com/lmstudio-ai/lmstudio-bug-tracker/issues/846'
  },
  {
    title: "codename goose",
    description:
      "An open-source AI agent that automates coding, debugging, and deployment using any LLM.",
    type: "issue",
    url: 'https://github.com/block/goose/issues/4397'
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;