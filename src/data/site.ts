export const profile = {
  name: "Oskari Pessinen",
  tagline: "Software developer & robotics student",
  links: [
    { label: "GitHub", href: "https://github.com/oskaripessinen" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/oskari-pessinen-6114582a6/" },
    { label: "Email", href: "mailto:oskari.pessinen@gmail.com" },
    { label: "Resume", href: "/assets/resume.pdf" },
  ],
};

export interface TimelineEntry {
  period: string;
  title: string;
  org: string;
  orgUrl?: string;
  parent?: { name: string; url?: string };
  description?: string;
  thesis?: { title: string; href: string; note?: string };
}

export const experience: TimelineEntry[] = [
  {
    period: "04/2026–",
    title: "Software Developer",
    org: "Logentia Oy",
    orgUrl: "https://www.logentia.com",
    parent: { name: "Lemonsoft", url: "https://lemonsoft.fi" },
    description:
      "Developing and maintaining Logentia's transport analytics software, which helps companies compare transport services, optimize costs and make more sustainable transport choices. Python, Rust, TypeScript, PostgreSQL, AWS, Docker and Linux.",
  },
  {
    period: "10/2025–03/2026",
    title: "Software Developer",
    org: "Attractor Oy",
    orgUrl: "https://www.attractorhq.com",
    description:
      "Full-stack development with a focus on reliable systems and production-ready delivery using modern web and cloud technologies.",
  },
];

export const education: TimelineEntry[] = [
  {
    period: "2026–",
    title: "M.Sc. (Tech.), Robotics and Autonomous Systems",
    org: "University of Turku",
    orgUrl: "https://www.utu.fi",
    description: "Currently studying.",
  },
  {
    period: "2023–2026",
    title: "B.Sc. (Tech.), Information and Communication Technology",
    org: "University of Turku",
    orgUrl: "https://www.utu.fi",
    thesis: {
      title: "Serverless-arkkitehtuurin cold start -ilmiö ja optimointimenetelmät",
      note: "in Finnish",
      href: "https://www.utupub.fi/items/347912d6-c455-451e-a88e-903e8c5a5eaf",
    },
  },
];

export const about = [
  "I work across frontend, backend and infrastructure, and I care about software that is clear, maintainable and dependable in real environments.",
  "Right now I'm studying robotics and autonomous systems, where I'm interested in bringing the same engineering mindset to systems that interact with the physical world.",
];

export const skills = [
  { label: "Languages", items: "TypeScript, Python, Rust, Go, Java, SQL, C++" },
  { label: "Frameworks", items: "React, Next.js, Node.js" },
  { label: "Infrastructure", items: "Docker, AWS, PostgreSQL, Redis, Linux" },
];
