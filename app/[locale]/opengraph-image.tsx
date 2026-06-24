import { ImageResponse } from "next/og";
import { brand } from "@/lib/brand";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${brand.name} — Type Foundry`;

// Dynamic social card: brand wordmark + registration marks on paper.
export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FCFCFA",
          color: "#141414",
          padding: "80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", gap: "12px" }}>
          <div style={{ width: 36, height: 36, background: "#F23005" }} />
          <div style={{ width: 36, height: 36, background: "#1F4FFF" }} />
          <div style={{ width: 36, height: 36, background: "#FFD400" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 200, lineHeight: 1, letterSpacing: "-0.04em", display: "flex" }}>
            {brand.name}
            <span style={{ color: "#F23005" }}>.</span>
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 34,
              fontFamily: "monospace",
              color: "#6B6B66",
            }}
          >
            {`Independent type foundry — ${brand.domain}`}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
