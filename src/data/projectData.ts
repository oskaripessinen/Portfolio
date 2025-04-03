import project2 from "../assets/project2.png";
import project1 from "../assets/project1.png";
import project3 from "../assets/project3.png";

export interface Project {
  image: any;  
  title: string;
  description: string;
  technologies: string[];
  demoLink?: string;
  githubLink?: string;
}

export const projects: Project[] = [
  {
    image: project3,
    title: "Notia",
    description: "A real-time note-taking application with user authentication and real-time collaboration features. Built with React, Node.js, and Socket.io.",
    technologies: ["React", "Node.js", "MongoDB", "Google Auth", "Socket.io", "Jest", "RTL", "GitHub Actions"],
    demoLink: "https://notia-client.vercel.app/login",
    githubLink: "https://github.com/oskaripessinen/notia-client"
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
