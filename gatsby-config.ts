import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://gatsby-blog.netlify.com`,
    title: `Gatsby Blog`,
    description: `Blog`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,

  flags: {
    PARTIAL_HYDRATION: true,
  },

  plugins: [
    {
      // https://chakra-ui.com/getting-started/gatsby-guide
      resolve: '@chakra-ui/gatsby-plugin',

      options: {},
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-source-filesystem',

      options: {
        name: `blog-images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
  ],
};

export default config;
