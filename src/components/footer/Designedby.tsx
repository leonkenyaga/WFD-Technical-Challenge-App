import * as React from "react";

export default function Designedby() {
  return (
    <section className="w-[280px] md:w-[114px]">
      <h1
        style={{ fontFamily: "Montserrat Variable" }}
        className="text-grey text-xs font-bold flex justify-center md:justify-end"
      >
        DESIGNED BY
      </h1>
      <figure className="pt-[7px] flex justify-center md:justify-end">
        <img src="/Bitmap.png" className="h-[24px] w-[110px]" alt="Dreamshare desiner's logo"/>
      </figure>
    </section>
  );
}
