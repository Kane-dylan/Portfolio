import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { PortfolioIcon } from "@/components/icons/PortfolioIcon";

export const RESUME_DATA = {
  name: "Kiran Das",
  initials: "KD",
  location: "Tarakeswar, Hooghly, West Bengal",
  locationLink: "https://maps.app.goo.gl/QtgJmVtkNcqkjMVr9",
  about:
    "I am a junior frontend developer passionate about building interactive, accessible, and efficient user interfaces.",
  summary: "Junior Frontend Developer with hands-on experience in building modern and responsive web applications using React, Tailwind CSS, and Redux. Adept at learning new technologies and committed to continuous professional growth.",
  avatarUrl: "/images/portfolio-dp.jpeg",
  personalWebsiteUrl: "https://just-kiran.vercel.app/",
  contact: {
    email: "cool.kdtech1234@gmail.com",
    tel: "+9832234532",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Kane-dylan",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/-kiran-das",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/kiran_das05",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Engineering and Management, Kolkata",
      degree: "B.Tech in Computer Science and Engineering",
      start: "2022",
      end: "2026",
    },
  ],
  work: [
    {
      company: "NA",
      link: "NA",
      badges: ["NA"],
      title: "NA",
      start: "NA",
      end: "NA",
      description:
        "NA",
    },
  ], // No professional work experience as of now
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "C++",
    "Python",
    "Git",
    "Responsive Design"
  ],
  platforms: [
    "VS Code",
    "PowerShell",
    "Bash",
    "Figma",
    "Vim"
  ],
  projects: [
    {
      "title": "CookMe",
      "techStack": [
        "React",
        "Tailwind CSS",
        "Vite",
        "Gemini API",
        "Aceternity UI",
        "React Router",
        "Markdown Parser"
      ],
      "description": "CookMe is an AI-powered README generator that creates professional documentation from GitHub repositories. Using the Gemini API, it analyzes repos and generates well-structured markdown files with automatic tech stack detection and customizable templates.",
      "link": {
        "label": "CookMe on GitHub",
        "href": "https://github.com/Kane-dylan/CookMe.git"
      }
    },
    {
      title: "LearnSync",
      techStack: [
        "React",
        "Tailwind CSS",
        "Redux",
        "Framer Motion",
        "Node.js",
        "Express",
        "MongoDB",
        "Cohere API",
        "Postman",
        "Vercel",
        "Render"
      ],
      description:
        "LearnSync is an innovative adaptive learning assessment system that incorporates personality tests to detect disorders like ADHD, dyslexia, and autism, followed by personalized AI responses. This project aims to create a more inclusive and effective learning environment for all users.",
    
      link: {
        label: "learn-sync-v1.vercel.app",
        href: "https://learn-sync-v1.vercel.app",
      },
    },
    {
      "title": "MovieReRecommend",
      "techStack": [
        "React",
        "Vite",
        "Tailwind CSS",
        "TMDb API",
        "Redux Toolkit",
        "Framer Motion",
        "React Router",
        "Node.js",
        "MongoDB",
        "Vercel"
      ],
      "description":
        "MovieReRecommend is a smart movie recommendation platform that helps users discover personalized movie suggestions based on their preferences. It integrates TMDb API for real-time data, utilizes Redux Toolkit for state management, and provides a smooth UI experience with Tailwind CSS and Framer Motion.",

      "link": {
        "label": "MovieReRecommend on GitHub",
        "href": "https://github.com/Kane-dylan/MovieReRecommend"
      }
    },
    {
      "title": "LinkCraft",
      "techStack": [
        "React",
        "Vite",
        "Tailwind CSS",
        "Shadcn-UI",
        "React Router",
        "Supabase",
        "Node.js",
        "Vercel"
      ],
      "description": "LinkCraft is a powerful and customizable link management platform that allows users to create, organize, and track links efficiently. It leverages Redux Toolkit for state management, ensures a seamless UI with Tailwind CSS and Framer Motion, and provides real-time database capabilities with Firebase and MongoDB.",
      "link": {
        "label": "LinkCraft on GitHub",
        "href": "https://github.com/Kane-dylan/LinkCraft"
      }
    }

  ],
} as const;
