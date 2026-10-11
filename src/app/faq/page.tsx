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
      <PageHero eyebrow="FAQ" title="자주 묻는 질문" />
      <section className="py-14 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl divide-y divide-line">
            {faqItems.map((item) => (
              <div key={item.question} className="py-6">
                <h3 className="font-serif text-lg font-semibold text-ink">
                  {item.question}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.answer}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-sm text-muted">
            더 궁금한 점은 전화나 인스타그램으로 편하게 물어봐 주세요. 자주 나오는
            질문이 더 확인되는 대로 이 목록에 추가하겠습니다.
          </p>
        </Container>
      </section>
      <ConsultCta />
    </>
  );
}
