"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Container from "@/components/Container";
import FilterTabs from "@/components/FilterTabs";
import type { GalleryCategory, GalleryImage } from "@/data/images";

// 작품 분류 탭. 누른 분류의 작품만 보이고, 크게 보기 팝업도 그 분류 안에서 넘긴다.
const CATEGORIES: { value: "all" | GalleryCategory; label: string }[] = [
  { value: "all", label: "전체" },
  { value: "painting", label: "회화" },
  { value: "sculpture", label: "조소" },
  { value: "object", label: "입체" },
  { value: "installation", label: "설치" },
];

// 학생 작품 목록 + 크게 보기 팝업. 작품을 누르면 원본 비율 그대로 크게 열리고,
// 좌우 버튼·키보드 화살표·휴대폰 밀기로 다음/이전 작품을 본다. Esc나 바깥을 누르면 닫힌다.
export default function Gallery({ images }: { images: GalleryImage[] }) {
  const [category, setCategory] = useState<"all" | GalleryCategory>("all");
  const all = category === "all" ? images : images.filter(image => image.category === category);
  const [index, setIndex] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const touch = useRef<number | null>(null);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (index !== null && !d.open) d.showModal();
    if (index === null && d.open) d.close();
  }, [index]);

  function open(i: number, el: HTMLButtonElement) {
    opener.current = el;
    setIndex(i);
  }
  function close() {
    setIndex(null);
    opener.current?.focus();
  }
  function move(step: number) {
    setIndex(i => (i === null ? i : (i + step + all.length) % all.length));
  }

  const current = index === null ? null : all[index];

  return (
    <>
      <section className="pg-section">
        <Container>
          <FilterTabs label="작품 분류" className="gallery-filters" options={CATEGORIES} value={category} onChange={c => { setIndex(null); setCategory(c); }} />
          <div className="pg-photo-grid">
            {all.map((image, i) => (
              <button key={image.src} type="button" className="pg-photo" aria-label={`${image.alt} 크게 보기`} onClick={e => open(i, e.currentTarget)}>
                <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
              </button>
            ))}
          </div>
        </Container>
      </section>

      <dialog
        ref={dialog}
        className="lightbox"
        aria-label="작품 크게 보기"
        onClose={() => { if (index !== null) close(); }}
        onClick={e => { if (e.target === e.currentTarget) close(); }}
        onKeyDown={e => {
          if (e.key === "ArrowRight") { e.preventDefault(); move(1); }
          if (e.key === "ArrowLeft") { e.preventDefault(); move(-1); }
        }}
        onTouchStart={e => { touch.current = e.changedTouches[0].clientX; }}
        onTouchEnd={e => {
          const start = touch.current; touch.current = null;
          if (start === null) return;
          const dx = e.changedTouches[0].clientX - start;
          if (Math.abs(dx) > 50) move(dx < 0 ? 1 : -1);
        }}
      >
        {current && (
          <figure className="lightbox-figure" onClick={e => { if (e.target === e.currentTarget) close(); }}>
            <div className="lightbox-image" key={current.src}>
              <Image src={current.src} alt={current.alt} fill sizes="92vw" className="object-contain" priority />
            </div>
            <figcaption>
              <span className="lightbox-count">{(index ?? 0) + 1} / {all.length}</span>
            </figcaption>
          </figure>
        )}
        <button type="button" className="lightbox-close" aria-label="닫기" onClick={close}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
        </button>
        {all.length > 1 && <>
          <button type="button" className="lightbox-nav is-prev" aria-label="이전 작품" onClick={() => move(-1)}>
            <svg width="16" height="28" viewBox="0 0 16 28" fill="none" aria-hidden="true"><path d="M13 2L3 14l10 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <button type="button" className="lightbox-nav is-next" aria-label="다음 작품" onClick={() => move(1)}>
            <svg width="16" height="28" viewBox="0 0 16 28" fill="none" aria-hidden="true"><path d="M3 2l10 12L3 26" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </>}
      </dialog>
    </>
  );
}
