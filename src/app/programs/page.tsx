import type { Metadata } from "next";
import Container from "@/components/Container";
import ProgramTabs from "@/components/ProgramTabs";
import { portfolioCriteria } from "@/data/programs";
import { siteConfig } from "@/data/site";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata(
  "수업 안내",
  "포트폴리오반, 특강반, 편입반, 대학원반과 수업 시간을 안내합니다.",
  "/programs",
);

export default function ProgramsPage() {
  return (
    <>
      <section className="pg-hero">
        <Container>
          <h1>목표와 시기에 맞는 네 가지 수업</h1>
        </Container>
      </section>
      <ProgramTabs />

      <section className="pg-criteria">
        <Container>
          <h2>포트폴리오, 무엇을 담나요</h2>
          <blockquote>
            &ldquo;포트폴리오는 &lsquo;나는 누구인가&rsquo;, &lsquo;나는 세상을 어떻게 보는가&rsquo;, &lsquo;나의 관심사는 무엇인가&rsquo;와 같은 자신의 서사를 독창적이고 개성 있는 표현으로 만들어가는 과정입니다.&rdquo;
          </blockquote>
          <div className="pg-criteria-grid">
            {portfolioCriteria.map(item => (
              <div key={item}><p>{item}</p></div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pg-section">
        <Container>
          <h2 className="pg-h2">수업 시간표</h2>
          <p className="pg-lead">{siteConfig.classHours.days}이며 오후반과 저녁반 중 원하는 시간을 선택할 수 있습니다.</p>
          <div className="pg-time-grid">
            <div><span>오후반</span><strong>{siteConfig.classHours.afternoon.replace("오후반 ", "")}</strong></div>
            <div><span>저녁반</span><strong>{siteConfig.classHours.evening.replace("저녁반 ", "")}</strong></div>
          </div>
        </Container>
      </section>

    </>
  );
}
