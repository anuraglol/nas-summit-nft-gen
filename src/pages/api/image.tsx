import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

const font = fetch(
  new URL("../../../assets/Montserrat-Black.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const name = searchParams.get("name") || "John Doe";

  const fontSize = (name as string).length > 30 ? "46px" : "52px";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundImage:
            "url(https://res.cloudinary.com/ddum5vpp3/image/upload/v1683800446/NFT_Design_kvsr45.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          fontSize,
          fontWeight: "black",
          fontFamily: "Montserrat",
          padding: "0 10%",
        }}
      >
        <div
          style={{
            bottom: "9%",
            margin: "auto 0",
            width: "100%",
            height: "200px",
            display: "flex",
            alignItems: "center",
            textTransform: "uppercase",
          }}
        >
          {name}
        </div>
      </div>
    ),
    {
      width: 819,
      height: 1024,
      fonts: [
        {
          name: "Montserrat",
          data: await font,
          weight: 900,
        },
      ],
    }
  );
}
