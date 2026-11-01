import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { schools } from "@/data/schools";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/programs",
    "/schools",
    "/results",
    "/gallery",
    "/reviews",
    "/blog",
    "/visit",
    "/consult",
    "/faq",
    "/privacy",
  ];

  const schoolRoutes = schools.map((school) => `/schools/${school.slug}`);

  return [...staticRoutes, ...schoolRoutes].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.6,
  }));
}
