import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

export default function CelebIcon(props) {
  return (
    <div
      style={{ backgroundColor: props.iconColor }}
      className="w-[30px] h-[30px] rounded-full ring-4 ring-white absolute bottom-[5px] right-0 flex items-center justify-center"
    >
      <GatsbyImage
        image={props.icon}
        alt={"celebrity Icon"}
        className="w-[15px] h-[15px] rounded-full"
      />
    </div>
  );
}
