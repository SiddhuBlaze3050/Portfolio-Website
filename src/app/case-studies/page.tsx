import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { getAllContent } from "@/lib/mdx";
import type { CaseStudyFrontmatter } from "@/lib/types";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "In-depth technical case studies of complex problems I've solved.",
};

export default function CaseStudiesPage() {
  const studies = getAllContent<CaseStudyFrontmatter>("case-studies");

  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <PageHeader
        title="Case Studies"
        description="Deep dives into specific technical challenges — the problem, the approach, and the outcome."
      />

      {studies.length === 0 ? (
        <p className="text-muted-foreground">
          Case studies coming soon. Check back later!
        </p>
      ) : (
        <div className="space-y-6">
          {studies.map((study) => (
            <Card key={study.slug} className="group">
              <Link href={`/case-studies/${study.slug}`}>
                <h2 className="text-xl font-semibold tracking-tight group-hover:text-primary">
                  {study.frontmatter.title}
                </h2>
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
  );
}
