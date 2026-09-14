import { siteConfig } from "@/data/site";

export default function ComingSoon({ message }: { message: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-line bg-paper-dim p-10 text-center">
      <p className="text-base leading-relaxed text-ink/80">{message}</p>
      <a
        href={siteConfig.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-sm font-medium text-accent hover:underline"
      >
        인스타그램(@{siteConfig.instagramHandle})에서 먼저 확인하기 →
      </a>
    </div>
  );
}
