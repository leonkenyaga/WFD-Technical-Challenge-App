import * as React from "react";

export default function CelebDescription(props) {
  return (
    <p
      style={{ fontFamily: "Roboto" }}
      className="text-sm font-light text-center w-full"
    >
      {props.description}
    </p>
  );
}
