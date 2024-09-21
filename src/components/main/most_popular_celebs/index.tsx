import * as React from "react";
import SectionTitle from "../../shared_components/sectiontitle";
import CelebProfile from "./celeb_profile";
import { useInitialContentfulCelebrities } from "../../../hooks/useInitialContentfulCelebrities";
import DreamshareButton from "../../shared_components/dreamsharebutton";
import CelebModal from "./celebmodal";
import { isModalOpen } from "../../../State/store";

export default function MostPopularCelebs() {
  const handleModal = () => {
    isModalOpen.state = true;
  };

  return (
    <section className="w-[300px] md:w-[470px] lg:w-[941px] mt-[95px] mb-[36px] flex flex-wrap md:justify-start gap-[20px] md:gap-[20px] lg:gap-[18px] justify-center">
      <SectionTitle>Most Popular Celebs</SectionTitle>
      {useInitialContentfulCelebrities()?.allContentfulCelebrity.edges.map(
        (edge) => (
          <CelebProfile details={edge.node} />
        )
      )}
      <div className="w-full flex justify-center">
        <div>
          <DreamshareButton onClick={handleModal} type="button">
            See other celebs
          </DreamshareButton>
        </div>
      </div>
      <CelebModal />
    </section>
  );
}
