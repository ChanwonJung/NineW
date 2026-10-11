"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { programs } from "@/data/programs";

const tabs = [{ href: "/programs", label: "수업 안내" }, ...programs.map(p => ({ href: `/programs/${p.slug}`, label: p.name }))];

export default function ProgramTabs() {
  const pathname = usePathname();
  return (
    <nav className="pg-tabs" aria-label="프로그램 메뉴">
      <div className="pg-tabs-inner">
        {tabs.map(tab => <Link key={tab.href} href={tab.href} aria-current={pathname === tab.href ? "page" : undefined}>{tab.label}</Link>)}
      </div>
    </nav>
  );
}
