"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import SchoolIdentity from "@/components/SchoolIdentity";
import SchoolPhoto from "@/components/SchoolPhoto";
import { schoolRegions, schools } from "@/data/schools";

// 지역은 URL(?region=east)에서 읽는다. 헤더 메뉴의 미국 동부·서부·유럽이 이 주소로 연결된다.
export default function SchoolDirectory() {
 const param = useSearchParams().get("region");
 const region = schoolRegions.find(r => r.key === param) ?? null;
 return <SchoolDirectoryView key={region?.key ?? "all"} region={region}/>;
}

// useSearchParams를 쓰지 않는 버전. 페이지의 Suspense 대체 화면(전체 목록)으로도 쓴다.
export function SchoolDirectoryView({ region }: { region: (typeof schoolRegions)[number] | null }) {
 const [category, setCategory] = useState("전체");
 const [query, setQuery] = useState("");
 const visible = schools.filter(s => (!region || s.region === region.key) && (category === "전체" || s.tags.includes(category)) && [s.name,s.nameKo,s.fullName,s.location,s.scope].join(" ").toLowerCase().includes(query.trim().toLowerCase()));
 const regionEmpty = region !== null && !schools.some(s => s.region === region.key);
 return <div>
   <nav className="school-regions" aria-label="지역"><Link href="/schools" aria-current={!region ? "page" : undefined}>전체</Link>{schoolRegions.map(r=><Link key={r.key} href={`/schools?region=${r.key}`} aria-current={region?.key===r.key ? "page" : undefined}>{r.label}</Link>)}</nav>
   {regionEmpty ? <div className="school-empty"><p>{region.label} 학교 안내는 준비 중입니다.</p><Link href="/schools">전체 학교 보기</Link></div> : <>
   <div className="school-tools"><div className="school-filters" role="group" aria-label="관심 분야">{["전체","회화·입체","디자인","패션"].map(tag=><button type="button" key={tag} aria-pressed={category===tag} onClick={()=>setCategory(tag)}>{tag}</button>)}</div><label className="school-search"><span className="sr-only">학교명 검색</span><input type="search" placeholder="학교명 검색" value={query} onChange={e=>setQuery(e.target.value)} /></label></div>
   <p className="school-count" aria-live="polite">{region?.label ?? "전체"} 학교 {visible.length}곳 · 관심 분야를 기준으로 살펴보세요</p>
   <div className="school-directory">{visible.map((school)=><Link key={school.slug} className="school-directory-entry" href={`/schools/${school.slug}`}><SchoolPhoto slug={school.slug}/><div className="school-entry-main"><SchoolIdentity slug={school.slug} name={school.name}/><div><span className="school-location">{school.location}</span><h2>{school.name}</h2><p className="school-korean">{school.nameKo}</p></div></div><div className="school-entry-description"><p>{school.intro}</p><span>{school.scope}</span></div><div className="school-entry-end"><span>{school.highlight}</span><span aria-hidden="true">↗</span></div></Link>)}</div>
   {visible.length===0&&<div className="school-empty"><p>조건에 맞는 학교가 없습니다.</p><button type="button" onClick={()=>{setCategory("전체");setQuery("");}}>전체 학교 보기</button></div>}
   </>}
 </div>;
}
