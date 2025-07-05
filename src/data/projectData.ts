import project2 from "../assets/project2.png";
import project1 from "../assets/project1.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";

export interface Project {
  image: string;  
  title: string;
  description: string;
  technologies: string[];
  demoLink?: string;
  githubLink?: string;
  Notice?: string;
}

export const projects: Project[] = [
  {
    image: project4,
    title: "Shareflow",
    description: "Shared finance management app that allows users to track shared expenses, manage budgets, and collaborate with friends or family.",
    technologies: ["React-Native","Expo", "Node.js","Express", "Supabase", "Google Auth", "Google vision"],
    demoLink: "#",
    githubLink: "https://github.com/oskaripessinen/Finance-Tracker",
  },

  {
    image: project3,
    title: "Notia",
    description: "A real-time note-taking application with user authentication and real-time collaboration features. Built with React, Node.js, and Socket.io.",
    technologies: ["React", "Node.js", "MongoDB", "Google Auth", "Socket.io", "Jest", "RTL", "GitHub Actions"],
    demoLink: "https://notia-client.vercel.app/login",
    githubLink: "https://github.com/oskaripessinen/notia-client",
    Notice: "Server is hosted on free tier, so it may take a moment to spin up."
  },
  {
    image: project2,
    title: "Stock Tracker",
    description: "A Mobile application for tracking stock prices and managing a stock portfolio. Built with React native and Yahoo finance Api for real time stock data.",
    technologies: ["React Native", "Expo", "Yahooo Finance API",],
    demoLink: "#",
    githubLink: "https://github.com/oskaripessinen/stock-app"
  },
  {
    image: project1,
    title: "Price Finder",
    description: "A Mobile app for finding prices of products from different online stores. Built with React native, Flask and Ebay Api.",
    technologies: ["React Native","Python", "Flask", "ebay API",],
    demoLink: "#",
    githubLink: "https://github.com/oskaripessinen/price-finder"
  },
  
];
