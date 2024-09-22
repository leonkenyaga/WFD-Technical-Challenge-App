/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Discover Your Dream Holiday on DreamShare`,
    description: `DreamShare is the ultimate platform to connect with like-minded travelers and turn your dream vacation into reality. Find your perfect travel partner, discover exciting destinations, and create unforgettable memories together. Explore our curated selection of popular movies and celebrities to inspire your next adventure`,
    twitterUsername: `@DreamShare`,
    image: `/Bitmap.png`,
    siteUrl: `https://www.dreamshare.com`
  },
  plugins: [
    "gatsby-plugin-testing",
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `images`,
        // Path to the directory
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en-GB'
      }
    }
  ],
}
