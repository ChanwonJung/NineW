import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { aboutImages } from "@/data/images";

export const metadata: Metadata = {
 title:"학원 소개",
 description:"NINE·W의 역사와 교육철학, 정석희 원장의 주요 이력을 소개합니다.",
};
export default function AboutPage(){return <>
 <PageHero title="1997년 뉴저지에서 시작한 유학미술학원" description="학생마다 관심사와 준비 기간이 달라서, 포트폴리오도 학생마다 따로 계획합니다."/>
 <section className="pg-section"><Container>
 <div className="pg-intro">
 <div className="pg-detail-image bg-paper-dim"><Image src={aboutImages.history.src} alt={aboutImages.history.alt} fill sizes="(min-width:1024px) 560px, 100vw" className="object-contain"/></div>
 <div className="pg-intro-text">
 <h2 className="pg-h2">유학미술 교육을 이어온 시간</h2>
 <p>NINE·W는 1997년 미국 동부 뉴저지에서 시작해 서울 강남에서 약 30년간 유학미술 교육을 이어 왔습니다. 그동안 컬럼비아·코넬·예일, 쿠퍼유니언·NYU·RISD·SVA·Pratt·FIT·Parsons·MICA·CMU를 비롯한 미국 동부 학교와 SAIC 등 중서부 학교, CalArts·CCA 등 서부 학교, 영국·독일·캐나다의 미술·디자인 학교 합격생을 배출해 왔습니다.</p>
 </div></div>
 </Container></section>
 <section className="about-philosophy pg-section pg-section-dim"><Container>
 <h2 className="pg-h2">교육 철학</h2>
 <div className="pg-intro pg-intro-top">
 <div className="pg-detail-image"><Image src={aboutImages.philosophy.src} alt={aboutImages.philosophy.alt} fill sizes="(min-width:1024px) 560px, 100vw" className="object-cover"/></div>
 <div className="philosophy-panel">
 <section className="philosophy-point"><span>01</span><div><h3>결과보다 먼저, 질문을 찾습니다</h3><p>작품은 정답을 따라가는 일이 아니라 자신만의 질문을 발견하는 일에서 시작합니다. 무엇을 보고 있는지, 왜 그 장면이 마음에 남았는지, 그 생각을 어떤 방식으로 표현하고 싶은지 함께 이야기합니다.</p></div></section>
 <section className="philosophy-point"><span>02</span><div><h3>작품에는 학생의 언어를 담습니다</h3><p>포트폴리오에는 잘 만든 결과물만큼 자기 작품을 바라보는 학생의 시선이 담겨야 합니다. 작품을 대신 완성하기보다 학생이 자신의 생각을 더 선명하게 표현할 수 있도록 질문하고 피드백합니다.</p></div></section>
 <section className="philosophy-point"><span>03</span><div><h3>대화하며 방향을 만들어 갑니다</h3><p>토론과 열린 대화 속에서 학생의 작품을 가까이 살피고, 지금 필요한 관찰·리서치·표현의 방향을 함께 찾습니다.</p></div></section>
 </div></div></Container></section>
 <section className="about-director pg-section"><Container>
 <article className="director-card">
  <header className="director-card-heading">
   <p>Director.</p>
   <h2>Seok Hee<br/>Jung</h2>
  </header>
  <div className="director-card-body">
   <section className="director-profile-row" aria-labelledby="director-education">
    <h3 id="director-education">학력</h3>
    <ul className="director-education-list">
     <li>School of Visual Arts, Continuing Education in Animation</li>
     <li>M.A., Communication Art, New York Institute of Technology</li>
     <li>M.A., Art Education, Kyung Hee University</li>
     <li>B.F.A., Fine Art, Hansung University</li>
    </ul>
   </section>
   <section className="director-profile-row" aria-labelledby="director-career">
    <h3 id="director-career">경력</h3>
    <div className="director-career-groups">
     <section className="director-career-group">
      <h4>Solo Exhibition</h4>
      <ul className="director-entry-list">
       <li>Ground and Contour, Youngeun Museum of Contemporary Art, Gwangju, Gyeonggi-do, <time dateTime="2026">2026</time></li>
       <li>Via Dolorosa, Jeoldusan Martyrs&apos; Shrine, Seoul, <time dateTime="2026">2026</time></li>
       <li>Silence and Stillness, Dangjin Culture and Arts Center, Dangjin, <time dateTime="2025">2025</time></li>
       <li>Reason for the Landscape, Space Super Normal Gallery, Seoul, <time dateTime="2024">2024</time></li>
       <li>Wave, Gaze, Walk, Seoul Arts Center, Doam Gallery, Seoul, <time dateTime="2024">2024</time></li>
      </ul>
     </section>
     <section className="director-career-group">
      <h4>Group Exhibition</h4>
      <ul className="director-entry-list">
       <li>BETWEEN 0 AND 1, Seongnam Cube Art Museum, Seongnam, <time dateTime="2026">2026</time></li>
       <li>Self-Portrait, Self-Portrait, Gallery R, Seoul, <time dateTime="2026">2026</time></li>
       <li>The Drawing, Personal Definitions, SOMA Drawing Center, Seoul, <time dateTime="2025">2025</time></li>
       <li>Nine Turning Points, Youngeun Museum of Contemporary Art, Gwangju, Gyeonggi-do, <time dateTime="2025">2025</time></li>
       <li>Figuration Circuits, Ilmin Museum of Art, Seoul, <time dateTime="2025">2025</time></li>
      </ul>
     </section>
     <section className="director-career-group">
      <h4>Two-Person Exhibition</h4>
      <ul className="director-entry-list">
       <li>Within and Without, Gallery R, Seoul, <time dateTime="2024">2024</time></li>
       <li>Landscape of the Mind, Korean Cultural Center, Washington, D.C., <time dateTime="2023">2023</time></li>
       <li>Via Dolorosa, Seosomun Shrine History Museum, Seoul, <time dateTime="2021">2021</time></li>
      </ul>
     </section>
     <section className="director-career-group">
      <h4>Public Collection</h4>
      <ul className="director-entry-list">
       <li>National Museum of Contemporary Art, Art Bank</li>
       <li>Museum of Contemporary Art Busan</li>
       <li>Jeju Museum of Contemporary Art</li>
       <li>OCI Museum of Art</li>
       <li>Youngeun Museum of Contemporary Art</li>
      </ul>
     </section>
    </div>
   </section>
  </div>
 </article>
 </Container></section>
 </>;}
