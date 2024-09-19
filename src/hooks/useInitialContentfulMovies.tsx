import { useStaticQuery, graphql } from "gatsby";

export const useInitialContentfulMovies = () => {
  const contentfulMovies = useStaticQuery(graphql`
    {
      allContentfulMovie(limit: 3) {
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
