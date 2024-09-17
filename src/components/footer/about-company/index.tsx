import * as React from "react";
import About from "./about";

export default function About_Company() {
  return (
    <section className="w-[280px] md:w-[115px]">
      <h1
        style={{ fontFamily: "Montserrat Variable" }}
        className="text-black text-sm font-bold flex justify-center md:justify-start"
      >
        Company
      </h1>
      <About />
    </section>
  );
}
