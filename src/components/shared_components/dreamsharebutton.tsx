import * as React from "react";

export default function DreamshareButton(props) {
  return (
    <button
      style={{ fontFamily: "Montserrat Variable" }}
      type="button"
      onClick={props.onClick}
      className="w-full text-white bg-red hover:bg-carmine focus:outline-none font-bold rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
    >
      {props.children}
    </button>
  );
}
