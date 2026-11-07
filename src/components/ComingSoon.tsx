import { siteConfig } from "@/data/site";

export default function ComingSoon({ message }: { message?: string }) {
  return (
    <div className="pg-soon">
      {message && <p>{message}</p>}
      <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer">
        인스타그램(@{siteConfig.instagramHandle})에서 먼저 확인하기 →
      </a>
    </div>
  );
}
