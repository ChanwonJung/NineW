import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { faqItems } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description: "NINE·W에 자주 묻는 질문을 모았습니다.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero title="자주 묻는 질문" />
      <section className="pg-section">
        <Container>
          <div className="pg-faq">
            {faqItems.map((item, i) => (
              <div key={item.question} className="pg-faq-item">
                <span>Q{i + 1}</span>
                <div>
                  <h2>{item.question}</h2>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="pg-note pg-note-center">
            더 궁금한 점은 전화나 인스타그램으로 편하게 물어봐 주세요.
          </p>
        </Container>
      </section>
    </>
  );
}
