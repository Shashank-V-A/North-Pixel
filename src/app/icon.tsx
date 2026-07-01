import { ImageResponse } from "next/og";
import { logoMarkSvgElement } from "@/lib/logo-mark-svg";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(logoMarkSvgElement({ size: 32 }), {
    width: 32,
    height: 32,
  });
}
