"use client";
import Link from "next/link";
import { useState } from "react";
import SchoolIdentity from "@/components/SchoolIdentity";
import SchoolPhoto from "@/components/SchoolPhoto";
import { schools } from "@/data/schools";

export default function SchoolDirectory() {
 const [category, setCategory] = useState("전체");
 const [query, setQuery] = useState("");
 const visible = schools.filter(s => (category === "전체" || s.tags.includes(category)) && [s.name,s.nameKo,s.fullName,s.location,s.scope].join(" ").toLowerCase().includes(query.trim().toLowerCase()));
 return <div>
   <div className="school-tools"><div className="school-filters" role="group" aria-label="관심 작업 분야">{["전체","회화·입체","디자인","패션"].map(tag=><button type="button" key={tag} aria-pressed={category===tag} onClick={()=>setCategory(tag)}>{tag}</button>)}</div><label className="school-search"><span className="sr-only">학교명 검색</span><input type="search" placeholder="학교명 검색" value={query} onChange={e=>setQuery(e.target.value)} /></label></div>
   <p className="school-count" aria-live="polite">미국 학교 {visible.length}곳 · 관심 작업을 기준으로 살펴보세요</p>
   <div className="school-directory">{visible.map((school)=><Link key={school.slug} className="school-directory-entry" href={`/schools/${school.slug}`}><SchoolPhoto slug={school.slug}/><div className="school-entry-main"><SchoolIdentity slug={school.slug} name={school.name}/><div><span className="school-location">{school.location}</span><h2>{school.name}</h2><p className="school-korean">{school.nameKo}</p></div></div><div className="school-entry-description"><p>{school.intro}</p><span>{school.scope}</span></div><div className="school-entry-end"><span>{school.highlight}</span><span aria-hidden="true">↗</span></div></Link>)}</div>
   {visible.length===0&&<div className="school-empty"><p>조건에 맞는 학교가 없습니다.</p><button type="button" onClick={()=>{setCategory("전체");setQuery("");}}>전체 학교 보기</button></div>}
 </div>;
}
