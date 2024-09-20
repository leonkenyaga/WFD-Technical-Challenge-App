import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import CelebIcon from "./celeb_icon";

export default function CelebImage(props) {
  return (
    <figure className="w-[120px] h-[120px] static">
      <GatsbyImage
        image={props.image}
        alt={props.alt}
        className="w-full h-full rounded-full"
      />
      <CelebIcon icon={props.icon} iconColor={props.iconColor} />
    </figure>
  );
}
