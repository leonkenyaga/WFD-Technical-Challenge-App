import * as React from "react";
import Dreamshare from "./dreamshare";

export default function Footer() {
  return (
    <footer className="w-full h-[224px] border-t-2 border-red absolute bottom-0 mb-[36px] flex flex-wrap justify-center gap-[13px] md:gap-[92px] lg:gap-[130px] pt-[21px] md:pt-[40px]">
      <Dreamshare />
    </footer>
  );
}
