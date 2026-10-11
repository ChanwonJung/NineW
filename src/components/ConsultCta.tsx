import Link from "next/link";
import Container from "@/components/Container";
import { siteConfig } from "@/data/site";

export default function ConsultCta({ title = "다음 걸음을 함께 준비합니다.", description = "지금까지의 작품과 앞으로의 계획을 들려주세요. 필요한 준비 방향부터 함께 살펴봅니다." }: { title?: string; description?: string }) {
  return <section className="consult-section"><Container className="consult-inner"><div><p className="eyebrow">LET’S TALK ABOUT YOUR WORK</p><h2>{title}</h2><p className="consult-description">{description}</p></div><div className="consult-actions"><Link className="consult-primary" href="/consult">상담 신청 <span aria-hidden="true">↗</span></Link><a href={siteConfig.phoneHref}>전화 문의 {siteConfig.phone}</a><a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram ↗</a></div></Container></section>;
}