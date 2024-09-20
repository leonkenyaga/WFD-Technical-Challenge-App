import * as React from "react";
import SectionTitle from "../../../shared_components/sectiontitle";

export default function ModalTitle() {
  return (
    <div
      style={{ zIndex: 1 }}
      className="bg-white h-[50px] fixed top-0 left-0 right-0 pt-[15px] shadow-lg"
    >
      <SectionTitle>Most Popular Celebs</SectionTitle>
    </div>
  );
}
