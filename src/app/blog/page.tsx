import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "소식",
  description: "NINE·W의 소식과 이야기를 전합니다.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="NINE·W 소식"
        description="수업 이야기와 유학미술 정보를 준비하고 있습니다."
      />
      <section className="pg-section">
        <Container>
          <ComingSoon message="아직 홈페이지에 올린 글이 없습니다. 지금은 인스타그램에서 소식을 전하고 있어요." />
        </Container>
      </section>
    </>
  );
}
