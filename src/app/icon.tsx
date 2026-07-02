import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

const DARK = "#274245";
const CREAM = "#DFD6AE";

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
          background: DARK,
          borderRadius: 8,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 6,
            left: 13,
            width: 6,
            height: 6,
            borderRadius: 2,
            background: CREAM,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 18,
            left: 7,
            width: 6,
            height: 6,
            borderRadius: 2,
            background: CREAM,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 18,
            left: 19,
            width: 6,
            height: 6,
            borderRadius: 2,
            background: CREAM,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
