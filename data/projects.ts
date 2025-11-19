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
    id: "compkit",
    image: "",
    title: "Compkit",
    description:
      "Compkit is an AI-powered platform for generating, sharing, and installing custom UI component libraries — no GitHub, no npm registry, no manual setup. Generate beautiful, themeable components with AI, publish them instantly, and let anyone install them with a single command.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Supabase",
      "AI",
    ],
    demoLink: "#",
    githubLink: "https://github.com/oskaripessinen/compkit",
  },
  {
    id: "espoo-business-advisor",
    image: "/assets/project5.png",
    title: "Espoo Business Advisor",
    description:
      "A minimal, multilingual web app to help people in Espoo prepare for a business advisory meeting. The app guides the user through a short Q&A, then generates a clear summary for an advisor.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
    ],
    demoLink: "https://test.attractor.fi/",
    githubLink: "",
    achievement: "2nd place in Junction Espoo Challenge",
  },
  {
    id: "shareflow",
    image: "/assets/project4.png",
    title: "Shareflow",
    description:
      "Shared finance management app that allows users to track shared expenses, manage budgets, and collaborate with friends or family.",
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
      "A real-time note-taking application with user authentication and real-time collaboration features.",
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
      "A Mobile application for tracking stock prices and managing a stock portfolio. Built with React native and Yahoo finance Api for real time stock data.",
    technologies: ["React Native", "Yahooo Finance API", "Expo"],
    demoLink: "#",
    githubLink: "https://github.com/oskaripessinen/stock-app",
  },
  {
    id: "price-finder",
    image: "/assets/project1.png",
    title: "Price Finder",
    description:
      "A Mobile app for finding prices of products from different online stores. Built with React native, Flask and Ebay Api.",
    technologies: ["React Native", "Python", "Flask", "ebay API"],
    demoLink: "#",
    githubLink: "https://github.com/oskaripessinen/price-finder",
  },
];
