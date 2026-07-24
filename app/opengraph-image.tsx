import { readFile } from "node:fs/promises";
import path from "node:path";

import { ImageResponse } from "next/og";

import { monogramDataUri } from "@/lib/monogram";
import { tagline } from "@/lib/site";

export const alt = `Bask in Wardrobe — ${tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const font = (file: string) =>
  readFile(path.join(/* turbopackIgnore: true */ process.cwd(), "assets", "fonts", file));

export default async function OpengraphImage() {
  const [bodoni, manrope] = await Promise.all([
    font("BodoniModa-Regular.ttf"),
    font("Manrope-Medium.ttf"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "74px 84px",
          backgroundColor: "#ecedee",
          backgroundImage:
            "radial-gradient(circle at 90% 6%, rgba(176,118,63,0.24), transparent 52%), linear-gradient(160deg, #f5f5f6 0%, #ecedee 46%, #e2e3e6 100%)",
          fontFamily: "Manrope",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: 58, height: 2, backgroundColor: "#b0763f" }} />
          <div
            style={{
              marginLeft: 20,
              fontSize: 20,
              fontWeight: 500,
              letterSpacing: 7,
              color: "#8f5c2c",
            }}
          >
            PRESTO SU WEB
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <img src={monogramDataUri()} width={152} height={195} alt="" />
            <div style={{ display: "flex", flexDirection: "column", marginLeft: 36 }}>
              <div
                style={{
                  fontFamily: "Bodoni Moda",
                  fontSize: 96,
                  lineHeight: 1,
                  letterSpacing: 24,
                  color: "#15161a",
                }}
              >
                BASK
              </div>
              <div
                style={{
                  fontFamily: "Bodoni Moda",
                  fontSize: 34,
                  marginTop: 16,
                  letterSpacing: 13,
                  color: "#3b3d44",
                }}
              >
                IN WARDROBE
              </div>
            </div>
          </div>

          <div
            style={{
              fontFamily: "Bodoni Moda",
              fontSize: 54,
              marginTop: 48,
              color: "#15161a",
            }}
          >
            {`${tagline}.`}
          </div>
        </div>

        <div style={{ fontSize: 25, color: "#3b3d44" }}>
          Bask in Wardrobe ricorda cosa hai indossato, quando e dove.
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Bodoni Moda", data: bodoni, style: "normal", weight: 400 },
        { name: "Manrope", data: manrope, style: "normal", weight: 500 },
      ],
    },
  );
}
