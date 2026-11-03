import type { Metadata } from "next";
import SchoolIdentity from "@/components/SchoolIdentity";
import SchoolPhoto, { SchoolPhotoCredit } from "@/components/SchoolPhoto";
import SchoolProfileDetail from "@/components/SchoolProfileDetail";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { schools, getSchool, schoolsCheckedAt, schoolAcademics } from "@/data/schools";
import { getSchoolProfile, schoolProfiles } from "@/data/school-profiles";
import { siteConfig } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [...new Set([...schools.map((school) => school.slug), ...schoolProfiles.map((school) => school.slug)])].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const profile = getSchoolProfile(slug);
  const school = getSchool(slug);
  const data = profile ?? school;
  return {
    title: data ? data.name + " 학교 안내" : "학교를 찾을 수 없습니다",
    description: data?.intro,
  };
}

export default async function SchoolPage({ params }: Props) {
  const { slug } = await params;
  const profile = getSchoolProfile(slug);
  if (profile) return <SchoolProfileDetail school={profile} />;

  const school = getSchool(slug);
  if (!school) notFound();
  const education = schoolAcademics[slug];

  return <>
    <PageHero eyebrow={school.location} title={school.name} description={school.fullName + " · " + school.nameKo} />
    <section className="pg-section pg-section-dim"><Container>
      <Link className="school-back" href="/schools">← 지역별 학교 안내</Link>
      <div className="school-detail-heading"><SchoolIdentity slug={school.slug} name={school.name} /><p className="school-detail-intro">{school.intro}</p></div>
      <dl className="school-facts"><div><dt>안내 대상</dt><dd>{school.scope}</dd></div><div><dt>적용 기준</dt><dd>{school.cycle}</dd></div><div><dt>최종 확인</dt><dd><time dateTime={schoolsCheckedAt}>{schoolsCheckedAt}</time></dd></div></dl>
    </Container></section>

    <Container className="school-detail-layout"><aside className="school-detail-nav"><p>지원 준비 가이드</p><a href="#overview">학교와 교육</a><a href="#portfolio">01 포트폴리오</a><a href="#schedule">02 지원 일정</a><a href="#preparation">03 준비 제안</a><a href="#sources">04 공식 자료</a></aside><div className="school-detail-content">
      <section id="overview"><SchoolPhoto slug={school.slug} name={school.name} /><SchoolPhotoCredit slug={school.slug} /><p className="eyebrow">ABOUT THE SCHOOL</p><h2>어떻게 배우는 곳일까.</h2><p className="school-education-text">{education.text}</p><a className="school-source-inline" href={education.url} target="_blank" rel="noopener noreferrer">학교 공식 교육과정 ↗</a></section>
      <section id="portfolio"><p className="eyebrow">01 — OFFICIAL REQUIREMENTS</p><h2>포트폴리오, 무엇을 준비할까.</h2><p className="school-requirement-highlight">{school.highlight}</p><ul className="school-requirements">{school.requirements.map((text) => <li key={text}>{text}</li>)}</ul><p className="school-scope-note">{school.scopeNote}</p><a className="school-source-inline" href={school.sources[0][1]} target="_blank" rel="noopener noreferrer">근거: {school.sources[0][0]} ↗</a></section>
      <section id="schedule"><p className="eyebrow">02 — APPLICATION DATES</p><h2>지원 일정</h2><dl className="school-dates">{school.deadlines.map(([label, date]) => <div key={label}><dt>{label}</dt><dd>{date}</dd></div>)}</dl><p className="school-scope-note">{school.deadlineNote}</p><p className="school-scope-note">마감 시각·시간대와 서류 도착 기준은 공식 안내 및 지원 포털에서 최종 확인하세요.</p><a className="school-source-inline" href={school.sources[school.slug === "fit" ? 0 : school.sources.length - 1][1]} target="_blank" rel="noopener noreferrer">공식 지원 일정 확인 ↗</a></section>
      <section id="preparation" className="school-advice"><p className="eyebrow">03 — NINE·W PERSPECTIVE</p><h2>포트폴리오를 준비하는 NINE·W의 제안</h2><p className="school-scope-note">아래는 NINE·W의 준비 제안입니다. 학교의 필수 요건과는 구분해 읽어주세요.</p>{school.advice.map((text, index) => <div className="school-advice-row" key={text}><span>0{index + 1}</span><p>{text}</p></div>)}<Link className="editorial-link" href="/programs#portfolio">포트폴리오 수업 보기 <span aria-hidden="true">↗</span></Link></section>
      <section id="sources"><p className="eyebrow">04 — SOURCE NOTES</p><h2>공식 자료에서 더 확인하기</h2><p className="school-scope-note">공식 공개 자료를 바탕으로 정리한 핵심 안내입니다. 전체 입학요강은 아래 원문에서 확인하세요. 연도가 표시되지 않은 자료는 특정 입학연도의 확정 요강으로 보지 않습니다.</p><ul className="school-sources">{school.sources.map(([title, url]) => <li key={url}><a href={url} target="_blank" rel="noopener noreferrer">{title}<span aria-hidden="true">↗</span></a></li>)}</ul></section>
      <div className="school-contact"><h2>지금 가진 작품에서 시작해 보세요.</h2><p>지원 과정과 준비 상황을 알려주시면 수업 방향을 함께 살펴봅니다.</p><a className="editorial-link" href={siteConfig.phoneHref}>전화 상담 {siteConfig.phone} <span aria-hidden="true">↗</span></a></div>
    </div></Container>
    <Container className="school-other"><Link className="editorial-link" href="/schools">다른 학교 살펴보기 <span aria-hidden="true">↗</span></Link><Link className="editorial-link" href="/results">NINE·W 합격 사례 <span aria-hidden="true">↗</span></Link></Container>
  </>;
}
