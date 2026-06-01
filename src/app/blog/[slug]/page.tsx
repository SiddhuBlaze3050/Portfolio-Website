import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { MDXContent } from "@/components/ui/MDXContent";
import { Badge } from "@/components/ui/Badge";
import { getContentBySlug, getAllSlugs } from "@/lib/mdx";
import type { BlogFrontmatter } from "@/lib/types";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs("blog");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getContentBySlug<BlogFrontmatter>("blog", slug);
  if (!post) return {};
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getContentBySlug<BlogFrontmatter>("blog", slug);

  if (!post) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Blog
      </Link>

      <h1 className="mt-4 text-4xl font-bold tracking-tight">
        {post.frontmatter.title}
      </h1>

      <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
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

      <div className="mt-3 flex flex-wrap gap-1.5">
        {post.frontmatter.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      <hr className="my-8 border-border" />

      <MDXContent source={post.content} />
    </div>
  );
}
