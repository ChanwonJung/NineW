import type { Metadata } from "next";
import Link from "next/link";
import { schools as schoolGuides } from "@/data/schools";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { eastCoastSchools, midwestSchools, westCoastSchools, otherRegionsNote } from "@/data/results";

export const metadata: Metadata = {
  title: "합격 실적",
  description: "NINE·W 학생들이 합격한 사례가 있는 학교를 소개합니다.",
};

function SchoolGroup({ title, schools }: { title: string; schools: string[] }) {
  return (
    <div className="pg-card pg-group">
      <h3>{title}</h3>
      <div className="pg-chips">
        {schools.map((school) => {
          const guide = schoolGuides.find(item => school.includes(item.name));
          return guide ? <Link key={school} href={`/schools/${guide.slug}`} className="pg-chip is-link">{school} ↗</Link> : <span key={school} className="pg-chip">{school}</span>;
        })}
      </div>
    </div>
  );
}

export default function ResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="합격 실적"
        title="30여 년간 이어온 합격 사례"
        description="1997년 미국 뉴저지에서 시작해 서울 강남에서 유학미술 교육을 이어 오며, 아래 학교들에 합격한 사례가 있습니다."
      />

      <section className="pg-section">
        <Container>
          <p className="eyebrow">ADMISSIONS</p>
          <h2 className="pg-h2">합격 사례가 있는 학교</h2>
          <p className="pg-lead">현재 지원 안내가 준비된 학교는 누르면 학교별 안내로 이동합니다.</p>
          <div className="pg-group-grid">
            <SchoolGroup title="미국 동부" schools={eastCoastSchools} />
            <SchoolGroup title="미국 중서부" schools={midwestSchools} />
            <SchoolGroup title="미국 서부" schools={westCoastSchools} />
            <div className="pg-card pg-group">
              <h3>그 밖의 지역</h3>
              <p className="pg-group-note">{otherRegionsNote}</p>
            </div>
          </div>
          <p className="school-result-notice">CCA는 과거 합격 기록으로 소개합니다. 학교는 2026–27학년도를 마지막으로 운영을 종료할 예정이며, 신규 지원 학교 안내와 구분됩니다. <a href="https://portal.cca.edu/transition/parents/parent-communications/parent-message/" target="_blank" rel="noopener noreferrer">CCA 공식 공지 ↗</a></p>
          <Link className="editorial-link" href="/schools">현재 학교별 지원 안내 보기 <span aria-hidden="true">↗</span></Link>
        </Container>
      </section>

      <section className="pg-section pg-section-dim">
        <Container>
          <div className="pg-prose pg-prose-narrow">
            <p>
              합격 결과는 학생의 지원 조건과 해당 연도 심사 기준에 따라 달라집니다.
              특정 학교의 합격이나 장학금을 보장하지 않으며, 위 목록은 그동안 합격한
              사례가 있었던 학교를 소개한 것입니다.
            </p>
            <p>
              [확인 필요] 구체적인 합격 연도, 학생 수, 장학금 규모 등 정량적인 실적
              자료는 개인정보 보호와 사실 확인을 거친 뒤 추가할 예정입니다.
            </p>
          </div>
        </Container>
      </section>

    </>
  );
}
