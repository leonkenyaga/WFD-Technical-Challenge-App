import * as React from "react";

export default function SectionTitle(props) {
  return (
    <h2
      style={{ fontFamily: "Montserrat Variable" }}
      className="w-full flex justify-center mb-[20px] font-bold text:mg text-black"
    >
      {props.children}
    </h2>
  );
}
