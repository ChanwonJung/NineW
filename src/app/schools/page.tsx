import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { SchoolPhotoCredit } from "@/components/SchoolPhoto";
import SchoolDirectory from "@/components/SchoolDirectory";
import { schools } from "@/data/schools";
import { schoolProfiles, schoolRegionOptions, type SchoolRegion } from "@/data/school-profiles";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata("지역별 학교 안내", "미국 동부·중서부·서부, 영국, 캐나다의 미술·디자인 학교 성격과 공식 지원 정보를 살펴봅니다.", "/schools");

type Props = {
  searchParams: Promise<{ region?: string | string[] }>;
};

// 메뉴의 지역 링크(/schools?region=…)로 들어오면 그 지역 탭이 선택된 채로 열린다.
export default async function SchoolsPage({ searchParams }: Props) {
  const requestedRegion = (await searchParams).region;
  const regionValue = Array.isArray(requestedRegion) ? requestedRegion[0] : requestedRegion;
  const initialRegion: "all" | SchoolRegion = schoolRegionOptions.some((option) => option.value === regionValue)
    ? regionValue as "all" | SchoolRegion
    : "all";
  const photoCreditSlugs = [...new Set([...schools.map((school) => school.slug), ...schoolProfiles.map((school) => school.slug)])];

  return <>
    <PageHero title="지역별 학교 안내" />
    <Container className="school-directory-body">
      <SchoolDirectory key={initialRegion} initialRegion={initialRegion} />
      <details id="photo-credits" className="school-photo-credits">
        <summary>학교 사진 출처 및 이용 조건</summary>
        {photoCreditSlugs.map((slug) => <SchoolPhotoCredit key={slug} slug={slug} />)}
      </details>
    </Container>
  </>;
}
