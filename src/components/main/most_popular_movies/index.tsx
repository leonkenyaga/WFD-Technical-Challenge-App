import * as React from "react";
import MoviesSectionTitle from "./movies_section_title";

export default function MostPopularMovies() {
  return (
    <section className="w-[300px] md:w-[748px] lg:w-[940px] mt-[95px] mb-[36px] flex flex-wrap justify-start gap-[20px] md:gap-[20px] lg:gap-[20px]">
      <MoviesSectionTitle />
    </section>
  );
}
