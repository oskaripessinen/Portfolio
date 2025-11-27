export interface Project {
  id?: string; // Keeping id for React keys, optional as not in user data
  image: string;
  title: string;
  description: string;
  technologies: string[];
  demoLink?: string;
  githubLink?: string;
  Notice?: string;
  achievement?: string; // New field for highlighting achievements
}

export const projects: Project[] = [
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
      "Supabase Auth",
    ],
    demoLink: "https://cia.attractor.fi/",
    achievement: "Top-5 overall in Since Ai Hackathon 2025",
  },
  {
    id: "compkit",
    image: "",
    title: "Compkit",
    description:
      "AI-powered platform to generate, publish and install custom UI component libraries instantly, with theming and zero manual setup.",
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
      "Shared finance app to track expenses, manage budgets, and collaborate with friends or family in pooled accounts.",
    technologies: [
      "React-Native",
      "Expo",
      "Node.js",
      "Express",
      "Supabase",
      "Google Auth",
      "Google vision",
    ],
    demoLink: "#",
    githubLink: "https://github.com/oskaripessinen/Finance-Tracker",
  },
  {
    id: "notia",
    image: "/assets/project3.png",
    title: "Notia",
    description:
      "Real-time note-taking app with authentication, collaborative editing and synchronization across devices for seamless workflows.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Google Auth",
      "Socket.io",
      "Jest",
      "RTL",
      "GitHub Actions",
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
