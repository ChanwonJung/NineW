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
    // "/reviews", "/blog": 메뉴에서 숨긴 동안 사이트맵에서도 제외
    "/visit",
    "/consult",
    "/faq",
  ];

  const schoolRoutes = schools.map((school) => `/schools/${school.slug}`);

  return [...staticRoutes, ...schoolRoutes].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.6,
  }));
}
