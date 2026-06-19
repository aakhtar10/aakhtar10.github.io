import {
  Code2,
  Database,
  Wrench,
  Users,
  Layers,
} from "lucide-react";

export const EDUCATION = [
  {
    title: "Full Stack Web Development",
    org: "Masai School",
    period: "2023 - 2024",
  },
  {
    title: "Bachelor of Business Administration (Finance)",
    org: "Marwari College, Ranchi",
    period: "2020 - 2023",
  },
];

export const EXPERIENCE = [
  {
    title: "Full Stack Web Developer",
    org: "Basil Health",
    period: "Aug 2024 - May 2026",
  },
  {
    title: "Customer Support Associate",
    org: "Tech Mahindra",
    period: "Jul 2021 - Nov 2022",
  },
];

export const ABOUT_BULLETS = [
  "Full Stack Developer with 2 years of professional experience.",
  "Built enterprise applications at Basil Health.",
  "Specialized in Next.js, React, TypeScript, and Node.js.",
  "Strong understanding of scalable, modern architectures.",
  "BBA in Finance — transitioned into software development.",
  "Passionate about solving business problems with technology.",
];

export const SKILL_GROUPS = [
  {
    icon: <Code2 className="h-5 w-5" />,
    title: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: "Backend",
    items: ["Node.js", "Express.js", "NestJS", "REST APIs"],
  },
  {
    icon: <Database className="h-5 w-5" />,
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Supabase"],
  },
  {
    icon: <Wrench className="h-5 w-5" />,
    title: "Tools",
    items: ["Git", "GitHub", "Docker", "CI/CD", "pnpm"],
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Soft Skills",
    items: ["Problem Solving", "Communication", "Collaboration", "Ownership", "Teamwork", "Leadership"],
  },
];

export const PROJECTS = [
  {
    name: "Learning Management System (LMS)",
    description:
      "Enterprise LMS for employee training, course management, progress tracking, and notifications.",
    tech: ["React", "TypeScript", "NestJS", "Supabase", "Message91"],
    features: ["Course Management", "Progress Tracking", "User Authentication", "Automated Notifications"],
    github: "",
    demo: "https://hrms-staff-dev.vercel.app/login",
    gradient: "from-sky-500/30 to-blue-600/30",
  },
  {
    name: "HRMS Platform",
    description:
      "Human Resource Management System to manage attendance, workflows, field operations, and employee records.",
    tech: ["Next.js", "TypeScript", "Node.js"],
    features: ["Attendance Tracking", "Employee Management", "Workflow Automation", "Reporting"],
    github: "",
    demo: "https://hrms-admin-dev.vercel.app/login",
    gradient: "from-violet-500/30 to-fuchsia-600/30",
  },
  {
    name: "Basil Health Brand Website",
    description:
      "Corporate website showcasing products and services with modern UI and advanced animations.",
    tech: ["Next.js", "TypeScript", "GSAP", "Framer Motion"],
    features: ["SEO Optimized", "Responsive Design", "Modern Animations", "High Performance"],
    github: "",
    demo: "https://www.basil.health/",
    gradient: "from-emerald-500/30 to-teal-600/30",
  },
  {
    name: "Machine Product Showcase Website",
    description:
      "Interactive product showcase platform highlighting industrial machine features and specifications.",
    tech: ["Next.js", "TypeScript", "GSAP", "Framer Motion"],
    features: ["Product Showcase", "Interactive Animations", "SEO Optimization", "Responsive Layout"],
    github: "",
    demo: "https://machine-website-one.vercel.app/",
    gradient: "from-amber-500/30 to-orange-600/30",
  },
];
