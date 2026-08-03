import { ImageResponse } from "next/og";

// Route segment config for the generated favicon.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Pixel-art "K" favicon matching the Retro Cozy Pixel design system
// (espresso background, amber glyph, terracotta stepped border).
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1a0f08",
          border: "2px solid #D97B4F",
          fontSize: 20,
          fontWeight: 700,
          color: "#E8A659",
          fontFamily: "monospace",
        }}
      >
        K
      </div>
    ),
    { ...size }
  );
}
