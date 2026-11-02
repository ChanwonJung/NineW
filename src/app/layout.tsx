import type { Metadata } from "next";
import { Suspense } from "react";
import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollMotion from "@/components/ScrollMotion";
import QuickConsultBar from "@/components/QuickConsultBar";
import SideQuickMenu from "@/components/SideQuickMenu";
import StructuredData from "@/components/StructuredData";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { siteConfig } from "@/data/site";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const notoSerifKr = Noto_Serif_KR({
  variable: "--font-noto-serif-kr",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const description =
  "정석희 원장님이 직접 지도하는 1대1 소수정예 유학미술학원, NINE·W입니다. 학생 개개인의 시선으로 포트폴리오를 준비합니다.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "NINE·W | 유학미술 포트폴리오",
    template: "%s | NINE·W",
  },
  description,
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "NINE·W | 유학미술 포트폴리오",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "NINE·W | 유학미술 포트폴리오",
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} ${notoSerifKr.variable} h-full`}>
      <body data-deploy-test="2026-11-02" className="flex min-h-full flex-col font-sans antialiased">
        <StructuredData />
        <Header />
        <ScrollMotion/>
        <main className="flex-1">{children}</main>
        <Footer />
        <QuickConsultBar />
        <SideQuickMenu />
        <Suspense fallback={null}>
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        </Suspense>
      </body>
    </html>
  );
}
