import Container from "@/components/Container";

export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-line bg-paper-dim">
      <Container className="py-14 sm:py-20">
        {eyebrow && (
          <p className="text-sm font-medium tracking-wide text-accent">{eyebrow}</p>
        )}
        <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
