import { ImageResponse } from "next/og";

export const alt = "North Pixel — Websites that drive growth";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const DARK = "#274245";
const CREAM = "#DFD6AE";
const CREAM_MUTED = "#CEC6A4";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: `linear-gradient(145deg, ${DARK} 0%, #1a2f32 55%, ${DARK} 100%)`,
          color: CREAM,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: CREAM,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 14,
                left: 33,
                width: 14,
                height: 14,
                borderRadius: 3,
                background: DARK,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 42,
                left: 19,
                width: 14,
                height: 14,
                borderRadius: 3,
                background: DARK,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 42,
                left: 47,
                width: 14,
                height: 14,
                borderRadius: 3,
                background: DARK,
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div
              style={{
                fontSize: 28,
                fontWeight: 600,
                letterSpacing: "0.02em",
              }}
            >
              North
            </div>
            <div
              style={{
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: "0.35em",
                color: CREAM_MUTED,
              }}
            >
              PIXEL
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: 900,
            }}
          >
            Websites that drive growth
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.4,
              color: CREAM_MUTED,
              maxWidth: 820,
            }}
          >
            Web design & development for businesses across India · Packages from
            ₹9,999
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `1px solid ${CREAM}33`,
            paddingTop: 28,
          }}
        >
          <div style={{ fontSize: 22, color: CREAM_MUTED }}>
            northpixel.ink
          </div>
          <div
            style={{
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: CREAM,
              background: `${CREAM}18`,
              padding: "12px 24px",
              borderRadius: 999,
              border: `1px solid ${CREAM}44`,
            }}
          >
            Bangalore · India
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
