import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";
import { getAllSlugs } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Static routes
  const staticRoutes = [
    "",
    "/projects",
    "/experience",
    "/blog",
    "/playground",
    "/research",
    "/case-studies",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Dynamic routes
  const projectSlugs = getAllSlugs("projects").map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogSlugs = getAllSlugs("blog").map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const caseStudySlugs = getAllSlugs("case-studies").map((slug) => ({
    url: `${baseUrl}/case-studies/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectSlugs, ...blogSlugs, ...caseStudySlugs];
}
