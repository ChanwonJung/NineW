import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ConsultCta from "@/components/ConsultCta";
import { portfolioCriteria, programs } from "@/data/programs";
import { siteConfig } from "@/data/site";
import { programImages } from "@/data/images";

export const metadata: Metadata = {
  title: "프로그램",
  description: "포트폴리오반, 특강반, 편입반, 대학원반과 수업 시간을 안내합니다.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="프로그램"
        title="목표와 시기에 맞는 네 가지 수업"
        description="준비 목적과 지금까지 해 온 작품에 맞는 수업을 함께 이야기해 주세요."
      />

      <section className="border-b border-line">
        <Container className="py-14 sm:py-20">
          <div className="space-y-16">
            {programs.map((program, i) => {
              const image = programImages[program.slug];
              return (
                <div
                  key={program.slug}
                  id={program.slug}
                  className="grid scroll-mt-24 gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center"
                >
                  {image && (
                    <div
                      className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${
                        i % 2 === 1 ? "lg:order-last" : ""
                      }`}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 1024px) 480px, 100vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <h2 className="font-serif text-2xl font-semibold text-ink">
                      {program.name}
                    </h2>
                    <p className="mt-2 text-sm font-medium text-accent">{program.summary}</p>
                    <div className="mt-4 space-y-3 text-base leading-relaxed text-ink/85">
                      {program.description.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 포트폴리오 평가 기준 */}
      <section className="border-b border-line bg-paper-dim">
        <Container className="py-14 sm:py-20">
          <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
            포트폴리오, 무엇을 담나요
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/85">
            &ldquo;포트폴리오는 &lsquo;나는 누구인가&rsquo;, &lsquo;나는 세상을 어떻게
            보는가&rsquo;, &lsquo;나의 관심사는 무엇인가&rsquo;와 같은 자신의 서사를
            독창적이고 개성 있는 표현으로 만들어가는 과정입니다.&rdquo;
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {portfolioCriteria.map((item, i) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-line bg-paper p-5"
              >
                <span className="font-serif text-xl font-semibold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-ink/85">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 수업 시간 */}
      <section className="border-b border-line">
        <Container className="py-14 sm:py-20">
          <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
            수업 시간표
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            {siteConfig.classHours.days}이며, 오후반과 저녁반 중 원하는 시간을 선택할 수 있습니다.
          </p>
          <div className="mt-6 grid max-w-2xl gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-line p-6">
              <p className="text-sm font-medium text-accent">오후반</p>
              <p className="mt-1 font-serif text-2xl font-semibold text-ink">
                {siteConfig.classHours.afternoon.replace("오후반 ", "")}
              </p>
            </div>
            <div className="rounded-2xl border border-line p-6">
              <p className="text-sm font-medium text-accent">저녁반</p>
              <p className="mt-1 font-serif text-2xl font-semibold text-ink">
                {siteConfig.classHours.evening.replace("저녁반 ", "")}
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted">
            반별 수업 일정과 준비 방향은 학생의 지원 계획에 따라 달라질 수 있습니다.
            수업료와 상세 일정은 인스타그램 또는 전화 문의로 안내해 드립니다. [확인
            필요: 반별 세부 요일·정원·수강료]
          </p>
        </Container>
      </section>

      <ConsultCta />
    </>
  );
}
