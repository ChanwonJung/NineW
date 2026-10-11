"use client";
import {useEffect} from "react";
import {usePathname} from "next/navigation";

// 스크롤 시 나타나는 요소: 아래에서 올라오며 페이드 인, 같은 줄의 형제 요소는 시차를 두고 등장.
// 아래로 스크롤할 때마다 효과가 반복된다(위로 올릴 때는 없음).
const REVEAL = [
 "main .section-heading", "main .points-heading", "main .point-card", "main .results-copy", "main .results-figure",
 "main .results-schools li", "main .results-caption", "main .results-link", "main .program-home-card", "main .school-home-entry",
].join(",");
const LEGACY = "main .philosophy-grid, main .about-director, main .about-philosophy";

// 목표 숫자는 요소의 data-target(고정값)에서 읽고, 진행 중인 애니메이션은 취소해 항상 같은 값에서 끝나게 한다.
const frames = new WeakMap<Element, number>();
function countUp(el: Element) {
 const node = Array.from(el.childNodes).find(n => n.nodeType === Node.TEXT_NODE);
 const target = Number((el as HTMLElement).dataset.target);
 if (!node || !target) return;
 const running = frames.get(el);
 if (running) cancelAnimationFrame(running);
 const start = performance.now(), duration = 1400;
 const tick = (now: number) => {
  const t = Math.min((now - start) / duration, 1);
  node.textContent = String(t >= 1 ? target : Math.round(target * (1 - Math.pow(1 - t, 3))));
  if (t < 1) frames.set(el, requestAnimationFrame(tick));
 };
 node.textContent = "0";
 frames.set(el, requestAnimationFrame(tick));
}

export default function ScrollMotion(){
 const pathname=usePathname();
 useEffect(()=>{
  const media=window.matchMedia("(prefers-reduced-motion: reduce)");
  if(media.matches||!("IntersectionObserver" in window))return;
  const reveal=Array.from(document.querySelectorAll<HTMLElement>(REVEAL));
  const legacy=Array.from(document.querySelectorAll<HTMLElement>(LEGACY));
  reveal.forEach(el=>{
   const siblings=Array.from(el.parentElement?.children??[]).filter(c=>c.matches(REVEAL.replace(/main /g,"")) || c===el);
   el.style.setProperty("--d",`${Math.min(siblings.indexOf(el),6)*110}ms`);
   el.classList.add("reveal");
  });
  const observer=new IntersectionObserver(entries=>{for(const entry of entries){
   const el=entry.target as HTMLElement;
   if(!el.classList.contains("reveal")){
    if(entry.isIntersecting){el.classList.add("enter-view");observer.unobserve(el);}
    continue;
   }
   if(entry.isIntersecting&&entry.intersectionRatio>=0.15){
    if(!el.classList.contains("is-in")&&el.classList.contains("results-figure"))countUp(el.querySelector(".results-number")??el);
    el.classList.add("is-in");
   } else if(!entry.isIntersecting&&entry.boundingClientRect.top>0){
    // 화면 아래쪽으로 벗어난 경우에만 숨긴다. 위로 지나간 요소는 그대로 두어, 올라갈 때는 효과가 없다.
    el.classList.remove("is-in");
   } else if(!entry.isIntersecting){
    el.classList.add("is-in");
   }
  }},{threshold:[0,0.15],rootMargin:"0px 0px -6% 0px"});
  reveal.forEach(el=>observer.observe(el));
  legacy.forEach(el=>observer.observe(el));
  return ()=>{observer.disconnect();reveal.forEach(el=>el.classList.remove("reveal","is-in"));legacy.forEach(el=>el.classList.remove("enter-view"));};
 },[pathname]);
 return null;
}
