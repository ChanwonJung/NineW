import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ConsultCta from "@/components/ConsultCta";
import { siteConfig } from "@/data/site";
import { aboutImages } from "@/data/images";

export const metadata: Metadata = {
 title:"학원 소개",
 description:"NINE·W의 역사와 교육철학, 정석희 원장님의 이력과 1대1 소수정예 직접 지도를 소개합니다.",
};
export default function AboutPage(){return <>
 <PageHero eyebrow="학원 소개" title="스스로 찾은 질문이 작품이 되도록" description="NINE·W는 학생의 포트폴리오를 같은 모습으로 만드는 것을 목표로 하지 않습니다. 학생마다 다르게 보고, 느끼고, 궁금해하는 지점이 작품으로 이어질 수 있도록 돕습니다."/>
 <section className="border-b border-line"><Container className="py-14 sm:py-16">
 <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">유학미술 교육을 이어온 시간</h2>
 <div className="mt-5 max-w-3xl space-y-4 text-base leading-relaxed text-ink/85">
 <p>NINE·W는 1997년 미국 동부 뉴저지에서 시작해 서울 강남에서 약 30년간 유학미술 교육을 이어 왔습니다. 그동안 컬럼비아·코넬·예일, 쿠퍼유니언·NYU·RISD·SVA·Pratt·FIT·Parsons·MICA·CMU를 비롯한 미국 동부 학교와 SAIC 등 중서부 학교, CalArts·CCA 등 서부 학교, 영국·독일·캐나다의 미술·디자인 학교 지원을 지도해 왔습니다.</p>
 <p>학생마다 지원 국가와 전공, 준비 기간이 다르므로 같은 계획을 적용하지 않습니다. 학교별 포트폴리오 요구와 평가 관점을 살피면서도, 학생의 작품이 한 가지 방식으로 보이지 않도록 방향을 함께 찾습니다. 장학금과 입학 결과는 학생의 지원 조건과 해당 연도 심사에 따라 달라집니다.</p></div>
 <div className="relative mt-8 aspect-[16/9] w-full max-w-3xl overflow-hidden bg-paper-dim"><Image src={aboutImages.history.src} alt={aboutImages.history.alt} fill sizes="(min-width:1024px) 768px, 100vw" className="object-contain"/></div>
 </Container></section>
 <section className="about-philosophy border-b border-line"><Container>
 <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">교육 철학</h2>
 <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
 <div className="relative order-first aspect-[4/3] overflow-hidden lg:order-last"><Image src={aboutImages.philosophy.src} alt={aboutImages.philosophy.alt} fill sizes="(min-width:1024px) 480px, 100vw" className="object-cover"/></div>
 <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
 <div><h3 className="text-lg font-semibold">결과보다 먼저, 질문을 찾습니다</h3><p className="mt-2 text-sm leading-relaxed text-muted">작품은 정답을 따라가는 일이 아니라 자신만의 질문을 발견하는 일에서 시작합니다. 무엇을 보고 있는지, 왜 그 장면이 마음에 남았는지, 그 생각을 어떤 방식으로 표현하고 싶은지 함께 이야기합니다.</p></div>
 <div><h3 className="text-lg font-semibold">작품에는 학생의 언어를 담습니다</h3><p className="mt-2 text-sm leading-relaxed text-muted">포트폴리오에는 잘 만든 결과물만큼 자기 작품을 바라보는 학생의 시선이 담겨야 합니다. 수업에서는 작품을 대신 완성하기보다, 학생이 자신의 생각을 더 선명하게 표현할 수 있도록 질문하고 피드백합니다.</p></div>
 <div><h3 className="text-lg font-semibold">대화하며 방향을 만들어 갑니다</h3><p className="mt-2 text-sm leading-relaxed text-muted">원장님이 직접 지도하는 1대1 소수정예 수업을 운영합니다. 토론과 열린 대화 속에서 학생의 작품을 가까이에서 보며, 지금 필요한 관찰·리서치·표현의 방향을 함께 찾습니다.</p></div>
 </div></div></Container></section>
 <section className="about-director border-b border-line"><Container>
 <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">원장님 소개 | 정석희 작가</h2>
 <div className="mt-5 max-w-3xl space-y-4 text-base leading-relaxed text-ink/85">
 <p>NINE·W 원장님은 수많은 제자를 길러낸 교육자이자, 현재 한국에서 활발히 활동하는 작가입니다.</p>
 <p>따라서 현대미술의 흐름과 방향에 대해 잘 알고 있으며, 미래의 작가, 교육자가 될 제자들과 항상 대화하며, 그들의 희망에 현실적인 방법으로 많은 도움을 주고 있습니다.</p>
 </div><div className="director-teaching max-w-3xl"><strong>원장님 직접 지도</strong><span>1대1 지도 · 소수정예 수업</span></div>
 <h3 className="mt-8 text-xl font-semibold">이력과 작품 활동</h3>
 <div className="mt-5 max-w-3xl space-y-4 text-base leading-relaxed text-ink/85">
 <p>정석희 원장님은 한성대학교 서양화과와 경희대학교 교육대학원 미술교육과를 거쳐, 뉴욕공과대학 대학원에서 커뮤니케이션 아트를 전공했습니다. 지금도 드로잉·회화·영상 작품을 꾸준히 발표하는 작가이자 교육자입니다.</p>
 <p>작가로서 활동해 온 경험과 유학미술 교육 경험을 바탕으로, 학생이 결과물만 빠르게 만드는 데 그치지 않고 자신의 관심을 작품으로 발전시킬 수 있도록 함께합니다. 졸업 후에도 여러 나라에서 작가와 디자이너로 활동하는 제자들의 흐름을 보며, 학생이 입학 이후까지 스스로 작품을 이어 갈 힘을 기르는 수업을 고민합니다.</p>
 </div><Link className="editorial-link mt-5" href={siteConfig.directorPortfolioUrl} target="_blank" rel="noopener noreferrer">정석희 작가의 작품 활동 더 보기 <span aria-hidden="true">↗</span></Link>
 </Container></section><ConsultCta/>
 </>;}
