import * as React from "react";

export default function MovieDescription(props) {
  return (
    <p
      style={{ fontFamily: "Roboto" }}
      className="w-full md:w-[236px] lg:w-[300px] text-ms pt-[10px]"
    >
      {props.description}
    </p>
  );
}
