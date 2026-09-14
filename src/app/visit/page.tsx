import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ConsultForm from "@/components/ConsultForm";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "오시는 길 · 상담 신청",
  description: "나인더블유 오시는 길과 상담 신청 방법을 안내합니다.",
};

export default function VisitPage() {
  return (
    <>
      <PageHero
        eyebrow="오시는 길 · 상담 신청"
        title="나인더블유로 오시는 길"
        description="매봉역 3번 출구, 강남에 있습니다."
      />

      <section className="border-b border-line">
        <Container className="grid gap-10 py-14 sm:py-20 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-xl font-semibold text-ink">지하철로 오실 때</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink/85">
                {siteConfig.address.subway}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {siteConfig.address.subwayAlt}
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-ink">버스로 오실 때</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink/85">
                &lsquo;매봉역&rsquo; 정류장에서 내린 뒤 매봉역 4번 출구 방향으로 이동해
                주세요. 출발지에 따라 노선과 환승 경로가 다르니 아래 지도에서 대중교통
                길찾기를 확인하는 방법이 가장 편합니다.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-ink">주차 안내</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink/85">
                {siteConfig.address.parking}
              </p>
            </div>

            <a
              href={siteConfig.naverMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full border border-ink/15 px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-ink/5"
            >
              네이버 지도에서 위치 보기 →
            </a>

            <p className="text-sm text-muted">
              [확인 필요] 정확한 지번·도로명 주소와 건물 출입 안내는 담당자 확인 후
              추가합니다.
            </p>
          </div>

          <div id="consult-form" className="scroll-mt-24 rounded-2xl border border-line bg-paper-dim p-6 sm:p-8">
            <h2 className="font-serif text-xl font-semibold text-ink">상담 신청</h2>
            <p className="mt-1.5 text-sm text-muted">
              편한 시간에 연락드릴 수 있도록 아래 내용을 남겨 주세요.
            </p>
            <div className="mt-6">
              <ConsultForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
