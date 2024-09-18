import * as React from "react";

export default function FindPartnerButton() {
  return (
    <div className="flex justify-center mt-[20px] md:mt-[33px]">
      <button
        style={{ fontFamily: "Montserrat Variable" }}
        type="button"
        className="text-white bg-red hover:bg-carmine focus:outline-none font-bold rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Find your holiday partner
      </button>
    </div>
  );
}
