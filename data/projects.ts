export interface Project {
  id?: string;
  image: string;
  title: string;
  description: string;
  technologies: string[];
  demoLink?: string;
  githubLink?: string;
  Notice?: string;
  achievement?: string; 
}

export const projects: Project[] = [
  {
    id: "stox",
    image: "",
    title: "Stox",
    description:
      "Web-based market monitoring dashboard for stocks and indices with near real-time market data. Features a backend REST API with Redis caching, CI/CD pipeline using GitHub Actions, and deployment on AWS (ECS Fargate, ElastiCache, RDS) and Vercel.",
    technologies: [
      "React",
      "TypeScript",
      "AWS",
      "Docker",
      "Redis",
      "PostgreSQL",
      "GitHub Actions",
    ],
    demoLink: "#",
    githubLink: "https://github.com/oskaripessinen/stox",
  },
  {
    id: "structura",
    image: "/assets/structura.png",
    title: "Structura",
    description:
      "AI‑powered funding advisor that suggests grants, loans and equity‑like instruments based on a company’s stage, size and needs.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Prisma",
      "PostgreSQL",
    ],
    demoLink: "https://cia.attractor.fi/",
    achievement: "Top-5 overall in Since Ai Hackathon 2025",
  },
  {
    id: "compkit",
    image: "",
    title: "Compkit",
    description:
      "An AI-powered platform to generate, share, and install custom UI component libraries instantly. Just describe your component, publish, and install with a single command.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Supabase",
    ],
    demoLink: "#",
    githubLink: "https://github.com/oskaripessinen/compkit",
  },
  {
    id: "espoo-business-advisor",
    image: "/assets/project5.png",
    title: "Espoo Business Advisor",
    description:
      "Multilingual web app that guides users through a short Q&A and generates a clear summary for business advisory meetings.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
    ],
    demoLink: "https://test.attractor.fi/",
    githubLink: "",
    achievement: "2nd place in Junction 2025 Espoo Challenge",
  },
  {
    id: "shareflow",
    image: "/assets/project4.png",
    title: "Shareflow",
    description:
      "React Native (Expo, TypeScript) app for shared and personal finances and investments, using Expo Router for navigation, Zustand for state, and NativeWind for styling.",
    technologies: [
      "React-Native",
      "Expo",
      "Node.js",
      "Express",
      "Supabase",
      "Google Auth",
    ],
    demoLink: "#",
    githubLink: "https://github.com/oskaripessinen/Finance-Tracker",
  },
  {
    id: "notia",
    image: "/assets/project3.png",
    title: "Notia",
    description:
      "Notia is a React-based note-taking client featuring real-time collaboration over WebSockets. It offers sharing, OAuth sign-in, REST API integration, and Jest + RTL tests.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Google Auth",
      "Socket.io",
      "Jest",
      "RTL",
    ],
    demoLink: "",
    githubLink: "https://github.com/oskaripessinen/notia-client",
  },
  {
    id: "stock-tracker",
    image: "/assets/project2.png",
    title: "Stock Tracker",
    description:
      "Mobile app for tracking stock prices and managing a portfolio with real-time market data and alerts.",
    technologies: ["React Native", "Yahooo Finance API", "Expo"],
    demoLink: "#",
    githubLink: "https://github.com/oskaripessinen/stock-app",
  },
  {
    id: "price-finder",
    image: "/assets/project1.png",
    title: "Price Finder",
    description:
      "Mobile app that finds and compares product prices across online stores to help users spot the best deals.",
    technologies: ["React Native", "Python", "Flask", "ebay API"],
    demoLink: "#",
    githubLink: "https://github.com/oskaripessinen/price-finder",
  },
];
