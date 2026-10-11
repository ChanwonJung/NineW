import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "개인정보 처리방침",
  description: "NINE·W가 상담 신청 시 수집하는 개인정보 항목과 처리 방침을 안내합니다.",
};

const sections = [
  {
    title: "1. 수집하는 개인정보 항목",
    body: "상담 신청 시 이름, 연락처, 관심 수업, 선택적으로 입력한 상담 내용을 수집합니다.",
  },
  {
    title: "2. 개인정보의 수집 및 이용 목적",
    body: "수집한 정보는 상담 연락, 수업 안내, 신청 확인 목적으로만 이용합니다.",
  },
  {
    title: "3. 개인정보의 보유 및 이용 기간",
    body: "접수일로부터 최대 90일간 보관 후 파기합니다. 보관 기간 중이라도 삭제를 요청하시면 지체 없이 삭제합니다.",
  },
  {
    title: "4. 개인정보의 제3자 제공 및 위탁",
    body: "수집한 개인정보를 외부에 제공하거나 처리를 위탁하지 않습니다.",
  },
  {
    title: "5. 이용자의 권리",
    body: "이용자는 언제든 자신의 개인정보 열람, 정정, 삭제를 요청할 수 있습니다. 동의를 거부할 권리가 있으며, 다만 이 경우 온라인 상담 접수가 제한될 수 있습니다.",
  },
  {
    title: "6. 개인정보 보호책임자 및 문의처",
    body: `개인정보 관련 문의는 아래 연락처로 해 주세요.\n전화: ${siteConfig.phone}\n주소: ${siteConfig.address.fullAddress}`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="개인정보 처리방침" title="개인정보 처리방침" />
      <section className="py-14 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl space-y-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-serif text-lg font-semibold text-ink">{section.title}</h2>
                <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-muted">
                  {section.body}
                </p>
              </div>
            ))}
            <p className="text-sm text-muted">시행일: 2026년 9월 14일</p>
          </div>
        </Container>
      </section>
    </>
  );
}
