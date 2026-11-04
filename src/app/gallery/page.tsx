import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GalleryGroups from "@/components/GalleryGroups";
import { galleryGroups } from "@/data/images";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata("학생 작품", "NINE·W 학생들의 작품을 소개하는 갤러리입니다.", "/gallery");

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="학생 작품 갤러리"
        description="공개 동의를 확인한 작품만 소개합니다. 특정 학생을 알아볼 수 있는 이름이나 정보는 넣지 않습니다."
      />

      <GalleryGroups groups={galleryGroups} />


    </>
  );
}
