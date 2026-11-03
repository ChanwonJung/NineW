import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

const image = {
  url: "/images/og/ninew-og-v2.jpg",
  width: 1200,
  height: 630,
  alt: "NINE·W 유학미술 포트폴리오 스튜디오",
};

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const sharedTitle = `${title} | NINE·W`;
  return {
    title,
    description,
    openGraph: { type: "website", locale: "ko_KR", url: path, siteName: siteConfig.name, title: sharedTitle, description, images: [image] },
    twitter: { card: "summary_large_image", title: sharedTitle, description, images: [image.url] },
  };
}
