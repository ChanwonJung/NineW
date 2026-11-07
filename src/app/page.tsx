import Link from "next/link";
import Container from "@/components/Container";
import HeroSlideshow from "@/components/HeroSlideshow";
import SchoolIdentity from "@/components/SchoolIdentity";
import SchoolRegionTabs, { type RegionTab } from "@/components/SchoolRegionTabs";
import schoolPhotos from "@/data/school-photos.json";
import { schools } from "@/data/schools";
import { schoolProfiles, schoolRegionOptions } from "@/data/school-profiles";
import { acceptedStudents } from "@/data/accepted-students";
import Image from "next/image";
import { programs } from "@/data/programs";
import { programImages } from "@/data/images";
// 홈에는 지역마다 학교를 3곳까지만 보여준다. 학교가 없는 지역은 건너뛰고, 학교를 추가하면 자동으로 나타난다.
const HOME_SCHOOLS_PER_REGION = 3;
// 지원 안내가 있는 학교(schools)를 먼저, 그다음 학교 소개(schoolProfiles) 순서로 고른다.
// CCA는 2026–27학년도 이후 운영 종료 예정이라 홈 소개에서는 뺀다.
const HOME_EXCLUDED = new Set(["cca"]);
const profileBySlug = new Map(schoolProfiles.map(p => [p.slug, p]));
const homeOrder = [...new Set([...schools.map(s => s.slug), ...schoolProfiles.map(p => p.slug)])]
 .map(slug => profileBySlug.get(slug))
 .filter((p): p is (typeof schoolProfiles)[number] => !!p && !HOME_EXCLUDED.has(p.slug));
const homeSchoolGroups = schoolRegionOptions
 .filter(option => option.value !== "all")
 .map(option => ({ key: option.value, label: option.label, schools: homeOrder.filter(p => p.region === option.value).slice(0, HOME_SCHOOLS_PER_REGION) }))
 .filter(group => group.schools.length > 0);
const photoSrc = (slug: string) => (schoolPhotos as Record<string, { src: string }>)[slug]?.src;
const regionTabs: RegionTab[] = homeSchoolGroups.map(group => ({
 key: group.key,
 label: group.label,
 schools: group.schools.map(s => ({ slug: s.slug, name: s.name, nameKo: s.nameKo, location: s.location, photo: photoSrc(s.slug) })),
}));

export default function Home() {
 return <>
 <section className="home-intro"><HeroSlideshow><div className="intro-copy"><h1>생각을 발견하고<br/>나만의 작품으로</h1><p className="intro-description">원장님이 직접 지도하는 <strong>1대1 소수정예</strong> 수업<br/>나만의 시선에서 포트폴리오가 시작됩니다.</p></div></HeroSlideshow></section>
 <section className="home-results"><Container><div className="results-grid"><div className="results-figure" aria-label="합격률 100%"><span className="results-number" data-target="100">100<small>%</small></span><span className="results-label">수강생 합격률</span></div><div className="results-copy"><h2>수강생 <em>전원 합격</em></h2><p>NINE·W에서 포트폴리오를 준비한 학생 모두 합격했습니다.</p></div></div><p className="results-caption">합격 사례가 있는 대학</p><ul className="results-schools">{schools.map(s=><li key={s.slug}><SchoolIdentity slug={s.slug} name={s.name}/><span>{s.name}</span></li>)}</ul>{acceptedStudents.length>0&&<div className="accepted-student-list">{acceptedStudents.slice(0,8).map((s,i)=><div key={i}><span>{s.name}</span><strong>{s.school}</strong></div>)}</div>}<div className="results-more"><Link className="more-pill" href="/results">합격 실적 전체 보기 <span className="more-pill-arrow" aria-hidden="true">→</span></Link></div></Container></section>
 <section className="home-points"><Container><div className="points-layout"><div className="points-heading"><h2>한 명에게 집중하는<br/>세 가지 약속</h2></div><div className="point-grid"><div className="point-card" style={{"--i":0} as React.CSSProperties}><span className="point-kw">1:1 수업</span><h3>한 명의 속도에 맞춘<br/>나만의 맞춤 수업</h3><p>관심사에서 출발하는 맞춤 지도</p></div><div className="point-card" style={{"--i":1} as React.CSSProperties}><span className="point-kw">소수정예</span><h3>소수의 학생과 함께<br/>끝까지 세심하게</h3><p>모든 작품을 가까이에서 확인</p></div><div className="point-card" style={{"--i":2} as React.CSSProperties}><span className="point-kw">원장 직접 지도</span><h3>상담부터 피드백까지<br/>원장님이 직접</h3><p>처음부터 끝까지 일관된 지도</p></div></div></div></Container></section>
 <section className="home-programs"><Container><div className="section-heading"><div><h2>목표에 맞춘 네 가지 수업</h2></div></div><div className="program-home-grid">{programs.map((p,i)=><Link key={p.slug} href={`/programs/${p.slug}`} className="program-home-card" style={{"--i":i} as React.CSSProperties}><Image src={programImages[p.slug].src} alt={programImages[p.slug].alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover"/><div className="program-home-label"><h3>{p.name}</h3><p>{p.summary.replace(/입니다\.?$/,"")}</p></div></Link>)}</div></Container></section>
 <section id="schools" className="home-schools home-schools-tabs"><Container><SchoolRegionTabs title="지역별 학교 안내" regions={regionTabs}/><Link className="photo-credit-link" href="/schools#photo-credits">학교 사진 출처</Link></Container></section>
</>;
}
