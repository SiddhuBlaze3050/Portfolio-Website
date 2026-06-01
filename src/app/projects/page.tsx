import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github, Calendar, Clock, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { getAllContent } from "@/lib/mdx";
import type { ProjectFrontmatter, CaseStudyFrontmatter } from "@/lib/types";

export const metadata: Metadata = {
  title: "Projects",
  description: "A showcase of my projects and work.",
};

export default function ProjectsPage() {
  const projects = getAllContent<ProjectFrontmatter>("projects");
  const studies = getAllContent<CaseStudyFrontmatter>("case-studies");

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

      {/* ── Case Studies ── */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold tracking-tight">Case Studies</h2>
        <p className="mt-2 text-muted-foreground">
          Deep dives into specific technical challenges — the problem, the approach, and the outcome.
        </p>

        <div className="mt-8">
          {studies.length === 0 ? (
            <p className="text-muted-foreground">
              Case studies coming soon. Check back later!
            </p>
          ) : (
            <div className="space-y-6">
              {studies.map((study) => (
                <Card key={study.slug} className="group">
                  <Link href={`/case-studies/${study.slug}`}>
                    <h3 className="text-xl font-semibold tracking-tight group-hover:text-primary">
                      {study.frontmatter.title}
                    </h3>
                  </Link>

                  <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(study.frontmatter.date).toLocaleDateString(
                        "en-US",
                        { year: "numeric", month: "long", day: "numeric" }
                      )}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {study.readingTime}
                    </span>
                  </div>

                  <div className="mt-3 space-y-1 text-sm text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Problem:</strong>{" "}
                      {study.frontmatter.problem}
                    </p>
                    <p>
                      <strong className="text-foreground">Outcome:</strong>{" "}
                      {study.frontmatter.outcome}
                    </p>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {study.frontmatter.techStack.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>

                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    Read Full Case Study
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
