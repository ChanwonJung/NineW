import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ConsultCta from "@/components/ConsultCta";
import { faqItems } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description: "NINE·W에 대해 자주 묻는 질문을 모았습니다.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="자주 묻는 질문" description="상담 전에 자주 확인하시는 내용을 모았습니다." />
      <section className="pg-section">
        <Container>
          <div className="pg-faq">
            {faqItems.map((item, i) => (
              <div key={item.question} className="pg-faq-item">
                <span>Q{i + 1}</span>
                <div>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="pg-note pg-note-center">
            더 궁금한 점은 전화나 인스타그램으로 편하게 물어봐 주세요. 자주 나오는 질문이 더 확인되는 대로 이 목록에 추가하겠습니다.
          </p>
        </Container>
      </section>
      <ConsultCta />
    </>
  );
}
