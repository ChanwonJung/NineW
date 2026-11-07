import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import LocationCard from "@/components/LocationCard";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "오시는 길",
  description: "NINE·W 오시는 길과 대중교통, 주차 안내입니다.",
};

export default function VisitPage() {
  return (
    <>
      <PageHero title="NINE·W로 오시는 길" />

      <section className="pg-section">
        <Container>
          <div className="pg-visit">
            <div className="pg-info-list">
              <div className="pg-card pg-info">
                <span>주소</span>
                <p>{siteConfig.address.fullAddress}</p>
              </div>
              <div className="pg-card pg-info">
                <span>지하철</span>
                <p>{siteConfig.address.subway}</p>
                <p>{siteConfig.address.subwayAlt}</p>
              </div>
              <div className="pg-card pg-info">
                <span>버스</span>
                <p>
                  &lsquo;매봉역&rsquo; 정류장에서 내린 뒤 매봉역 4번 출구 방향으로 이동해 주세요. 출발지에 따라 노선과 환승 경로가 다르니 지도에서 대중교통 길찾기를 확인하는 방법이 가장 편합니다.
                </p>
              </div>
              <div className="pg-card pg-info">
                <span>주차</span>
                <p>{siteConfig.address.parking}</p>
              </div>
            </div>
            <div className="pg-visit-map">
              <LocationCard />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
