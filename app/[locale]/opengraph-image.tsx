import { ImageResponse } from "next/og";
import { brand } from "@/lib/brand";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${brand.name} — Motion Design Studio`;

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
          background: "#07070f",
          color: "#e8e8f0",
          padding: "80px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#00e5a0" }} />
          <div style={{ fontFamily: "monospace", fontSize: 14, color: "#6060a0", letterSpacing: "0.2em" }}>
            MOTION DESIGN STUDIO
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 160, fontWeight: 900, lineHeight: 0.9, letterSpacing: "-0.04em", display: "flex" }}>
            {brand.name}
            <span style={{ color: "#00e5a0" }}>.</span>
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 28,
              fontFamily: "monospace",
              color: "#6060a0",
            }}
          >
            {`Motion as language — ${brand.domain}`}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
