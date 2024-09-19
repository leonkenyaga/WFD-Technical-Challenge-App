import * as React from "react";

export default function MovieName(props) {
  return (
    <h3
      style={{ fontFamily: "Roboto" }}
      className="w-full flex justify-center mb-[20px] font-bold"
    >
      {props.name}
    </h3>
  );
}
