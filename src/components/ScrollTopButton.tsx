"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// 화면 오른쪽 아래의 맨 위로 버튼. 조금 내려간 뒤에만 나타나고, 하단 상담 바가 있으면 그 위에 뜬다.
export default function ScrollTopButton() {
  const pathname = usePathname();
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const check = () => setShown(window.scrollY > 480);
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, [pathname]);

  if (pathname?.startsWith("/admin")) return null;

  function toTop() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    // 키보드 사용자가 페이지 처음부터 다시 이동할 수 있도록 초점을 맨 위로 돌린다.
    document.querySelector<HTMLElement>(".brand-home-link")?.focus({ preventScroll: true });
  }

  return (
    <button type="button" className={`to-top ${shown ? "is-shown" : ""}`} aria-label="맨 위로" tabIndex={shown ? 0 : -1} aria-hidden={!shown} onClick={toTop}>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 15V3M4 8l5-5 5 5" /></svg>
      <span>TOP</span>
    </button>
  );
}
