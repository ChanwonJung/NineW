import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { galleryGroups } from "@/data/images";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata("학생 작품", "NINE·W 학생들의 작품을 소개하는 갤러리입니다.", "/gallery");

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="학생 작품"
        title="학생 작품 갤러리"
        description="공개 동의를 확인한 작품만 소개합니다. 특정 학생을 알아볼 수 있는 이름이나 정보는 넣지 않습니다."
      />

      {galleryGroups.map((group, i) => (
        <section key={group.title} className={`pg-section ${i % 2 === 1 ? "pg-section-dim" : ""}`}>
          <Container>
            <p className="eyebrow">GALLERY {String(i + 1).padStart(2, "0")}</p>
            <h2 className="pg-h2">{group.title}</h2>
            <p className="pg-lead">{group.description}</p>
            <div className="pg-photo-grid">
              {group.images.map((image) => (
                <div key={image.src} className="pg-photo">
                  <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                </div>
              ))}
            </div>
          </Container>
        </section>
      ))}

      <section className={`pg-section ${galleryGroups.length % 2 === 1 ? "pg-section-dim" : ""}`}>
        <Container>
          <div className="pg-soon">
            <p>더 많은 작품은 학생과 보호자의 게시 동의를 확인하는 대로 이어서 소개해 드리겠습니다.</p>
          </div>
        </Container>
      </section>

    </>
  );
}
