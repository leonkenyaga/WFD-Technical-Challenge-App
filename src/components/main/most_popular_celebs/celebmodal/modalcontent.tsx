import * as React from "react";
import CelebProfile from "../celeb_profile";
import { useAllContentfulCelebrities } from "../../../../hooks/useAllContentfulCelebrities";

export default function ModalContent() {
  return (
    <section className="pt-[60px] overflow-auto h-full grid md:grid-cols-2 gap-[30px] grid-cols-1 justify-items-center">
      {useAllContentfulCelebrities().allContentfulCelebrity.edges.map(
        (edge) => (
          <CelebProfile details={edge.node} />
        )
      )}
    </section>
  );
}
