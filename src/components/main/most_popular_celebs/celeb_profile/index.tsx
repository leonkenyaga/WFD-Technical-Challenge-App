import * as React from "react";
import CelebImage from "./celeb_image";
import CelebName from "./celeb_name";
import CelebDescription from "./celeb_description";

export default function CelebProfile(props) {
  return (
    <article className="w-[221px] min-h-[224px] grid justify-items-center">
      <div className="relative">
        <CelebImage
          image={props.details.celebrityImage.gatsbyImageData}
          icon={props.details.celebIcon.gatsbyImageData}
          iconColor={props.details.iconColor}
          alt={props.details.celebName}
        />
      </div>
      <CelebName name={props.details.celebName} />
      <CelebDescription description={props.details.celebDescription} />
    </article>
  );
}
