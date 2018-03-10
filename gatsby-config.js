module.exports = {
  siteMetadata: {
  title: `Jacob Duchen's Website`,
  siteUrl: `https://www.fatcatdog.github.io`,
  description: `Jacob's personal website`,

},
  plugins: [
    {
     resolve: `gatsby-source-filesystem`,
     options: {
       name: `src`,
       path: `${__dirname}/src/`,
     },
   },
    `gatsby-plugin-glamor`,
     `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};
