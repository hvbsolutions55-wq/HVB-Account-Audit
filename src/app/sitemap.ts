import type { MetadataRoute } from "next";
import { getPostSlugs } from "@/sanity/lib/api";
import { siteUrl } from "@/sanity/env";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = ["", "/about", "/services", "/contact", "/privacy", "/terms", "/blog"];
  const posts = await getPostSlugs();

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
    })),
    ...posts.map((slug) => ({
      url: `${siteUrl}/blog/${slug}`,
      lastModified: new Date(),
    })),
  ];
}
