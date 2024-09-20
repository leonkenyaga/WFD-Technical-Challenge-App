import { useStaticQuery, graphql } from "gatsby";

export const useAllContentfulCelebrities = () => {
  const contentfulCelebrities = useStaticQuery(graphql`
    {
        allContentfulCelebrity {
    edges {
      node {
        celebDescription
        celebName
        celebrityImage {
          gatsbyImageData(height: 120, width: 120, placeholder: BLURRED)
        }
        celebIcon {
          gatsbyImageData(width: 16, height: 15, cropFocus: CENTER, placeholder: BLURRED)
        }
        iconColor
      }
    }
  }
    }
  `);

  return contentfulCelebrities;
};