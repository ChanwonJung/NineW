import type { Metadata } from "next";
import Link from "next/link";
import { schools as schoolGuides } from "@/data/schools";
import { schoolProfiles } from "@/data/school-profiles";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { acceptanceRegions } from "@/data/results";

export const metadata: Metadata = {
  title: "합격 실적",
  description: "NINE·W 학생들이 합격한 사례가 있는 학교를 지역별로 소개합니다.",
};

function SchoolGroup({
  title,
  schools,
  note,
}: {
  title: string;
  schools: string[];
  note?: string;
}) {
  return (
    <div className="pg-card pg-group">
      <h3>{title}</h3>
      {schools.length > 0 && (
        <div className="pg-chips">
          {schools.map((school) => {
            const schoolName = school.toLowerCase();
            const guide = [...schoolProfiles, ...schoolGuides]
              .map((item) => {
                const aliases = "aliases" in item ? item.aliases : [];
                const matchLength = [item.name, item.fullName, ...aliases]
                  .filter((name) => schoolName.includes(name.toLowerCase()))
                  .reduce((longest, name) => Math.max(longest, name.length), 0);
                return { item, matchLength };
              })
              .filter(({ matchLength }) => matchLength > 0)
              .sort((a, b) => b.matchLength - a.matchLength)[0]?.item;
            return guide ? (
              <Link
                key={school}
                href={`/schools/${guide.slug}`}
                className="pg-chip is-link"
              >
                {school} ↗
              </Link>
            ) : (
              <span key={school} className="pg-chip">
                {school}
              </span>
            );
          })}
        </div>
      )}
      {note && <p className="pg-group-note">{note}</p>}
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
          <p className="pg-lead">
            지역별 합격 학교를 확인할 수 있습니다. 학교명을 클릭하면 해당 학교의
            상세 지원 안내를 확인할 수 있습니다.
          </p>
          <div className="pg-group-grid">
            {acceptanceRegions.map((region) => (
              <SchoolGroup
                key={region.title}
                title={region.title}
                schools={region.schools}
                note={region.note}
              />
            ))}
          </div>
          <p className="school-result-notice">
            CCA는 과거 합격 기록으로 소개합니다. 학교는 2026–27학년도를 마지막으로
            운영을 종료할 예정이며, 신규 지원 학교 안내와 구분됩니다.{" "}
            <a
              href="https://portal.cca.edu/transition/parents/parent-communications/parent-message/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CCA 공식 공지 ↗
            </a>
          </p>
          <Link className="editorial-link" href="/schools">
            현재 학교별 지원 안내 보기 <span aria-hidden="true">↗</span>
          </Link>
        </Container>
      </section>

    </>
  );
}
