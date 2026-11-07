"use client";
import { useLayoutEffect, useRef, useState } from "react";

// 필터 탭: 선택한 탭 아래 밑줄이 미끄러져 옮겨 간다(홈 지역별 학교 안내 탭과 같은 동작).
export default function FilterTabs<T extends string>({ label, options, value, onChange, className = "" }: { label: string; options: { value: T; label: string }[]; value: T; onChange: (v: T) => void; className?: string }) {
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const [bar, setBar] = useState({ left: 0, width: 0 });
  const index = options.findIndex((o) => o.value === value);
  useLayoutEffect(() => {
    const place = () => {
      const el = buttons.current[index];
      if (el) setBar({ left: el.offsetLeft, width: el.offsetWidth });
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [index]);
  return <div className={`school-filters ${className}`} role="group" aria-label={label}>
    {options.map((o, i) => <button type="button" key={o.value} ref={(el) => { buttons.current[i] = el; }} aria-pressed={value === o.value} onClick={() => onChange(o.value)}>{o.label}</button>)}
    <span className="school-filter-bar" aria-hidden="true" data-ready={bar.width > 0 || undefined} style={{ transform: `translateX(${bar.left}px)`, width: bar.width }} />
  </div>;
}
