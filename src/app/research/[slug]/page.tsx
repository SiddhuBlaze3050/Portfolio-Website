import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, FileText, ExternalLink } from "lucide-react";
import { MDXContent } from "@/components/ui/MDXContent";
import { Badge } from "@/components/ui/Badge";
import { getContentBySlug, getAllSlugs } from "@/lib/mdx";
import type { ResearchFrontmatter } from "@/lib/types";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs("research");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const paper = getContentBySlug<ResearchFrontmatter>("research", slug);
  if (!paper) return {};
  return {
    title: paper.frontmatter.title,
    description: paper.frontmatter.abstract,
  };
}

export default async function ResearchPaperPage({ params }: Props) {
  const { slug } = await params;
  const paper = getContentBySlug<ResearchFrontmatter>("research", slug);

  if (!paper) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <Link
        href="/research"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Research
      </Link>

      <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
        {paper.frontmatter.title}
      </h1>

      <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
        {paper.frontmatter.venue && (
          <span className="font-medium text-primary">
            {paper.frontmatter.venue}
          </span>
        )}
        <span className="inline-flex items-center gap-1.5">
          <Calendar className="h-3.5 w-3.5" />
          {new Date(paper.frontmatter.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
          })}
        </span>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {paper.frontmatter.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      <div className="mt-6 flex gap-4">
        {paper.frontmatter.arxivUrl && (
          <a
            href={paper.frontmatter.arxivUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            ArXiv
          </a>
        )}
        {paper.frontmatter.pdfUrl && (
          <a
            href={paper.frontmatter.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-sm text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <FileText className="h-3.5 w-3.5" />
            PDF File
          </a>
        )}
      </div>

      <hr className="my-8 border-border" />

      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <MDXContent source={paper.content} />
      </article>
    </div>
  );
}
