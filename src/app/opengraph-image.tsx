import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import { SITE } from "@/lib/constants";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const logoData = readFileSync(
    join(process.cwd(), "public/brand/logo.png")
  );
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#060606",
        }}
      >
        <img src={logoSrc} width={520} height={418} />
        <div
          style={{
            marginTop: 8,
            fontSize: 28,
            color: "#e0b23c",
            letterSpacing: 2,
            textTransform: "uppercase",
            textAlign: "center",
            maxWidth: "85%",
          }}
        >
          {SITE.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
