import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import ProgramTabs from "@/components/ProgramTabs";
import { getProgram, programs } from "@/data/programs";
import { programImages } from "@/data/images";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return programs.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgram(slug);
  return program ? { title: program.name, description: program.summary } : { title: "프로그램을 찾을 수 없습니다" };
}

export default async function ProgramPage({ params }: Props) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) notFound();
  const index = programs.findIndex(p => p.slug === slug);
  const image = programImages[slug];
  const next = programs[(index + 1) % programs.length];

  return (
    <>
      <section className="pg-hero">
        <Container>
          <h1>{program.name}</h1>
          <p className="pg-hero-sub">{program.summary}</p>
        </Container>
      </section>
      <ProgramTabs />

      <section className="pg-section">
        <Container>
          <div className="pg-intro">
            {image && (
              <div className="pg-detail-image">
                <Image src={image.src} alt={image.alt} fill priority sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
              </div>
            )}
            <div className="pg-intro-text">
              <h2 className="pg-h2">{program.name} 소개</h2>
              {program.description.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </Container>
      </section>

      <section className="pg-section pg-section-dim">
        <Container>
          <h2 className="pg-h2">이런 학생에게</h2>
          <ul className="pg-fit-grid">
            {program.fit.map(item => <li key={item}><p>{item}</p></li>)}
          </ul>
        </Container>
      </section>

      <section className="pg-section">
        <Container>
          <h2 className="pg-h2">수업 진행</h2>
          <ol className="pg-step-grid">
            {program.steps.map(([title, text], i) => <li key={title}><span>{i + 1}</span><strong>{title}</strong><p>{text}</p></li>)}
          </ol>
          <div className="pg-pager">
            <Link href="/programs">← 수업 안내</Link>
            <Link href={`/programs/${next.slug}`}>다음 · {next.name} →</Link>
          </div>
        </Container>
      </section>

    </>
  );
}
