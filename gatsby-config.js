const path = require('path');

module.exports = {
  siteMetadata: {
    title: "Matan's Blog",
    body: {
      content: 'Just Some SEO Content',
    },
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        images: path.join(__dirname, 'src/images'),
        pages: path.join(__dirname, 'src/pages'),
        components: path.join(__dirname, 'src/components'),
        styles: path.join(__dirname, 'src/styles'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    'gatsby-transformer-remark',
  ],
};
