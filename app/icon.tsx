import { ImageResponse } from "next/og";

import { monogramDataUri } from "@/lib/monogram";

export const size = { width: 64, height: 64 };
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
          backgroundColor: "#ecedee",
        }}
      >
        <img src={monogramDataUri({ withCats: false })} width={41} height={52} alt="" />
      </div>
    ),
    size,
  );
}
