import * as React from "react";

export default function CelebName(props) {
  return (
    <h3
      style={{ fontFamily: "Montserrat Variable" }}
      className="w-full flex justify-center text-sm text-black font-bold h-[18px]"
    >
      {props.name}
    </h3>
  );
}
