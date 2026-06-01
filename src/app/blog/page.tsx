import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { getAllContent } from "@/lib/mdx";
import type { BlogFrontmatter } from "@/lib/types";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on software engineering, AI, and technology.",
};

export default function BlogPage() {
  const posts = getAllContent<BlogFrontmatter>("blog");

  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <PageHeader
        title="Blog"
        description="Thoughts, tutorials, and deep-dives on software engineering, AI, and the tools I use."
      />

      {posts.length === 0 ? (
        <p className="text-muted-foreground">
          Blog posts coming soon. Check back later!
        </p>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <Card key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-xl font-semibold tracking-tight group-hover:text-primary">
                  {post.frontmatter.title}
                </h2>
              </Link>

              <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readingTime}
                </span>
              </div>

              <p className="mt-3 text-sm text-muted-foreground">
                {post.frontmatter.excerpt}
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {post.frontmatter.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
