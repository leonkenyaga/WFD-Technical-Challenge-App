import { useStaticQuery, graphql } from "gatsby";

export const useAllContentfulMovies = () => {
  const contentfulMovies = useStaticQuery(graphql`
    {
      allContentfulMovie {
        edges {
          node {
            movieName
            movieImage {
              gatsbyImageData(
                width: 300
                placeholder: BLURRED
                cropFocus: CENTER
                aspectRatio: 0.7
              )
            }
            movieDescription
          }
        }
      }
    }
  `);

  return contentfulMovies;
};
