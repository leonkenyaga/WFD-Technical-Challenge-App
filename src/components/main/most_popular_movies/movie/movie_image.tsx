import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

export default function MovieImage(props) {
  return (
    <figure className="w-full flex h-[240px] md:w-[236px] lg:w-[300px] md:h-[400px] bg-black">
      <GatsbyImage image={props.image} alt={props.alt} className="w-full" />
    </figure>
  );
}
