import Link from "next/link";
import Container from "@/components/Container";
import HeroSlideshow from "@/components/HeroSlideshow";
import SchoolIdentity from "@/components/SchoolIdentity";
import SchoolPhoto from "@/components/SchoolPhoto";
import { schoolRegions, schools } from "@/data/schools";
import { acceptedStudents } from "@/data/accepted-students";
import Image from "next/image";
import { programs } from "@/data/programs";
import { programImages } from "@/data/images";
// 홈에는 지역마다 학교를 3곳까지만 보여준다. 학교가 없는 지역은 건너뛰고, 학교를 추가하면 자동으로 나타난다.
const HOME_SCHOOLS_PER_REGION = 3;
const homeSchoolGroups = schoolRegions
 .map(region => ({ ...region, schools: schools.filter(s => s.region === region.key).slice(0, HOME_SCHOOLS_PER_REGION) }))
 .filter(group => group.schools.length > 0);

export default function Home() {
 return <>
 <section className="home-intro"><HeroSlideshow><div className="intro-copy"><h1>생각을 발견하고,<br/>나만의 작품으로</h1><p className="intro-description">원장님이 직접 지도하는 <strong>1대1 소수정예</strong> 수업<br/>나만의 시선에서 포트폴리오가 시작됩니다.</p></div></HeroSlideshow></section>
 <section className="home-results"><Container><div className="results-grid"><div className="results-figure" aria-label="합격률 100%"><span className="results-number" data-target="100">100<small>%</small></span><span className="results-label">수강생 합격률</span></div><div className="results-copy"><h2>수강생 <em>전원 합격</em></h2><p>NINE·W에서 포트폴리오를 준비한 학생 모두 합격했습니다.</p></div></div><p className="results-caption">합격 사례가 있는 대학</p><ul className="results-schools">{schools.map(s=><li key={s.slug}><SchoolIdentity slug={s.slug} name={s.name}/><span>{s.name}</span></li>)}</ul>{acceptedStudents.length>0&&<div className="accepted-student-list">{acceptedStudents.slice(0,8).map((s,i)=><div key={i}><span>{s.name}</span><strong>{s.school}</strong></div>)}</div>}<Link className="results-link" href="/results">합격 실적 전체 보기 <span aria-hidden="true">↗</span></Link></Container></section>
 <section className="home-points"><Container><div className="points-layout"><div className="points-heading"><h2>한 명씩,<br/>원장님이 직접 봅니다</h2></div><div className="point-grid"><div className="point-card" style={{"--i":0} as React.CSSProperties}><span className="point-kw">1:1 수업</span><h3>학생마다<br/>계획을 따로 세웁니다</h3><p>관심사와 준비 기간에 맞춰 과제를 정합니다</p></div><div className="point-card" style={{"--i":1} as React.CSSProperties}><span className="point-kw">소수정예</span><h3>인원을 적게 두고<br/>작품을 하나씩 봅니다</h3><p>모든 작품에 원장님이 피드백합니다</p></div><div className="point-card" style={{"--i":2} as React.CSSProperties}><span className="point-kw">원장 직접 지도</span><h3>상담부터 피드백까지<br/>원장님이 맡습니다</h3><p>처음 상담한 사람이 끝까지 지도합니다</p></div></div></div></Container></section>
 <section className="home-programs"><Container><div className="section-heading"><div><h2>목표에 맞춘 네 가지 수업</h2></div><Link className="editorial-link" href="/programs">수업 안내 보기 <span aria-hidden="true">↗</span></Link></div><div className="program-home-grid">{programs.map((p,i)=><Link key={p.slug} href={`/programs/${p.slug}`} className="program-home-card" style={{"--i":i} as React.CSSProperties}><Image src={programImages[p.slug].src} alt={programImages[p.slug].alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover"/><div className="program-home-label"><h3>{p.name}</h3><p>{p.summary.replace(/입니다\.?$/,"")}</p></div></Link>)}</div></Container></section>
 <section id="schools" className="home-schools"><Container><div className="section-heading"><div><h2>지원 안내가 있는 학교</h2></div><Link className="editorial-link" href="/schools">학교별 지원 안내 <span aria-hidden="true">↗</span></Link></div>{homeSchoolGroups.map(group=><div key={group.key} className="school-home-region"><h3 className="school-region-title">{group.label}</h3><div className="school-home-grid">{group.schools.map(s=><Link key={s.slug} href={`/schools/${s.slug}`} className="school-home-entry"><SchoolPhoto slug={s.slug}/><div className="school-card-label"><SchoolIdentity slug={s.slug} name={s.name}/><div><h4>{s.name}</h4><p>{s.nameKo}</p></div><span className="school-card-arrow" aria-hidden="true">↗</span></div></Link>)}</div></div>)}<Link className="photo-credit-link" href="/schools#photo-credits">학교 사진 출처</Link></Container></section>
</>;
}
