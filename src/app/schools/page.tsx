import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { SchoolPhotoCredit } from "@/components/SchoolPhoto";
import SchoolDirectory, { SchoolDirectoryView } from "@/components/SchoolDirectory";
import { schools, schoolsCheckedAt } from "@/data/schools";
import { siteConfig } from "@/data/site";
export const metadata: Metadata = { title: "학교별 지원 안내", description: "RISD, Parsons, Pratt, SAIC, MICA, FIT의 지원 과정과 포트폴리오 요건을 공식 자료에 근거해 살펴봅니다." };
export default function SchoolsPage() {
 return <><PageHero title="학교별 지원 안내" description="RISD, Parsons, Pratt, SAIC, MICA, FIT의 지원 과정과 포트폴리오 요건을 학교별로 정리했습니다."/>
 <Container className="school-directory-body"><div className="school-directory-intro"><p>학부 신입학 중심의 6개 학교 안내입니다. FIT는 Fashion Design AAS를 다룹니다.<br/>분야 분류는 탐색을 위한 것으로, 개설 전공 전체 목록은 아닙니다.<br/>공식 자료 확인 {schoolsCheckedAt}</p><Link href="/results" className="editorial-link">NINE·W 합격 사례 <span aria-hidden="true">↗</span></Link></div><Suspense fallback={<SchoolDirectoryView region={null}/>}><SchoolDirectory/></Suspense><details id="photo-credits" className="school-photo-credits"><summary>학교 사진 출처 및 이용 조건</summary>{schools.map(s=><SchoolPhotoCredit key={s.slug} slug={s.slug}/>)}</details></Container>
 <section className="school-bottom"><Container><h2>지원할 학교가 아직 정해지지 않았다면</h2><p>지금까지 한 작품과 관심 전공을 보고 어떤 학교가 맞을지 상담해 드립니다.</p><a className="editorial-link" href={siteConfig.phoneHref}>전화로 수업 상담 <span aria-hidden="true">↗</span></a><Link href="/programs" className="editorial-link">교육과정 보기 <span aria-hidden="true">↗</span></Link></Container></section></>;
}
