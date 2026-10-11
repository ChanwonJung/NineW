import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper-dim">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2">
        <div>
          <Link href="/" className="brand-home-link"><BrandLogo/></Link>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
            {siteConfig.description}
          </p>
        </div>

        <div className="text-sm text-ink/85">
          <p className="font-medium text-ink">상담 문의</p>
          <p className="mt-2">
            전화{" "}
            <a href={siteConfig.phoneHref} className="text-accent hover:underline">
              {siteConfig.phone}
            </a>
          </p>
          <p className="mt-1">
            인스타그램{" "}
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              @{siteConfig.instagramHandle}
            </a>
          </p>
          <p className="mt-1 text-muted">서울 강남 · 매봉역</p>
        </div>

      </div>

      <div className="border-t border-line px-4 py-5 text-center text-xs text-muted sm:px-6">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        {" · "}
        <Link href="/privacy" className="hover:text-accent">
          개인정보 처리방침
        </Link>
      </div>
    </footer>
  );
}
