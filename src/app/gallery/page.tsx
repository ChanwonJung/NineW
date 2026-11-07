import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";
import { galleryImages } from "@/data/images";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata("학생 작품", "NINE·W 학생들의 작품을 소개하는 갤러리입니다.", "/gallery");

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="학생 작품 갤러리"
      />

      <Gallery images={galleryImages} />


    </>
  );
}
