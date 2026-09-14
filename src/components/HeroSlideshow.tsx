"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { heroSlides as slides } from "@/data/images";
const INTERVAL_MS = 3500;

export default function HeroSlideshow() {
  const [frame, setFrame] = useState({ index: 0, previous: -1, direction: 1, sequence: 0 });
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  function move(direction: number) {
    setFrame(current => ({ index: (current.index + direction + slides.length) % slides.length, previous: current.index, direction, sequence: current.sequence + 1 }));
  }

  useEffect(() => {
    if (paused || hovered) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const timer = window.setInterval(() => {
      if (!document.hidden && !reducedMotion.matches) {
        setFrame(current => ({ index: (current.index + 1) % slides.length, previous: current.index, direction: 1, sequence: current.sequence + 1 }));
      }
    }, INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [paused, hovered, frame.sequence]);

  return (
    <section className="intro-art hero-slideshow" aria-label="학생 작품과 수업 장면" aria-roledescription="슬라이드 쇼"
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onKeyDown={event => {
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault(); setPaused(true); move(event.key === "ArrowRight" ? 1 : -1);
        }
      }}>
      <div className="intro-art-image slideshow-viewport"
        onTouchStart={event => { touchStart.current = { x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY }; }}
        onTouchCancel={() => { touchStart.current = null; }}
        onTouchEnd={event => {
          const start = touchStart.current;
          touchStart.current = null;
          if (!start) return;
          const dx = event.changedTouches[0].clientX - start.x;
          const dy = event.changedTouches[0].clientY - start.y;
          if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) { setPaused(true); move(dx < 0 ? 1 : -1); }
        }}>
        {slides.map((slide, index) => {
          const current = index === frame.index;
          const previous = index === frame.previous;
          return <div key={`${index}-${current || previous ? frame.sequence : "idle"}`} className={`hero-slide ${current ? "is-current" : previous ? "is-previous" : "is-hidden"} ${frame.sequence > 0 ? "has-motion" : ""} ${frame.direction === 1 ? "moves-left" : "moves-right"}`} aria-hidden={!current} role="group" aria-roledescription="슬라이드" aria-label={`${index + 1} / ${slides.length}`}>
            <Image src={slide.src} alt={slide.alt} fill priority={index === 0} loading={index === 0 ? undefined : "eager"} sizes="(min-width: 768px) 55vw, 100vw" className="object-contain" />
          </div>;
        })}
      </div>
      <div className="slideshow-caption" aria-live={paused ? "polite" : "off"} aria-atomic="true"><span>{slides[frame.index].caption}</span><span>{String(frame.index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span></div>
      <div className="slideshow-controls">
        <div className="slideshow-dots" aria-label="사진 선택">{slides.map((slide, index) => <button key={slide.src} type="button" aria-label={`${index + 1}번 사진: ${slide.caption}`} aria-current={index === frame.index ? "true" : undefined} onFocus={() => setPaused(true)} onClick={() => {
          setPaused(true);
          if (index !== frame.index) setFrame(current => ({ index, previous: current.index, direction: 1, sequence: current.sequence + 1 }));
        }}><span /></button>)}</div>
        <div className="slideshow-buttons">
          <button type="button" aria-label="이전 사진" onFocus={() => setPaused(true)} onClick={() => { setPaused(true); move(-1); }}>←</button>
          <button type="button" aria-label={paused ? "자동 재생" : "자동 재생 일시 정지"} onClick={() => setPaused(current => !current)}>{paused ? "재생" : "정지"}</button>
          <button type="button" aria-label="다음 사진" onFocus={() => setPaused(true)} onClick={() => { setPaused(true); move(1); }}>→</button>
        </div>
      </div>
    </section>
  );
}