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
    { href: "/reviews", label: "학생 후기" },
    { href: "/blog", label: "소식" },
  ],
  "/programs": [{ href: "/programs", label: "수업 안내" }, ...programs.map(p => ({ href: `/programs/${p.slug}`, label: p.name }))],
  "/schools": [
    { href: "/schools/risd", label: "RISD" },
    { href: "/schools/parsons", label: "Parsons" },
    { href: "/schools/pratt", label: "Pratt" },
    { href: "/schools/saic", label: "SAIC" },
    { href: "/schools/mica", label: "MICA" },
    { href: "/schools/fit", label: "FIT" },
  ],
  "/results": [{ href: "/results", label: "합격 실적" }],
  "/gallery": [{ href: "/gallery", label: "학생 작품" }],
  "/visit": [
    { href: "/visit", label: "오시는 길" },
    { href: "/faq", label: "자주 묻는 질문" },
  ],
};

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuClosed, setMenuClosed] = useState(false);

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

        <nav className={menuClosed ? "header-nav hidden items-center lg:flex is-closed" : "header-nav hidden items-center lg:flex"} aria-label="주요 메뉴" onMouseLeave={() => setMenuClosed(false)}>
          {primaryLinks.map((link) => {
            const active = (pathname === link.href || pathname.startsWith(link.href + "/"));
            const children = navChildren[link.href];
            return (
              <div key={link.href} className="nav-item">
                <Link
                  aria-current={active ? "page" : undefined}
                  href={link.href}
                  className="header-menu-link text-ink/80 transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
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
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                aria-current={(pathname === link.href || pathname.startsWith(link.href + "/")) ? "page" : undefined} key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`border-b border-line/70 py-3 text-base ${
                  (pathname === link.href || pathname.startsWith(link.href + "/")) ? "font-medium text-accent" : "text-ink/85"
                }`}
              >
                {link.label}
              </Link>
            ))}
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
