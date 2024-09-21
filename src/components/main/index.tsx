import * as React from "react";
import MostPopularMovies from "./most_popular_movies";
import MostPopularCelebs from "./most_popular_celebs";
import Ideas from "./ideas";
import Interests from "./interests";

export default function Main() {
  return (
    <main className="grid justify-items-center">
      <MostPopularMovies />
      <MostPopularCelebs />
      <Ideas />
      <Interests />
    </main>
  );
}
