import { ImageResponse } from "next/og";

import { monogramDataUri } from "@/lib/monogram";
import { favicon } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ecedee",
        }}
      >
        {/* Satori only accepts <img>; next/image is not available here. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={monogramDataUri({ withCats: false })} width={41} height={52} alt="" />
      </div>
    ),
    { width: favicon.size, height: favicon.size },
  );
}
