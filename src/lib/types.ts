// ── Shared TypeScript types ──

export interface ProjectFrontmatter {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
  cover?: string;
  featured?: boolean;
  date: string;
}

export interface BlogFrontmatter {
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  cover?: string;
}

export interface CaseStudyFrontmatter {
  title: string;
  date: string;
  problem: string;
  approach: string;
  outcome: string;
  techStack: string[];
  cover?: string;
}

export interface ResearchFrontmatter {
  title: string;
  date: string;
  venue?: string;
  abstract: string;
  arxivUrl?: string;
  pdfUrl?: string;
  tags: string[];
}

export interface PlaygroundItem {
  title: string;
  description: string;
  embedUrl: string;
  type: "huggingface" | "streamlit" | "gradio" | "other";
  tags: string[];
}

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string[];
  type: "work" | "education";
}

export interface MDXContent<T> {
  slug: string;
  frontmatter: T;
  content: string;
  readingTime: string;
}

export interface NavLink {
  label: string;
  href: string;
}
