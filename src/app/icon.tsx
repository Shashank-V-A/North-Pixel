import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

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
          background: "#DFD6AE",
          color: "#274245",
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: "-0.04em",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        NP
      </div>
    ),
    { ...size }
  );
}
