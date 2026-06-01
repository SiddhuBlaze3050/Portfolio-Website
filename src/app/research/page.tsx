import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { getAllContent } from "@/lib/mdx";
import type { ResearchFrontmatter } from "@/lib/types";
import { FileText, ExternalLink, Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Research & Publications",
  description: "My academic research, publications, and technical reports.",
};

export default function ResearchPage() {
  const publications = getAllContent<ResearchFrontmatter>("research");

  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <PageHeader
        title="Research & Publications"
        description="Academic papers, technical reports, and research projects in AI, LLM safety, NLP, and machine learning."
      />

      {publications.length === 0 ? (
        <p className="text-muted-foreground">
          Publications coming soon. Check back later!
        </p>
      ) : (
        <div className="space-y-6">
          {publications.map((pub) => (
            <Card key={pub.slug}>
              <Link href={`/research/${pub.slug}`} className="group block">
                <h2 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
                  {pub.frontmatter.title}
                </h2>
              </Link>

              <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                {pub.frontmatter.venue && (
                  <span className="font-medium text-primary">
                    {pub.frontmatter.venue}
                  </span>
                )}
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {new Date(pub.frontmatter.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                  })}
                </span>
              </div>

              <p className="mt-3 text-sm text-muted-foreground">
                {pub.frontmatter.abstract}
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {pub.frontmatter.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex gap-3">
                  {pub.frontmatter.arxivUrl && (
                    <a
                      href={pub.frontmatter.arxivUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      ArXiv
                    </a>
                  )}
                  {pub.frontmatter.pdfUrl && (
                    <a
                      href={pub.frontmatter.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      <FileText className="h-3.5 w-3.5" />
                      PDF
                    </a>
                  )}
                </div>

                <Link
                  href={`/research/${pub.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  Read Full Publication
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
