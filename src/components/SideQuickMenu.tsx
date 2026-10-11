"use client";
import { useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { trackEvent } from "@/lib/analytics";

type Item = { key: string; label: string; href: string; external?: boolean; icon: ReactNode };

const svg = { width: 28, height: 28, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true } as const;

const items: Item[] = [
  { key: "consult", label: "상담 신청", href: "/consult", icon: <svg {...svg}><rect x="4" y="5" width="16" height="15" rx="1.5" /><path d="M4 10h16M8 3v4M16 3v4" /></svg> },
  { key: "kakao", label: "카톡 상담", href: siteConfig.kakaoUrl, external: true, icon: <svg {...svg}><path d="M12 4C7.6 4 4 6.9 4 10.4c0 2.2 1.5 4.2 3.7 5.3L7 19l3.5-2.1c.5.1 1 .1 1.5.1 4.4 0 8-2.9 8-6.6S16.4 4 12 4z" /></svg> },
  { key: "phone", label: "전화 상담", href: siteConfig.phoneHref, icon: <svg {...svg}><path d="M6.6 4h3l1.4 4-2 1.3a11 11 0 0 0 5.7 5.7l1.3-2 4 1.4v3A2 2 0 0 1 18 19C10.8 19 5 13.2 5 6a2 2 0 0 1 1.6-2z" /></svg> },
  { key: "instagram", label: "인스타그램", href: siteConfig.instagramUrl, external: true, icon: <svg {...svg}><rect x="4" y="4" width="16" height="16" rx="4.5" /><circle cx="12" cy="12" r="3.6" /><circle cx="16.8" cy="7.2" r=".6" fill="currentColor" /></svg> },
  { key: "blog", label: "블로그", href: siteConfig.blogUrl, external: true, icon: <svg {...svg}><rect x="3.5" y="3.5" width="17" height="17" rx="4.5" /><path d="M9.5 7.5v9" /><circle cx="12.6" cy="13.2" r="3.1" /></svg> },
];

export default function SideQuickMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);
  if (pathname?.startsWith("/admin")) return null;
  const visible = items.filter(item => item.href);

  return (
    <aside className={`side-quick ${open ? "is-open" : "is-closed"}`} aria-label="바로가기 메뉴">
      <button type="button" className="side-quick-toggle" aria-expanded={open} aria-controls="side-quick-list" aria-label={open ? "바로가기 메뉴 접기" : "바로가기 메뉴 펼치기"} onClick={() => setOpen(current => !current)}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 2l5 5-5 5" /></svg>
      </button>
      <ul id="side-quick-list" className="side-quick-list" inert={!open}>
        {visible.map(item => {
          const body = <>{item.icon}<span>{item.label}</span></>;
          const track = () => trackEvent("quick_menu_click", { item: item.key });
          return <li key={item.key}>
            {item.external
              ? <a href={item.href} target="_blank" rel="noopener noreferrer" onClick={track}>{body}</a>
              : item.href.startsWith("tel:")
                ? <a href={item.href} onClick={track}>{body}</a>
                : <Link href={item.href} onClick={track}>{body}</Link>}
          </li>;
        })}
      </ul>
    </aside>
  );
}
