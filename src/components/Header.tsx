"use client";

import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, siteConfig } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

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

        <nav className="hidden items-center gap-4 lg:flex">
          {primaryLinks.map((link) => {
            const active = (pathname === link.href || pathname.startsWith(link.href + "/"));
            return (
              <Link
                aria-current={(pathname === link.href || pathname.startsWith(link.href + "/")) ? "page" : undefined} key={link.href}
                href={link.href}
                className={`header-menu-link transition-colors hover:text-accent ${
                  active ? "font-medium text-accent" : "text-ink/80"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="/visit#consult-form"
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-accent-dark"
          >
            상담 신청
          </a>
        </div>

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
