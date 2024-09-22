import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Designedby() {
  return (
    <section className="w-[280px] md:w-[114px]">
      <h1
        style={{ fontFamily: "Montserrat Variable" }}
        className="text-xs font-bold flex justify-center md:justify-end"
      >
        DESIGNED BY
      </h1>
      <figure className="pt-[7px] flex justify-center md:justify-end">
        <StaticImage src="../../images/Bitmap.png" alt="Dreamshare designer's logo" />
      </figure>
    </section>
  );
}
