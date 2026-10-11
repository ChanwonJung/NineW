import Link from "next/link";
import Container from "@/components/Container";
import ConsultCta from "@/components/ConsultCta";
import HeroSlideshow from "@/components/HeroSlideshow";
import SchoolIdentity from "@/components/SchoolIdentity";
import SchoolPhoto from "@/components/SchoolPhoto";
import { schools } from "@/data/schools";
import { acceptedStudents } from "@/data/accepted-students";
export default function Home() {
 return <>
 <section className="home-intro"><Container><div className="intro-meta"><span>SEOUL · EST. 1997</span></div><div className="intro-grid"><div className="intro-copy"><p className="eyebrow">NINE·W ART STUDIO</p><h1>생각을 발견하고,<br/>나만의 작품으로.</h1><ul className="intro-pledges" aria-label="NINE·W 수업 방식"><li>1:1 수업</li><li>소수정예</li><li>원장 직접 지도</li></ul><p className="intro-description">원장님이 직접 지도하는 <strong>1대1 소수정예</strong> 수업.<br/>나만의 시선에서 포트폴리오가 시작됩니다.</p></div><HeroSlideshow/></div></Container></section>
 <section className="home-promise"><Container><p className="eyebrow">NINE·W의 수업</p><h2>한 명 한 명에게 집중하는,<br/>NINE·W만의 수업.</h2><div className="promise-grid"><div><span>01</span><h3>1:1 수업</h3><p>학생 한 명의 관심사와 속도에 맞춰 수업을 설계합니다.</p></div><div><span>02</span><h3>소수정예</h3><p>한 명 한 명의 포트폴리오를 끝까지 세심하게 살필 수 있도록 소수의 학생과 함께합니다.</p></div><div><span>03</span><h3>원장님이 직접</h3><p>상담부터 수업, 피드백까지 현역 작가인 정석희 원장님이 직접 맡습니다. 처음부터 끝까지 일관된 지도를 받을 수 있습니다.</p></div></div></Container></section>
 <section className="home-philosophy"><Container><p className="eyebrow">OUR PHILOSOPHY · 교육철학</p><div className="philosophy-grid"><h2>자신의 생각이,<br/>자신만의 작품이 되도록.</h2><div><p>생각하고, 발견하고, 깨닫는 과정.<br/>NINE·W는 학생 스스로 자신의 독창성과 창의력을 드러낼 방법을 함께 고민합니다.</p><p>미국과 한국에서 쌓아온 교육 경험과 현역 작가인 원장님이 직접 지도하며, 첫 스케치부터 입학 이후까지 함께합니다.</p><Link className="editorial-link" href="/about">NINE·W의 교육 <span aria-hidden="true">↗</span></Link></div></div></Container></section>
 <section className="home-acceptances"><Container><div className="section-heading"><div><p className="eyebrow">ADMISSIONS · 합격 실적</p><h2>각자의 이야기로,<br/>더 넓은 세계로.</h2></div><Link className="editorial-link" href="/results">합격 실적 전체 보기 <span aria-hidden="true">↗</span></Link></div>
 {acceptedStudents.length>0?<div className="accepted-student-list">{acceptedStudents.slice(0,8).map((s,i)=><div key={i}><span>{s.name}</span><strong>{s.school}</strong></div>)}</div>:<><p className="acceptance-caption">NINE·W 학생들의 합격 사례가 있는 대학</p><div className="acceptance-names">{["RISD","SAIC","Parsons","Pratt","Yale","Cornell"].map(name=><Link key={name} href="/results">{name}<span aria-hidden="true">↗</span></Link>)}</div></>}
 </Container></section>
 <section id="schools" className="home-schools"><Container><div className="section-heading"><div><p className="eyebrow">SCHOOLS · 학교 안내</p><h2>다음 장면이 펼쳐질 곳.</h2></div><Link className="editorial-link" href="/schools">학교별 지원 안내 <span aria-hidden="true">↗</span></Link></div><div className="school-home-grid">{schools.map(s=><Link key={s.slug} href={`/schools/${s.slug}`} className="school-home-entry"><SchoolPhoto slug={s.slug}/><div className="school-card-label"><SchoolIdentity slug={s.slug} name={s.name}/><div><h3>{s.name}</h3><p>{s.nameKo}</p></div><span className="school-card-arrow" aria-hidden="true">↗</span></div></Link>)}</div><Link className="photo-credit-link" href="/schools#photo-credits">학교 사진 출처</Link></Container></section>
 <ConsultCta/></>;
}
