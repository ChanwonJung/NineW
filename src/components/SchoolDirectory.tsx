"use client";
import Link from "next/link";
import { useState } from "react";
import FilterTabs from "@/components/FilterTabs";
import SchoolIdentity from "@/components/SchoolIdentity";
import SchoolPhoto from "@/components/SchoolPhoto";
import { schools } from "@/data/schools";
import { schoolProfiles, schoolRegionOptions, type SchoolRegion } from "@/data/school-profiles";

type DirectorySchool = {
  slug: string;
  name: string;
  nameKo: string;
  fullName: string;
  location: string;
  region: SchoolRegion;
  regionLabel: string;
  tags: string[];
  intro: string;
  scope: string;
  highlight: string;
  aliases: string[];
  isPilot: boolean;
};

const legacyRegions: Record<string, { region: SchoolRegion; label: string }> = {
  risd: { region: "us-east", label: "미국 동부" },
  parsons: { region: "us-east", label: "미국 동부" },
  pratt: { region: "us-east", label: "미국 동부" },
  saic: { region: "us-midwest", label: "미국 중서부" },
  mica: { region: "us-east", label: "미국 동부" },
  fit: { region: "us-east", label: "미국 동부" },
};

const profileBySlug = new Map(schoolProfiles.map((school) => [school.slug, school]));
const directorySchools: DirectorySchool[] = [
  ...schools.map((school) => {
    const profile = profileBySlug.get(school.slug);
    if (profile) {
      return {
        ...profile,
        scope: profile.levels.join(" · "),
        highlight: profile.submissionType,
        isPilot: true,
      };
    }
    const region = legacyRegions[school.slug] ?? { region: "us-east" as SchoolRegion, label: "미국 동부" };
    return {
      ...school,
      region: region.region,
      regionLabel: region.label,
      aliases: [],
      isPilot: false,
    };
  }),
  ...schoolProfiles.filter((profile) => !schools.some((school) => school.slug === profile.slug)).map((profile) => ({
    ...profile,
    scope: profile.levels.join(" · "),
    highlight: profile.submissionType,
    isPilot: true,
  })),
];

const CATEGORIES = ["전체", "회화·입체", "디자인", "패션"].map((tag) => ({ value: tag, label: tag }));

export default function SchoolDirectory({ initialRegion = "all" }: { initialRegion?: "all" | SchoolRegion }) {
  const [region, setRegion] = useState<"all" | SchoolRegion>(initialRegion);
  const [category, setCategory] = useState("전체");
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const visible = directorySchools.filter((school) =>
    (region === "all" || school.region === region) &&
    (category === "전체" || school.tags.includes(category)) &&
    [school.name, school.nameKo, school.fullName, school.location, school.scope, ...school.aliases]
      .join(" ").toLowerCase().includes(normalizedQuery)
  );

  return <div>
    <div className="school-region-tools">
      <p>지역</p>
      <FilterTabs label="지역" className="school-region-filters" options={schoolRegionOptions} value={region} onChange={setRegion} />
    </div>
    <div className="school-tools">
      <div>
        <p className="school-filter-label">관심 분야</p>
        <FilterTabs label="관심 분야" options={CATEGORIES} value={category} onChange={setCategory} />
      </div>
      <label className="school-search"><span className="sr-only">학교명 검색</span><input type="search" placeholder="학교명 검색" value={query} onChange={(event) => setQuery(event.target.value)} /></label>
    </div>

    <p className="school-count" aria-live="polite">{region === "all" ? "전체 지역" : schoolRegionOptions.find((option) => option.value === region)?.label} {visible.length}곳</p>
    <div className="school-directory">
      {visible.map((school) => <Link key={school.slug} className="school-directory-entry" href={"/schools/" + school.slug}>
        <SchoolPhoto slug={school.slug} name={school.name} />
        <div className="school-entry-main">
          <SchoolIdentity slug={school.slug} name={school.name} />
          <div><span className="school-location">{school.regionLabel} · {school.location}</span><h2>{school.name}</h2><p className="school-korean">{school.nameKo}</p></div>
        </div>
        <div className="school-entry-description"><p>{school.intro}</p><span>{school.scope}</span></div>
        <div className="school-entry-end"><span>{school.highlight}</span></div>
      </Link>)}
    </div>
    {visible.length === 0 && <div className="school-empty"><p>조건에 맞는 학교가 없습니다.</p><button type="button" onClick={() => { setRegion("all"); setCategory("전체"); setQuery(""); }}>전체 학교 보기</button></div>}
  </div>;
}
