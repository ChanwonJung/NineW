import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollMotion from "@/components/ScrollMotion";
import QuickConsultBar from "@/components/QuickConsultBar";
import SideQuickMenu from "@/components/SideQuickMenu";
import StructuredData from "@/components/StructuredData";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { siteConfig } from "@/data/site";

const description =
  "정석희 원장님이 직접 지도하는 1대1 소수정예 유학미술학원, NINE·W입니다. 학생마다 따로 계획을 세워 포트폴리오를 준비합니다.";

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
    images: [
      {
        url: "/images/og/ninew-og-v2.jpg",
        width: 1200,
        height: 630,
        alt: "NINE·W 유학미술 포트폴리오 스튜디오",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NINE·W | 유학미술 포트폴리오",
    description,
    images: ["/images/og/ninew-og-v2.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fcfcfa",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full">
      <body
        className="flex min-h-full flex-col font-sans antialiased"
        suppressHydrationWarning
      >
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
