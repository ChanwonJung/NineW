import { siteConfig } from "@/data/site";

export default function Footer() {
  const { business } = siteConfig;

  return (
    <footer className="border-t border-line bg-paper-dim text-base text-ink/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pt-16 sm:px-6 lg:grid lg:grid-cols-3 lg:items-end lg:gap-10">
        <div className="flex flex-col gap-2">
          <p><b className="font-bold text-ink">상호명</b>&nbsp; {business.name}</p>
          <p><b className="font-bold text-ink">대표</b>&nbsp; {business.representative}</p>
          <p><b className="font-bold text-ink">등록번호</b>&nbsp; {business.registrationNumber}</p>
          <p className="lg:whitespace-nowrap"><b className="font-bold text-ink">주소</b>&nbsp; {business.address}</p>
        </div>
        <div className="flex flex-col gap-2 lg:justify-self-center">
          <p className="font-bold text-ink">Tel 전화번호</p>
          <a href={siteConfig.phoneHref} className="hover:text-accent">{siteConfig.phone}</a>
        </div>
        <div className="flex flex-col gap-2 lg:justify-self-end">
          <p className="font-bold text-ink">E-mail 이메일</p>
          <a href={`mailto:${siteConfig.email}`} className="underline hover:text-accent">{siteConfig.email}</a>
        </div>
      </div>
      <p className="mx-auto max-w-6xl px-4 pt-12 pb-44 text-sm text-muted sm:px-6 md:pb-28 lg:text-center">
        Copyright © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </p>
    </footer>
  );
}
