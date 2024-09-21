import * as React from "react";
import DreamshareButton from "../../shared_components/dreamsharebutton";

export default function SearchPartners() {
  return (
    <div className="md:grid md:grid-cols-2 md:gap-[130px] md:w-[480px] md:h-[37px] h-[100px]">
      <input
        style={{ fontFamily: "Roboto" }}
        className="font-light text-sm px-[14px] max-sm:p-[14px] w-[299px] border-[1px] border-grey rounded-lg  focus:outline-none focus:border-[2px]"
        aria-label="Holiday interests"
        id="holiday-interests"
        name="holiday interests"
        type="text"
        placeholder="Enter your interests"
      />
      <div className="max-sm:pt-[10px] md:w-[172px] ">
        <DreamshareButton filled={true} type="submit">
          Search Partners
        </DreamshareButton>
      </div>
    </div>
  );
}
