import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SchoolIdentity, { SchoolIdentityCredit } from "@/components/SchoolIdentity";
import SchoolPhoto, { SchoolPhotoCredit } from "@/components/SchoolPhoto";
import type { SchoolProfile } from "@/data/school-profiles";
import { siteConfig } from "@/data/site";

export default function SchoolProfileDetail({ school }: { school: SchoolProfile }) {
  return <>
    <PageHero title={school.name} description={school.regionLabel + " · " + school.fullName} />
    <section className="pg-section pg-section-dim">
      <Container>
        <Link className="school-back" href="/schools">지역별 학교 안내로 돌아가기</Link>
        <div className="school-detail-heading">
          <SchoolIdentity slug={school.slug} name={school.name} />
          <p className="school-detail-intro">{school.intro}</p>
        </div>
        <dl className="school-facts school-profile-facts">
          <div><dt>지역</dt><dd>{school.regionLabel} · {school.location}</dd></div>
          <div><dt>학교 유형</dt><dd>{school.type}</dd></div>
          <div><dt>안내 과정</dt><dd>{school.levels.join(" · ")}</dd></div>
        </dl>
      </Container>
    </section>

    <Container className="school-profile-editorial">
      <section id="character" className="school-profile-story">
        <SchoolPhoto slug={school.slug} name={school.name} />
        <SchoolPhotoCredit slug={school.slug} />
        <SchoolIdentityCredit slug={school.slug} />
        <div className="school-profile-story-grid">
          <div>
            
            <h2>학교의 성격</h2>
          </div>
          <div className="school-profile-copy">
            <p>{school.character}</p>
            <p>{school.environment}</p>
            <p>{school.portfolioFocus}</p>
            <p className="school-profile-fit"><strong>이 교육 방식과 잘 맞는 학생</strong>{school.fitSummary}</p>
            <div className="school-strengths" aria-label="대표 교육 분야">
              {school.strengths.map((strength) => <span key={strength}>{strength}</span>)}
            </div>
            <div className="school-profile-links">
              {school.officialLinks.map((link, index) => <a key={link.label + "-" + link.url + "-" + index} href={link.url} target="_blank" rel="noopener noreferrer">
                <span>{link.label}</span>
              </a>)}
            </div>
          </div>
        </div>
      </section>

      <div className="school-contact school-profile-contact">
        <h2>이 학교가 내 작업과 맞는지 궁금하다면</h2>
        <p>현재 작품과 희망 전공을 함께 살펴보며 지원 방향을 구체화합니다.</p>
        <a className="editorial-link" href={siteConfig.phoneHref}>전화 상담 {siteConfig.phone}</a>
      </div>
    </Container>

    <Container className="school-other">
      <Link className="editorial-link" href="/schools">다른 학교 살펴보기</Link>
      <Link className="editorial-link" href="/results">NINE·W 합격 사례</Link>
    </Container>
  </>;
}
