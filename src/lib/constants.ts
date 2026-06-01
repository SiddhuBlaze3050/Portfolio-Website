import type { NavLink, ExperienceItem, PlaygroundItem } from "./types";

// ── Site metadata ──
export const siteConfig = {
  name: "Siddhartha Devulapalli",
  title: "Full-Stack Developer & AI Engineer",
  description:
    "Portfolio showcasing my work in software development, AI/ML, and research.",
  url: "https://yourportfolio.com",
  email: "devulapallisiddhartha@gmail.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
};

// ── Navigation links ──
export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Blog", href: "/blog" },
  { label: "Playground", href: "/playground" },
  { label: "Research", href: "/research" },
  { label: "Case Studies", href: "/case-studies" },
];

// ── Skills ──
export const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Python",
  "Node.js",
  "TailwindCSS",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Machine Learning",
  "LLMs",
  "REST APIs",
];

// ── Experience items ──
export const experienceItems: ExperienceItem[] = [
  {
    title: "Software Engineer",
    company: "Acme Corp",
    location: "San Francisco, CA",
    startDate: "2024-01",
    endDate: "Present",
    description: [
      "Built and maintained full-stack web applications using React and Node.js.",
      "Designed and deployed ML pipelines for demand forecasting.",
      "Led a team of 3 engineers to deliver a customer-facing analytics dashboard.",
    ],
    type: "work",
  },
  {
    title: "Master of Science in Computer Science",
    company: "University of Technology",
    location: "New York, NY",
    startDate: "2022-08",
    endDate: "2024-05",
    description: [
      "Focused on AI/ML and natural language processing.",
      "Published research on LLM safety evaluation frameworks.",
      "GPA: 3.9 / 4.0",
    ],
    type: "education",
  },
];

// ── Playground items ──
export const playgroundItems: PlaygroundItem[] = [
  {
    title: "LLM Safety Evaluator",
    description:
      "An interactive tool for testing large language model outputs against safety benchmarks.",
    embedUrl: "https://huggingface.co/spaces/yourusername/llm-safety-eval",
    type: "huggingface",
    tags: ["LLM", "Safety", "NLP"],
  },
  {
    title: "Demand Forecasting Dashboard",
    description:
      "Real-time demand forecasting visualization with inventory-aware adjustments.",
    embedUrl: "https://yourusername-forecasting.streamlit.app",
    type: "streamlit",
    tags: ["ML", "Forecasting", "Data Viz"],
  },
];
