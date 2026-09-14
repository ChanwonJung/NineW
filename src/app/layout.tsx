import type { Metadata } from "next";
import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollMotion from "@/components/ScrollMotion";

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

export const metadata: Metadata = {
  title: {
    default: "나인더블유 | 유학미술 포트폴리오",
    template: "%s | 나인더블유",
  },
  description:
    "정석희 원장님이 직접 지도하는 1대1 소수정예 유학미술학원, 나인더블유입니다. 학생 개개인의 시선으로 포트폴리오를 준비합니다.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} ${notoSerifKr.variable} h-full`}>
      <body className="flex min-h-full flex-col font-sans antialiased">
        <Header />
        <ScrollMotion/>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
