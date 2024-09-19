import * as React from "react";
import MoviesSectionTitle from "./movies_section_title";
import Movie from "./movie";
import { useInitialContentfulMovies } from "../../../hooks/useInitialContentfulMovies";
import { useAllContentfulMovies } from "../../../hooks/useAllContenfulMovies";
import DreamshareButton from "../../shared_components/dreamsharebutton";
import { loadMore } from "../../../State/store";
import { useSnapshot } from "valtio";

export default function MostPopularMovies() {
  const isLoadingMore = useSnapshot(loadMore);

  const handleClick = () => {
    loadMore.state = !loadMore.state;
  };

  return (
    <section className="w-[300px] md:w-[748px] lg:w-[940px] mt-[95px] mb-[36px] flex flex-wrap justify-start gap-[20px] md:gap-[20px] lg:gap-[20px]">
      <MoviesSectionTitle />
      {isLoadingMore.state
        ? useAllContentfulMovies()?.allContentfulMovie.edges.map((edge) => (
            <Movie details={edge.node} />
          ))
        : useInitialContentfulMovies()?.allContentfulMovie.edges.map((edge) => (
            <Movie details={edge.node} />
          ))}
      <div className="w-full flex justify-center">
        <div>
          <DreamshareButton onClick={handleClick}>
            {isLoadingMore.state ? "Load less" : "Load more"}
          </DreamshareButton>
        </div>
      </div>
    </section>
  );
}
