import Container from "@/components/Container";

// 모든 서브 페이지 맨 위 블록: 같은 높이·같은 구성(제목, 한 줄 설명).
export default function PageHero({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <section className="pg-hero">
      <Container>
        <h1>{title}</h1>
        {description && <p className="pg-hero-sub">{description}</p>}
      </Container>
    </section>
  );
}
