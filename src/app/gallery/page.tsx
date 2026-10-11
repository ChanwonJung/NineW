import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ConsultCta from "@/components/ConsultCta";
import { galleryGroups } from "@/data/images";

export const metadata: Metadata = {
  title: "학생 작품",
  description: "NINE·W 학생들의 작품을 소개하는 갤러리입니다.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="학생 작품"
        title="학생 작품 갤러리"
        description="공개 동의를 확인한 작품만 소개합니다. 특정 학생을 알아볼 수 있는 이름이나 정보는 넣지 않습니다."
      />

      <section className="py-14 sm:py-20">
        <Container className="space-y-16">
          {galleryGroups.map((group) => (
            <div key={group.title}>
              <h2 className="font-serif text-2xl font-semibold text-ink">{group.title}</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                {group.description}
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.images.map((image) => (
                  <div
                    key={image.src}
                    className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-paper-dim"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="rounded-2xl border border-dashed border-line bg-paper-dim p-8 text-center">
            <p className="text-sm leading-relaxed text-ink/80">
              더 많은 작품은 학생과 보호자의 게시 동의를 확인하는 대로 이어서 소개해
              드리겠습니다.
            </p>
          </div>
        </Container>
      </section>

      <ConsultCta />
    </>
  );
}
