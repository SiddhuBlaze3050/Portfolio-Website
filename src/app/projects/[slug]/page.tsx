import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Clock } from "lucide-react";
import { MDXContent } from "@/components/ui/MDXContent";
import { Badge } from "@/components/ui/Badge";
import { getContentBySlug, getAllSlugs } from "@/lib/mdx";
import type { ProjectFrontmatter } from "@/lib/types";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs("projects");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getContentBySlug<ProjectFrontmatter>("projects", slug);
  if (!project) return {};
  return {
    title: project.frontmatter.title,
    description: project.frontmatter.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getContentBySlug<ProjectFrontmatter>("projects", slug);

  if (!project) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <Link
        href="/projects"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Projects
      </Link>

      <h1 className="mt-4 text-4xl font-bold tracking-tight">
        {project.frontmatter.title}
      </h1>

      <p className="mt-4 text-lg text-muted-foreground">
        {project.frontmatter.description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Clock className="h-3.5 w-3.5" />
          {project.readingTime}
        </div>
        {project.frontmatter.liveUrl && (
          <a
            href={project.frontmatter.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Live Demo
          </a>
        )}
        {project.frontmatter.repoUrl && (
          <a
            href={project.frontmatter.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
          >
            <Github className="h-3.5 w-3.5" />
            Source Code
          </a>
        )}
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.frontmatter.techStack.map((tech) => (
          <Badge key={tech} variant="primary">
            {tech}
          </Badge>
        ))}
      </div>

      <hr className="my-8 border-border" />

      <MDXContent source={project.content} />
    </div>
  );
}
