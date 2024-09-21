import * as React from "react";

export default function IdeaStatement(props) {
  return (
    <h3
      style={{ fontFamily: "Montserrat Variable" }}
      className="w-full flex justify-center mb-[20px] font-bold text:mg text-grey"
    >
      {props.children}
    </h3>
  );
}
