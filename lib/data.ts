import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { IoRocketOutline } from "react-icons/io5";

import ggdlImg from "@/public/ggdl.png";
import avcImg from "@/public/avc.png";
import anzImg from "@/public/anz.png";
import websitesImg from "@/public/websites.png";

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
    description: "Specialization on Programming and Electronics. Between my studies I got to work at several companies but most notably SBS with which a recurring partnership started to take form.",
    icon: React.createElement(LuGraduationCap),
    date: "2010 - 2015",
  },
  {
    title: "Fullstack Developer",
    location: "SBS Software GmbH",
    description: "I worked with SBS on multiple native Android, aswell as Progressive Web App projects over the years including full-time and contract engagements.",
    icon: React.createElement(CgWorkAlt),
    date: "2014 - 2018",
  },
  {
    title: "B.Sc. at University",
    location: "Linz, AT",
    description: "Specialization on Mobile (Responsive) Development and Business Management. During my studies I was often involved in projects, one of which turned into a company.",
    icon: React.createElement(LuGraduationCap),
    date: "2015 - 2018",
  },
  {
    title: "Startup Founder",
    location: "Kennstwen GmbH",
    description: "Kennstwen is a B2B2C platform that connects craftsman directly to their customers and via cooperative directive. After three years I executed a full exit divesting my ownership stake.",
    icon: React.createElement(IoRocketOutline),
    date: "2017 - 2019",
  },
  {
    title: "M.Sc. at University",
    location: "Linz, AT",
    description: "Specialization on Mobile (Responsive) Development and Business Management. Aborted shortly before graduation with a perfect score of 1.0 to persue business projects.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2020",
  },
  {
    title: "Head of Data Science & SEO",
    location: "LightCyde GmbH",
    description: "As Head of Data Science & SEO I not only leverage huge amounts of data to encourage customer innovation, but also synergize this data to hyperscale organic traffic and other KPIs via data driven SEO.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - present",
  }
] as const;

export const projectsData = [
  {
    title: "GGDL Accounting",
    description:
      "Automated accounting solution specifically targeted towards, but not limited to property owners. Learns recurring entries, tax rates and preferred structures.",
    tags: ["AI", "Angular", "Firebase", "PWA", "Auth", "DB", "XLSX"],
    imageUrl: ggdlImg,
  },
  {
    title: "Anz Live Wallpaper",
    description:
      "Live Android lockscreen where you can keep you own pet ant colony. Feed them and watch them forage, dig chambers, fend off intruders and grow in numbers.",
    tags: ["Android", "Godot", "WASM", "Physics", "Shader", "3D"],
    imageUrl: anzImg,
  },
  {
    title: "AVC Social",
    description:
      "Cross-Platform social media application focused on group-based interactions like shared custom data tracking, event system and birthday reminders.",
    tags: ["Angular", "Firebase", "FaaS", "PWA", "Push", "Auth"],
    imageUrl: avcImg,
  },
  {
    title: "Websites",
    description:
      "Custom websites or progressive web apps such as this one for uses as portfolio, landing pages or blogs via a multitude of tech stacks for front- and backend.",
    tags: ["React", "Next.js", "Vercel", "Angular", "Firebase", "SSR"],
    imageUrl: websitesImg,
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

export const accoladesData = [
  {
    title: "Papers",
    accolades: [
      {
        prefix: "white paper",
        title: "Sitechecker SEO",
        url: "https://sitechecker.pro/case-studies/lightcyde-agency/"
      },
      {
        prefix: "thesis paper",
        title: "Intelligent Sleep Systems",
        url: "/soisl.pdf"
      }
    ]
  },
  {
    title: "Certs",
    accolades: [
      {
        prefix: "Coding Contest",
        title: "2nd Place",
        url: "https://register.codingcontest.org/"
      },
      {
        prefix: "Google Academy",
        title: "Google Analytics",
        url: "https://support.google.com/analytics/answer/15440208?sjid=10055628440652775658-EU"
      },
      {
        prefix: "Austrian Governemnt",
        title: "R&D Talent",
        url: "https://www.bmimi.gv.at/"
      }
    ]
  }
] as const;

export const skillsData = [
  [
    "AI",
    "LLM",
    "Git",
    "Docker"
  ],
  ["HTML",
    "CSS",
    "React",
    "Next",
    "PWA",
    "SSR",
    "Tailwind",
    "Node",
  ],
  [
    "Firebase",
    "Pipedream",
    "Vercel",
    "Selfhost",
    "DNS",
    "Proxy",
    "Auth",
    "Push",
    "FaaS",
  ],
  [
    "Android",
    "iOS",
    "Mac",
    "Linux"
  ],
  [
    "JS",
    "TS",
    "CSS",
    "SCSS",
    "GDScript",
    "C",
    "C++",
    "Java",
    "Kotlin",
    "Python",
    "Swift",
    "Lua"
  ]
] as const;