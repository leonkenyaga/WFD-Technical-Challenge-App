import * as React from "react";
import SectionTitle from "../../shared_components/sectiontitle";
import SearchPartners from "./searchpartners";
import InterestStatement from "./intereststatement";

export default function Interests() {
  return (
    <section className="w-[285px] md:w-[482px] h-[192px] md:h-[158] mt-[95px] mb-[70px] grid grid-rows-3 justify-center">
      <div className="max-sm:w-full px-[35px] flex text-center items-center">
        <SectionTitle>Create your holiday activity</SectionTitle>
      </div>
      <InterestStatement />
      <SearchPartners />
    </section>
  );
}
