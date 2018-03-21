/*
  This is where you tell Gatsby what plugins you are using
*/
module.exports = {
  siteMetadata: {
    title: `the next base`,
  },
  plugins: [
    `gatsby-plugin-react-next`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
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
       resolve: `gatsby-transformer-remark`,
       options: {
         plugins: [
           {
             resolve: `gatsby-remark-images`,
             options: {
               maxWidth: 500,
               linkImagesToOriginal: false,
             },
           },
           {
             resolve: `gatsby-remark-responsive-iframe`,
             options: {
               wrapperStyle: `margin-bottom: 1.0725rem`,
             },
           },
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
