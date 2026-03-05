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
    id: "vps-container-orchestrator",
    image: "",
    title: "VPS Container Orchestrator",
    description:
      "Centralized deployment hub for running multiple backend services on a single VPS with Docker Compose. It combines shared infrastructure (Nginx Proxy Manager, Watchtower, optional metrics API), per-app deployment templates, GitHub Actions + GHCR + SSH release flow, and optional Next.js control panel with Terraform bootstrap for AWS EC2.",
    technologies: [
      "Docker Compose",
      "GitHub Actions",
      "GHCR",
      "Nginx Proxy Manager",
      "Watchtower",
      "Terraform",
      "AWS",
      "Next.js",
    ],
    demoLink: "#",
    githubLink: "https://github.com/oskaripessinen/vps-container-orchestrator",
  },
  {
    id: "espoo-business-advisor",
    image: "",
    title: "Espoo Business Advisor",
    description:
      "Model-assisted advisory tool for the City of Espoo that helps entrepreneurs prepare before advisor meetings through guided inputs and summary generation. Built with Next.js and TypeScript, deployed on Vercel, and integrated with recommendation flows for practical decision support.",
    technologies: ["Next.js", "TypeScript", "Vercel"],
    demoLink: "https://test.attractor.fi/",
    achievement: "Junction 2025 Hackathon - 2nd Place (Espoo Challenge)",
  },
  {
    id: "funding-advisor",
    image: "",
    title: "Funding Advisor",
    description:
      "Application that analyzes company profile data and suggests suitable funding instruments with tailored justifications. Implemented with Next.js and TypeScript, using the Qwen 3 80B model for structured recommendation generation and transparent reasoning output.",
    technologies: ["Next.js", "TypeScript", "Qwen 3 80B"],
    demoLink: "https://funding.attractor.fi/",
    achievement: "Since AI Hackathon - Top 5 Overall",
  },
  {
    id: "stox",
    image: "",
    title: "Stox",
    description:
      "Web-based market monitoring dashboard for stocks and indices with near real-time updates and responsive UI views. Built with React and TypeScript, backed by a REST API with Redis caching, and delivered through Dockerized CI/CD pipelines on GitHub Actions with deployment across AWS and Vercel.",
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
    id: "cloud-native-task-system",
    image: "",
    title: "Cloud-Native Distributed Task Processing System",
    description:
      "Production-oriented distributed task execution platform designed around cloud-native architecture and horizontal scalability. Implemented in Go with a stateless API layer, PostgreSQL as the source of truth, Redis-backed queueing, concurrent worker pools, and Docker-based service orchestration for reliable asynchronous processing.",
    technologies: [
      "Go",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Cloud Native",
    ],
    demoLink: "#",
    githubLink: "https://github.com/oskaripessinen/task-engine",
  },
  {
    id: "navi",
    image: "",
    title: "Navi",
    description:
      "Interactive command-line assistant for Linux environments with autocomplete and context-aware suggestions integrated directly into the Zsh prompt. Built in Python with a low-latency CLI architecture focused on fast response times, smooth shell integration, and practical day-to-day developer workflows.",
    technologies: ["Python", "CLI", "Linux", "Zsh"],
    demoLink: "#",
    githubLink: "https://github.com/oskaripessinen/navi",
  },
];
