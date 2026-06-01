import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { getAllContent } from "@/lib/mdx";
import type { ProjectFrontmatter } from "@/lib/types";

export const metadata: Metadata = {
  title: "Projects",
  description: "A showcase of my projects and work.",
};

export default function ProjectsPage() {
  const projects = getAllContent<ProjectFrontmatter>("projects");

  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <PageHeader
        title="Projects"
        description="A collection of projects I've built — from full-stack applications to ML systems and developer tools."
      />

      {projects.length === 0 ? (
        <p className="text-muted-foreground">
          Projects coming soon. Check back later!
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.slug} className="flex flex-col">
              {project.frontmatter.cover && (
                <div className="relative -mx-6 -mt-6 mb-4 aspect-video overflow-hidden rounded-t-xl">
                  <Image
                    src={project.frontmatter.cover}
                    alt={project.frontmatter.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <Link
                href={`/projects/${project.slug}`}
                className="text-lg font-semibold tracking-tight hover:text-primary"
              >
                {project.frontmatter.title}
              </Link>

              <p className="mt-2 flex-1 text-sm text-muted-foreground">
                {project.frontmatter.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.frontmatter.techStack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>

              <div className="mt-4 flex gap-3">
                {project.frontmatter.liveUrl && (
                  <a
                    href={project.frontmatter.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
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
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Github className="h-3.5 w-3.5" />
                    Source
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
