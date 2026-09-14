"use client";
import {useEffect} from "react";
import {usePathname} from "next/navigation";
export default function ScrollMotion(){
 const pathname=usePathname();
 useEffect(()=>{
  const media=window.matchMedia("(prefers-reduced-motion: reduce)");
  if(media.matches||!("IntersectionObserver" in window))return;
  const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add("enter-view");observer.unobserve(entry.target);}}},{threshold:0.12});
  const elements=document.querySelectorAll("main .section-heading, main .philosophy-grid, main .school-home-entry, main .about-director, main .about-philosophy");
  elements.forEach(el=>observer.observe(el));
  return ()=>{observer.disconnect();elements.forEach(el=>el.classList.remove("enter-view"));};
 },[pathname]);
 return null;
}
