"use client";

import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, siteConfig } from "@/data/site";
import { programs } from "@/data/programs";

// 메가 메뉴: 메뉴 영역에 마우스를 올리면 모든 메뉴의 하위 페이지가 한 번에 펼쳐진다.
const navChildren: Record<string, { href: string; label: string; sub?: string }[]> = {
  "/about": [
    { href: "/about", label: "학원 소개" },
    // 학생 후기·소식은 콘텐츠 준비 전까지 메뉴에서 숨긴다. 페이지(/reviews, /blog)는 그대로 있다.
    // { href: "/reviews", label: "학생 후기" },
    // { href: "/blog", label: "소식" },
  ],
  "/programs": [{ href: "/programs", label: "수업 안내" }, ...programs.map(p => ({ href: `/programs/${p.slug}`, label: p.name }))],
  "/schools": [
    { href: "/schools?region=us-east", label: "미국 동부" },
    { href: "/schools?region=us-midwest", label: "미국 중서부" },
    { href: "/schools?region=us-west", label: "미국 서부" },
    { href: "/schools?region=uk", label: "영국" },
    { href: "/schools?region=canada", label: "캐나다" },
  ],
  "/results": [{ href: "/results", label: "합격 실적" }],
  "/gallery": [{ href: "/gallery", label: "학생 작품" }],
  "/visit": [
    { href: "/visit", label: "오시는 길" },
    { href: "/faq", label: "자주 묻는 질문" },
  ],
};

// 펼침 영역 높이는 하위 메뉴가 가장 많은 탭에 맞춘다. 메뉴를 추가하면 자동으로 늘어난다.
const megaRows = Math.max(...Object.values(navChildren).map(children => children.length));

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuClosed, setMenuClosed] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  const primaryLinks = navLinks.filter(link => ["/about","/programs","/gallery","/results","/schools","/visit"].includes(link.href));
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="brand-home-link text-ink"
          onClick={() => setOpen(false)}
        >
          <BrandLogo/>
        </Link>

        <nav className={menuClosed ? "header-nav hidden items-center lg:flex is-closed" : "header-nav hidden items-center lg:flex"} aria-label="주요 메뉴" style={{ "--mega-rows": megaRows } as React.CSSProperties} onMouseLeave={() => setMenuClosed(false)}>
          {primaryLinks.map((link) => {
            const active = (pathname === link.href || pathname.startsWith(link.href + "/"));
            const children = navChildren[link.href];
            return (
              <div key={link.href} className="nav-item">
                {/* 상위 메뉴는 이동하지 않고, 마우스를 올리면 펼쳐지는 하위 메뉴로만 이동한다.
                    버튼으로 둔 것은 키보드 포커스로도 하위 메뉴를 펼칠 수 있게 하기 위해서다. */}
                <button
                  type="button"
                  aria-current={active ? "page" : undefined}
                  className="header-menu-link cursor-default text-ink/80"
                >
                  {link.label}
                </button>
                {children && (
                  <div className="nav-dropdown">
                    <ul>
                      {children.map(child => (
                        <li key={child.href}>
                          <Link href={child.href} aria-current={pathname === child.href ? "page" : undefined} onClick={() => setMenuClosed(true)}>
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
          <div className="mega-bg" aria-hidden="true" />
        </nav>

        <button
          type="button"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink lg:hidden"
        >
          <span className="sr-only">메뉴</span>
          {open ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
              <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden>
              <path d="M0 1H18M0 7H18M0 13H18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div id="mobile-navigation" className="border-t border-line bg-paper px-4 pb-6 pt-2 lg:hidden">
          {/* 모바일도 데스크톱과 같이 상위 메뉴는 펼치기만 하고, 하위 메뉴로만 이동한다. */}
          <nav className="flex flex-col">
            {primaryLinks.map((link) => {
              const expanded = mobileSection === link.href;
              return (
                <div key={link.href} className="border-b border-line/70">
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={`mobile-sub-${link.href.slice(1)}`}
                    onClick={() => setMobileSection(expanded ? null : link.href)}
                    className="flex w-full items-center justify-between py-3 text-left text-base text-ink/85"
                  >
                    {link.label}
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden className={`transition-transform ${expanded ? "rotate-180" : ""}`}>
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {expanded && (
                    <ul id={`mobile-sub-${link.href.slice(1)}`} className="pb-3 pl-3">
                      {navChildren[link.href].map(child => (
                        <li key={child.href}>
                          <Link href={child.href} onClick={() => setOpen(false)} className="block py-2 text-[15px] text-ink/70">
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </nav>
          <a
            href={siteConfig.phoneHref}
            className="mt-4 block rounded-full bg-accent px-4 py-3 text-center text-sm font-medium text-paper"
          >
            전화 상담 {siteConfig.phone}
          </a>
        </div>
      )}
    </header>
  );
}
