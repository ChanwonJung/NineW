import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "학생 후기",
  description: "NINE·W에서 공부한 학생들의 후기를 소개합니다.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        title="학생 후기"
      />
      <section className="pg-section">
        <Container>
          <ComingSoon />
        </Container>
      </section>
    </>
  );
}
