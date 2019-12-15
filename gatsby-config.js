/* eslint-disable no-undef */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Ramen Noob`,
    tagline: `From ramen noob to ramen lord`,
    description: `Le meilleur rien que le meilleur, tout pour réaliser les meilleurs bol de ramen.`,
    author: `@kovskyD`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Bangers`,
            variants: [`400`],
          },
        ],
      },
    },
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `ramen-blog`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => post => `/${post.slugs}`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
