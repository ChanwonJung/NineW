import { ImageResponse } from "next/og";

export const runtime = "nodejs";

// This diagnostic endpoint is deliberately self-contained. Shared-link metadata
// uses the static JPEG declared in layout.tsx, so social crawlers never need a
// runtime font request to render a preview.
export async function GET() {
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
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 6, color: "#aeb8ee" }}>NINE · W</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", fontSize: 82, fontWeight: 700, letterSpacing: -2 }}>NINE·W</div>
          <div style={{ display: "flex", fontSize: 30, color: "#d8dad4" }}>ART PORTFOLIO STUDIO</div>
        </div>
        <div style={{ display: "flex", fontSize: 21, color: "#aeb8ee" }}>SEOUL · KOREA</div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
