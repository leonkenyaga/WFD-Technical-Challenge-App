import * as React from "react";
import BackgroundImage from "gatsby-background-image";
import { useBackgroundImage } from "../../hooks/useBackgroundImage";
import Dreamshare_login_signup from "./dreamshare_login_signup";

export default function Header() {
  const bgImage = useBackgroundImage();

  return (
    <header className="md:h-[700px] h-[540px]">
      <BackgroundImage
        Tag="section"
        {...bgImage}
        preserveStackingContext
        className="h-full"
      >
        <Dreamshare_login_signup />
      </BackgroundImage>
    </header>
  );
}
