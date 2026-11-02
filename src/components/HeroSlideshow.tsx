"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { heroSlides as slides } from "@/data/images";
const INTERVAL_MS = 3500;

export default function HeroSlideshow({ children }: { children?: React.ReactNode }) {
  const [frame, setFrame] = useState({ index: 0, previous: -1, direction: 1, sequence: 0 });
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  function move(direction: number) {
    setFrame(current => ({ index: (current.index + direction + slides.length) % slides.length, previous: current.index, direction, sequence: current.sequence + 1 }));
  }

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const timer = window.setInterval(() => {
      if (!document.hidden && !reducedMotion.matches) {
        setFrame(current => ({ index: (current.index + 1) % slides.length, previous: current.index, direction: 1, sequence: current.sequence + 1 }));
      }
    }, INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [frame.sequence]);

  return (
    <section className="hero-slideshow" aria-label="학생 작품과 수업 장면" aria-roledescription="슬라이드 쇼"
      onKeyDown={event => {
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault(); move(event.key === "ArrowRight" ? 1 : -1);
        }
      }}>
      <div className="slideshow-viewport"
        onTouchStart={event => { touchStart.current = { x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY }; }}
        onTouchCancel={() => { touchStart.current = null; }}
        onTouchEnd={event => {
          const start = touchStart.current;
          touchStart.current = null;
          if (!start) return;
          const dx = event.changedTouches[0].clientX - start.x;
          const dy = event.changedTouches[0].clientY - start.y;
          if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) move(dx < 0 ? 1 : -1);
        }}>
        {slides.map((slide, index) => {
          const current = index === frame.index;
          const previous = index === frame.previous;
          return <div key={`${index}-${current || previous ? frame.sequence : "idle"}`} className={`hero-slide ${current ? "is-current" : previous ? "is-previous" : "is-hidden"} ${frame.sequence > 0 ? "has-motion" : ""} ${frame.direction === 1 ? "moves-left" : "moves-right"}`} aria-hidden={!current} role="group" aria-roledescription="슬라이드" aria-label={`${index + 1} / ${slides.length}`}>
            <Image src={slide.src} alt={slide.alt} fill priority={index === 0} loading={index === 0 ? undefined : "eager"} sizes="100vw" className="object-cover" />
          </div>;
        })}
      </div>
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content">{children}</div>
      <button type="button" className="hero-arrow is-prev" aria-label="이전 사진" onClick={() => move(-1)}><svg width="30" height="56" viewBox="0 0 30 56" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M24 4L5 28l19 24"/></svg></button>
      <button type="button" className="hero-arrow is-next" aria-label="다음 사진" onClick={() => move(1)}><svg width="30" height="56" viewBox="0 0 30 56" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 4l19 24L6 52"/></svg></button>
      <div className="hero-bottom">
        <div className="slideshow-controls">
          <div className="slideshow-dots" aria-label="사진 선택">{slides.map((slide, index) => <button key={slide.src} type="button" aria-label={`${index + 1}번 사진: ${slide.caption}`} aria-current={index === frame.index ? "true" : undefined} onClick={() => {
            if (index !== frame.index) setFrame(current => ({ index, previous: current.index, direction: 1, sequence: current.sequence + 1 }));
          }}><span /></button>)}</div>
        </div>
      </div>
    </section>
  );
}