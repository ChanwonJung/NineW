import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { SchoolPhotoCredit } from "@/components/SchoolPhoto";
import SchoolDirectory from "@/components/SchoolDirectory";
import { schools } from "@/data/schools";
import { schoolProfiles, schoolRegionOptions, type SchoolRegion } from "@/data/school-profiles";
import { siteConfig } from "@/data/site";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata("지역별 학교 안내", "미국 동부·중서부·서부, 영국, 캐나다의 미술·디자인 학교 성격과 공식 지원 정보를 살펴봅니다.", "/schools");

type Props = {
  searchParams: Promise<{ region?: string | string[] }>;
};

export default async function SchoolsPage({ searchParams }: Props) {
  const requestedRegion = (await searchParams).region;
  const regionValue = Array.isArray(requestedRegion) ? requestedRegion[0] : requestedRegion;
  const initialRegion: "all" | SchoolRegion = schoolRegionOptions.some((option) => option.value === regionValue)
    ? regionValue as "all" | SchoolRegion
    : "all";
  const photoCreditSlugs = [...new Set([...schools.map((school) => school.slug), ...schoolProfiles.map((school) => school.slug)])];

  return <>
    <PageHero eyebrow="SCHOOLS & ADMISSIONS" title="지역별 학교 안내" description="이름보다 먼저, 배우고 싶은 것부터. 지역과 학교의 성격, 포트폴리오 준비의 차이를 살펴보세요." />
    <Container className="school-directory-body">
      <SchoolDirectory key={initialRegion} initialRegion={initialRegion} />
      <details id="photo-credits" className="school-photo-credits">
        <summary>학교 사진 출처 및 이용 조건</summary>
        {photoCreditSlugs.map((slug) => <SchoolPhotoCredit key={slug} slug={slug} />)}
      </details>
    </Container>
    <section className="school-bottom"><Container>
      <h2>지원할 학교가 아직 정해지지 않았다면</h2>
      <p>지금까지의 작품과 관심 있는 전공을 바탕으로 준비 방향을 함께 살펴봅니다.</p>
      <a className="editorial-link" href={siteConfig.phoneHref}>전화로 수업 상담 <span aria-hidden="true">↗</span></a>
      <Link href="/programs" className="editorial-link">교육과정 보기 <span aria-hidden="true">↗</span></Link>
    </Container></section>
  </>;
}
