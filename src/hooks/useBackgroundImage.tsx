import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";

export const useBackgroundImage = () => {
  const { backgroundImage123 } = useStaticQuery(graphql`
    query {
      backgroundImage123: file(relativePath: { eq: "Hero2.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 2000
            quality: 50
            webpOptions: { quality: 70 }
          )
        }
      }
    }
  `);

  const image = getImage(backgroundImage123);

  const bgImage = convertToBgImage(image);

  return bgImage;
};
