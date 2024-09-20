import * as React from "react";
import MovieName from "./movie_name";
import MovieImage from "./movie_image";
import MovieDescription from "./movie_description";

export default function Movie(props) {
  return (
    <article className="max-sm:w-full">
      <MovieName name={props.details.movieName} />
      <MovieImage
        image={props.details.movieImage.gatsbyImageData}
        alt={props.details.movieName}
      />
      <MovieDescription description={props.details.movieDescription} />
    </article>
  );
}
