import type { NavLink, ExperienceItem, EducationItem, PlaygroundItem } from "./types";

// ── Site metadata ──
export const siteConfig = {
  name: "Siddhartha Devulapalli",
  title: "Software Engineer - AI & Machine Learning",
  description:
    "Portfolio showcasing my work in software development, AI/ML, and research.",
  url: "https://yourportfolio.com",
  email: "devulapallisiddhartha@gmail.com",
  github: "https://github.com/SiddhuBlaze3050",
  linkedin: "https://www.linkedin.com/in/siddhartha-devulapalli/",
  twitter: "https://twitter.com/yourusername",
};

// ── Navigation links ──
export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Research", href: "/research" },
  { label: "Education", href: "/education" },
  // { label: "Playground", href: "/playground" },
  // { label: "Blog", href: "/blog" },
];

// ── Skills ──
export const CATEGORIZED_SKILLS = [
  {
    category: "Languages & Core Backend",
    technologies: ["Python", "SQL", "C", "Java", "TypeScript", "FastAPI", "Flask", "Node.js"]
  },
  {
    category: "Generative AI & LLM Orchestration",
    technologies: ["RAG (Hybrid/Graph)", "LangChain", "LangGraph", "LlamaIndex", "CrewAI", "Vector DBs (Pinecone, ChromaDB, FAISS)", "Prompt Engineering"]
  },
  {
    category: "AI & Machine Learning",
    technologies: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face (Transformers/Diffusers)", "Statistical Modeling"]
  },
  {
    category: "MLOps, Cloud & Infrastructure",
    technologies: ["AWS (SageMaker, ECS, Step Functions)", "Azure (Databricks, AI Studio)", "GCP (Vertex AI)", "Docker", "Kubernetes", "CI/CD", "Linux"]
  },
  {
    category: "Data Engineering & Observability",
    technologies: ["Apache Spark", "ETL Pipelines", "Pandas", "NumPy", "MLflow", "LangSmith", "Arize Phoenix", "PostgreSQL", "Elasticsearch"]
  },
  {
    category: "Mathematical Foundations",
    technologies: ["Linear Algebra", "Calculus", "Statistics & Probability", "Optimization Techniques"]
  }
];

// ── Experience items ──
export const experienceItems: ExperienceItem[] = [
  {
    title: "AI/ML Engineer",
    company: "Aztra.ai",
    location: "Hyderabad, Telangana",
    startDate: "Jul 2025",
    endDate: "Jun 2026",
    description: [
      "🔹 Project Aurora (Demand Forecasting & Sensing)",
      "• Architected the backend infrastructure, engineering automated OLAP-to-OLTP pipelines to migrate ML insights from Azure Databricks to RDS PostgreSQL across 50+ stores.",
      "• Developed highly concurrent REST APIs using FastAPI and AWS ECS, optimizing data retrieval latency to <50ms using Azure Cache for Redis and Elasticsearch.",
      "• Productized causal ML models (XGBoost, Nixtla) maintaining a 97% Forecast Accuracy, orchestrating event-driven Demand Shaping jobs within a 24-48 hour live planner feedback loop.",
      " ", // Visual spacing break
      "🔹 Project Aries (Automated LLM Testing & Observability)",
      "• Architected an event-driven AI orchestration engine using AWS Step Functions, EventBridge, and Lambda/ECS workers to reliably process 1,000+ daily synthetic testing events.",
      "• Engineered a high-throughput hybrid Graph & Vector RAG retrieval pipeline using Neo4j and Pinecone, expanding subgraphs via Cypher queries to reduce API anomaly debugging time by 25%.",
      "• Developed custom Model Context Protocol (MCP) clients for GitHub, Jira, ServiceNow, and Swagger, automating closed-loop testing validated by a Claude Sonnet LLM-as-a-Judge to decrease manual overhead by 30%."
    ],
    type: "work",
  },
  {
    title: "Business Analyst",
    company: "Darwinbox",
    location: "Hyderabad, Telangana",
    startDate: "Jun 2021",
    endDate: "Mar 2023",
    description: [
      "Streamlined enterprise contract validation processes, yielding an annual savings of $5,000.",
      "Led quarterly deal audits to secure and validate enterprise contracts valued between $50,000 and $100,000 per quarter.",
      "Optimized cloud infrastructure spending by managing AWS credits, saving $3,000 to $5,000 quarterly and successfully redeeming $35,000 annually.",
      "Negotiated high-value vendor contracts, reducing recurring organizational costs by $10,000 to $15,000 annually.",
      "Designed and contributed to executive Tableau dashboards for key metric reporting presented directly to the company co-founders."
    ],
    type: "work",
  },
];

// ── Education items ──
export const educationItems: EducationItem[] = [
  {
    title: "B.S. in Data Science and Applications",
    institution: "IIT Madras",
    location: "Chennai, Tamil Nadu",
    startDate: "2022",
    endDate: "2026",
    description: [
      "CGPA: 9.8 / 10",
      "Top 1% academic performer; Awarded Certificate of Academic Distinction.",
      "Contributed to LLM Research as a Teaching Assistant.",
    ],
  },
  {
    title: "BBA in Business Analytics",
    institution: "ICFAI Business School",
    location: "Hyderabad, Telangana",
    startDate: "2018",
    endDate: "2021",
    description: [
      "CGPA: 10 / 10",
      "Awarded Gold Medal and a cash prize of INR 30K for academic excellence (1st Rank).",
      "Awarded a 50% merit-based tuition scholarship for outstanding academic excellence.",
    ],
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
