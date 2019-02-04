/*
  This is where you tell Gatsby what plugins you are using
*/
module.exports = {
  siteMetadata: {
    title: `the next base`,
  },
  // pathPrefix: `/the-next-website`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-60215266-12",
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        // One convention is to place your Netlify CMS customization code in a
        // `src/cms` directory.
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/assets/`,
      },
    },
     {
       resolve: `gatsby-transformer-remark`,
       options: {
         plugins: [
           {
             resolve: `gatsby-remark-images`,
             options: {
               maxWidth: 1500,
               quality: 85,
               linkImagesToOriginal: false,
             },
           },
           {
             resolve: `gatsby-remark-responsive-iframe`,
             options: {
               wrapperStyle: `margin-bottom: 1.0725rem`,
             },
           },
           "gatsby-remark-external-links",
           'gatsby-remark-copy-linked-files',
           'gatsby-remark-smartypants',
         ],
       },
     },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`
  ],
}
