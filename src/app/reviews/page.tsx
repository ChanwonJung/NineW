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
        description="본인 또는 보호자의 게시 동의를 확인한 후기부터 차례로 소개할 예정입니다."
      />
      <section className="pg-section">
        <Container>
          <ComingSoon message="아직 게시 동의를 확인한 후기가 준비되지 않았습니다. 동의된 후기가 확인되는 대로 이 자리에 소개해 드리겠습니다." />
        </Container>
      </section>
    </>
  );
}
