import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { MDXContent } from "@/components/ui/MDXContent";
import { Badge } from "@/components/ui/Badge";
import { getContentBySlug, getAllSlugs } from "@/lib/mdx";
import type { CaseStudyFrontmatter } from "@/lib/types";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs("case-studies");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getContentBySlug<CaseStudyFrontmatter>("case-studies", slug);
  if (!study) return {};
  return {
    title: study.frontmatter.title,
    description: study.frontmatter.problem,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getContentBySlug<CaseStudyFrontmatter>("case-studies", slug);

  if (!study) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <Link
        href="/case-studies"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Case Studies
      </Link>

      <h1 className="mt-4 text-4xl font-bold tracking-tight">
        {study.frontmatter.title}
      </h1>

      <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <Calendar className="h-3.5 w-3.5" />
          {new Date(study.frontmatter.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" />
          {study.readingTime}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {study.frontmatter.techStack.map((tech) => (
          <Badge key={tech} variant="primary">
            {tech}
          </Badge>
        ))}
      </div>

      {/* Summary cards */}
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-border bg-muted p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Problem
          </p>
          <p className="mt-1 text-sm">{study.frontmatter.problem}</p>
        </div>
        <div className="rounded-lg border border-border bg-muted p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Approach
          </p>
          <p className="mt-1 text-sm">{study.frontmatter.approach}</p>
        </div>
        <div className="rounded-lg border border-border bg-muted p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Outcome
          </p>
          <p className="mt-1 text-sm">{study.frontmatter.outcome}</p>
        </div>
      </div>

      <hr className="my-8 border-border" />

      <MDXContent source={study.content} />
    </div>
  );
}
