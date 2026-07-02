import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const DARK = "#274245";
const CREAM = "#DFD6AE";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: DARK,
          borderRadius: 40,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 34,
            left: 73,
            width: 34,
            height: 34,
            borderRadius: 8,
            background: CREAM,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 102,
            left: 39,
            width: 34,
            height: 34,
            borderRadius: 8,
            background: CREAM,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 102,
            left: 107,
            width: 34,
            height: 34,
            borderRadius: 8,
            background: CREAM,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
