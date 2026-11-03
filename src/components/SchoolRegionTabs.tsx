"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";

export type RegionTabSchool = { slug: string; name: string; nameKo: string; location: string; photo?: string };
export type RegionTab = { key: string; label: string; total: number; schools: RegionTabSchool[] };

// 제목 옆 지역 탭 + 그 지역 학교 3곳. 탭 밑줄은 선택한 탭으로 미끄러져 가고, 카드는 지역이 바뀔 때 차례로 떠오른다.
export default function SchoolRegionTabs({ title, regions }: { title: string; regions: RegionTab[] }) {
  const [index, setIndex] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const [bar, setBar] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    const place = () => {
      const el = tabs.current[index];
      if (el) setBar({ left: el.offsetLeft, width: el.offsetWidth });
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [index]);

  function onKey(e: React.KeyboardEvent, i: number) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (i + (e.key === "ArrowRight" ? 1 : -1) + regions.length) % regions.length;
    setIndex(next);
    tabs.current[next]?.focus();
  }

  const region = regions[index];

  return (
    <div className="rtabs">
      <div className="rtabs-head">
        <h2>{title}</h2>
        <div className="rtabs-list" role="tablist" aria-label="지역">
          {regions.map((r, i) => (
            <button
              key={r.key}
              ref={el => { tabs.current[i] = el; }}
              type="button"
              role="tab"
              id={`rtab-${r.key}`}
              aria-selected={i === index}
              aria-controls="rtabs-panel"
              tabIndex={i === index ? 0 : -1}
              onClick={() => setIndex(i)}
              onKeyDown={e => onKey(e, i)}
            >
              {r.label}
            </button>
          ))}
          <span className="rtabs-bar" aria-hidden="true" style={{ transform: `translateX(${bar.left}px)`, width: bar.width }} />
        </div>
      </div>

      <div id="rtabs-panel" role="tabpanel" aria-labelledby={`rtab-${region?.key}`} className="rtabs-grid" key={region?.key}>
        {region?.schools.map((s, i) => (
          <Link key={s.slug} href={`/schools/${s.slug}`} className="rtabs-card" style={{ "--i": i } as React.CSSProperties}>
            <span className="rtabs-photo">
              {s.photo && <Image src={s.photo} alt={`${s.name} 캠퍼스`} fill sizes="(min-width: 1024px) 400px, (min-width: 640px) 33vw, 100vw" className="object-cover" />}
            </span>
            <span className="rtabs-text">
              <strong>{s.name}</strong>
              <span>{s.nameKo}</span>
              <em>{s.location}</em>
              <span className="rtabs-arrow" aria-hidden="true">↗</span>
            </span>
          </Link>
        ))}
      </div>

      {region && (
        <div className="rtabs-more" key={`more-${region.key}`}>
          <Link className="more-pill" href={`/schools?region=${region.key}`}>
            {region.label} 학교 더보기 <span className="more-pill-count">{region.total}곳</span>
            <span className="more-pill-arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      )}
    </div>
  );
}
