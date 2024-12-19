import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { ProfilePhoto, GitHubDp} from "@/images/logos";

export const RESUME_DATA = {
  name: "Kiran Das",
  initials: "KD",
  location: "Tarakeswar, Hooghly, West Bengal",
  locationLink: "https://maps.app.goo.gl/QtgJmVtkNcqkjMVr9",
  about:
    "I am a junior frontend developer passionate about building interactive, accessible, and efficient user interfaces.",
  summary: (
    <>
      Junior Frontend Developer with hands-on experience in building modern
      and responsive web applications using React, Tailwind CSS, and Redux.
      Adept at learning new technologies and committed to continuous
      professional growth.
    </>
  ),
  avatarUrl: "https://github.com/Kane-dylan.png",
  logo: ProfilePhoto,
  personalWebsiteUrl: "",
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
  work: [], // No professional work experience as of now
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
    "Bash",
    "PowerShell",
    "Figma",
    "Vim/Nvim"
  ],
  projects: [
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
  ],
} as const;
