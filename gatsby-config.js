var dotenv = require("dotenv")
var dotenvExpand = require("dotenv-expand")
var myEnv = dotenv.config()
dotenvExpand.expand(myEnv)

module.exports = {
  flags: {
    //PRESERVE_WEBPACK_CACHE: true,
    //PRESERVE_FILE_DOWNLOAD_CACHE: true,
    //FAST_DEV: true,
    //FAST_REFRESH: true,
    DEV_SSR: false,
  },
  siteMetadata: {
    title: `Portail`,
    subtitle: `cartographique`,
    description: `eGeo Portal Template`,
    author: `GEOFIT`,
    siteUrl: process.env.PROJECT_PROTOCOL + "://" + process.env.PROJECT_HOST,
    icon: ``,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-postcss",
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-leaflet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-dark-mode`,
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: [
          "PROJECT_INTERNAL_PROTOCOL",
          "PROJECT_INTERNAL_HOST",
          "PROJECT_INTERNAL_PORT",
          "PROJECT_PROTOCOL",
          "PROJECT_HOST",
          "PROJECT_PORT",
          "PROJECT_URL",
          "TYPESENSE_API_PATH",
          // TODO add API_TOKEN with Read Only privileges (client use)
          "TYPESENSE_API_TOKEN",
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/index.css"],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `docs/logo_picto.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        test: /\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ["develop", "build-javascript"],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "api",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "api",
        // PROJECT_INTERNAL_* use docker hostname (whd build) and not public DNS (not always available from whd)
        url:
          (process.env.PROJECT_INTERNAL_PROTOCOL ||
            process.env.PROJECT_PROTOCOL) +
          "://" +
          (process.env.PROJECT_INTERNAL_HOST || process.env.PROJECT_HOST) +
          "/api/v1/graphql",
        headers: {
          // Learn about environment variables: https://gatsby.dev/env-vars
          "x-hasura-admin-secret": process.env.HASURA_API_TOKEN,
        },
      },
    },
    {
      resolve: "gatsby-source-geonetwork",
      options: {
        url:
          (process.env.PROJECT_INTERNAL_PROTOCOL ||
            process.env.PROJECT_PROTOCOL) +
          "://" +
          (process.env.PROJECT_INTERNAL_HOST || process.env.PROJECT_HOST) +
          "/geonetwork/srv/fre/",
      },
    },
    {
      resolve: `gatsby-plugin-typesense`,
      options: {
        publicDir: `${__dirname}/public`, // Required
        collectionSchema: {
          // Required
          name: "pages_v1",
          fields: [
            {
              name: "title",
              type: "string",
            },
            {
              name: "description",
              type: "string",
            },
            {
              name: "typeData",
              type: "string",
              optional: true,
              facet: true,
            },
            {
              name: "thumbnail",
              type: "string",
              optional: true,
            },
            {
              name: "tags",
              type: "string[]",
              optional: true,
              facet: true,
            },
            {
              name: "page_path", // Required
              type: "string",
            },
            {
              name: "page_priority_score", // Required
              type: "int32",
            },
          ],
          default_sorting_field: "page_priority_score", // Required
        },
        server: {
          // Required
          apiKey: process.env.TYPESENSE_API_TOKEN,
          nodes: [
            {
              protocol:
                process.env.PROJECT_INTERNAL_PROTOCOL ||
                process.env.PROJECT_PROTOCOL,
              host:
                process.env.PROJECT_INTERNAL_HOST || process.env.PROJECT_HOST,
              port:
                process.env.PROJECT_INTERNAL_PORT || process.env.PROJECT_PORT,
              path: process.env.TYPESENSE_API_PATH || "/search/",
            },
          ],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
