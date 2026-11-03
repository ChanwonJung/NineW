import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/data/site";
import { aboutImages } from "@/data/images";

export const metadata: Metadata = {
 title:"학원 소개",
 description:"NINE·W의 역사와 교육철학, 정석희 원장님의 이력과 1대1 소수정예 직접 지도를 소개합니다.",
};
export default function AboutPage(){return <>
 <PageHero title="1997년 뉴저지에서 시작한 유학미술학원" description="학생마다 관심사와 준비 기간이 달라서, 포트폴리오도 학생마다 따로 계획합니다."/>
 <section className="pg-section"><Container>
 <div className="pg-intro">
 <div className="pg-detail-image bg-paper-dim"><Image src={aboutImages.history.src} alt={aboutImages.history.alt} fill sizes="(min-width:1024px) 560px, 100vw" className="object-contain"/></div>
 <div className="pg-intro-text">
 <h2 className="pg-h2">유학미술 교육을 이어온 시간</h2>
 <p>NINE·W는 1997년 미국 동부 뉴저지에서 시작해 서울 강남에서 약 30년간 유학미술 교육을 이어 왔습니다. 그동안 컬럼비아·코넬·예일, 쿠퍼유니언·NYU·RISD·SVA·Pratt·FIT·Parsons·MICA·CMU를 비롯한 미국 동부 학교와 SAIC 등 중서부 학교, CalArts·CCA 등 서부 학교, 영국·독일·캐나다의 미술·디자인 학교 지원을 지도해 왔습니다.</p>
 <p>계획은 지원 국가, 전공, 준비 기간에 따라 학생마다 따로 세웁니다. 학교별 포트폴리오 요건과 평가 기준을 확인한 뒤, 그 안에서 학생의 작품이 잘 드러나도록 구성합니다. 장학금과 입학 결과는 학생의 지원 조건과 해당 연도 심사에 따라 달라집니다.</p>
 </div></div>
 </Container></section>
 <section className="about-philosophy pg-section pg-section-dim"><Container>
 <h2 className="pg-h2">교육 철학</h2>
 <div className="pg-intro pg-intro-top">
 <div className="pg-detail-image"><Image src={aboutImages.philosophy.src} alt={aboutImages.philosophy.alt} fill sizes="(min-width:1024px) 560px, 100vw" className="object-cover"/></div>
 <ol className="pg-list">
 <li><div><h3>주제는 학생의 관심사에서 정합니다</h3><p>수업은 학생이 요즘 무엇을 보고 있는지, 어떤 장면이 기억에 남았는지 이야기하는 데서 시작합니다. 그 이야기를 바탕으로 작품의 주제와 표현 방식을 정합니다.</p></div></li>
 <li><div><h3>작품은 학생이 직접 완성합니다</h3><p>작품을 대신 완성해 주지 않습니다. 학생이 자기 작품을 직접 설명할 수 있도록 작업마다 질문하고 피드백합니다.</p></div></li>
 <li><div><h3>원장님이 1대1로 지도합니다</h3><p>1대1 소수정예 수업을 원장님이 직접 맡습니다. 작품을 가까이에서 보며 지금 필요한 관찰·리서치·표현 작업을 정합니다.</p></div></li>
 </ol></div></Container></section>
 <section className="about-director pg-section"><Container>
 <h2 className="pg-h2">원장님 소개 | 정석희 작가</h2>
 <div className="pg-detail-body pg-director">
 <div className="pg-prose">
 <p>정석희 원장님은 지금도 한국에서 작품을 발표하는 작가이자, 오랫동안 유학미술 학생을 가르쳐 온 교육자입니다.</p>
 <p>작가로 활동하며 보는 현대미술의 흐름을 수업에 반영하고 학생이 원하는 진로에 맞춰 현실적인 준비 방법을 정합니다.</p>
 <div className="director-teaching"><strong>원장님 직접 지도</strong><span>1대1 지도 · 소수정예 수업</span></div>
 </div>
 <div className="pg-card pg-prose">
 <h3>이력과 작품 활동</h3>
 <p>정석희 원장님은 한성대학교 서양화과와 경희대학교 교육대학원 미술교육과를 거쳐, 뉴욕공과대학 대학원에서 커뮤니케이션 아트를 전공했습니다. 지금도 드로잉·회화·영상 작품을 꾸준히 발표하는 작가이자 교육자입니다.</p>
 <p>수업에서는 결과물을 빨리 만드는 것보다, 학생이 입학한 뒤에도 혼자 작업을 이어 갈 수 있게 가르치는 데 중심을 둡니다. 졸업 후 여러 나라에서 작가와 디자이너로 일하는 제자들이 있습니다.</p>
 <Link className="editorial-link" href={siteConfig.directorPortfolioUrl} target="_blank" rel="noopener noreferrer">정석희 작가의 작품 활동 더 보기 <span aria-hidden="true">↗</span></Link>
 </div></div>
 </Container></section>
 </>;}
