import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const alt = "NINE·W · 유학미술 포트폴리오";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const TITLE = "NINE·W";
const CAPTION = "유학미술 포트폴리오 스튜디오";

async function loadNotoSansKr(text: string) {
  const cssUrl = `https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@600&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(cssUrl)).text();
  const match = css.match(/src: url\(([^)]+)\) format\('(?:opentype|truetype)'\)/);
  if (!match) throw new Error("Noto Sans KR font source not found");
  const fontRes = await fetch(match[1]);
  return fontRes.arrayBuffer();
}

export default async function Image() {
  const text = `${TITLE}${CAPTION}${siteConfig.tagline}${siteConfig.address.fullAddress}`;
  const fontData = await loadNotoSansKr(text);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#20211f",
          color: "#fcfcfa",
          padding: "72px",
          fontFamily: "Noto Sans KR",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 6, color: "#8891c9" }}>NINE · W</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", fontSize: 82, fontWeight: 600, letterSpacing: -2 }}>{TITLE}</div>
          <div style={{ display: "flex", fontSize: 32, color: "#d8dad4" }}>{CAPTION}</div>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#8891c9" }}>{siteConfig.address.fullAddress}</div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Noto Sans KR", data: fontData, weight: 600, style: "normal" }],
    },
  );
}
