import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { MDXContent } from "./types";

const contentDirectory = path.join(process.cwd(), "content");

/**
 * Get all MDX files from a content subdirectory.
 */
export function getAllContent<T>(folder: string): MDXContent<T>[] {
  const dir = path.join(contentDirectory, folder);

  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  const content = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const filePath = path.join(dir, file);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    const stats = readingTime(content);

    return {
      slug,
      frontmatter: data as T,
      content,
      readingTime: stats.text,
    };
  });

  // Sort by date descending
  return content.sort((a, b) => {
    const dateA = (a.frontmatter as Record<string, string>).date ?? "";
    const dateB = (b.frontmatter as Record<string, string>).date ?? "";
    return new Date(dateB).getTime() - new Date(dateA).getTime();
  });
}

/**
 * Get a single MDX file by slug from a content subdirectory.
 */
export function getContentBySlug<T>(
  folder: string,
  slug: string
): MDXContent<T> | null {
  const filePath = path.join(contentDirectory, folder, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    slug,
    frontmatter: data as T,
    content,
    readingTime: stats.text,
  };
}

/**
 * Get all slugs from a content subdirectory (for generateStaticParams).
 */
export function getAllSlugs(folder: string): string[] {
  const dir = path.join(contentDirectory, folder);

  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
