/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

exports.onCreateWebpackConfig = ({ stage, rules, loaders, actions }) => {
  switch (stage) {
    case "build-html":
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /react-leaflet/,
              use: [loaders.null()],
            },
          ],
        },
      })
      break
  }
}
/*
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type api {
      posts: [api_posts]!
    }
    type api_posts {
      updated_at: Date
    }
  `
  createTypes(typeDefs)
}
*/
/*
exports.onCreateNode = ({ node }) => {
  if (node.internal.type == "GraphQLSource") {
    console.log(`Node created of type "${node.internal.type}"`)
    console.log(node.typeName)
  }
}
*/

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // News
  const postsData = await graphql(`
    query {
      api {
        posts {
          id
        }
      }
    }
  `)
  // console.log(JSON.stringify(postsData, null, 4))
  postsData.data.api.posts.forEach((post) => {
    createPage({
      path: post.id,
      component: path.resolve(`./src/templates/post.tsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        id: post.id,
      },
    })
  })

  // Metadata
  const metadataResults = await graphql(`
    query {
      allMetadata {
        nodes {
          uuid
        }
      }
    }
  `)
  // console.log(JSON.stringify(metadataResults, null, 4))
  metadataResults.data.allMetadata.nodes.forEach((node) => {
    createPage({
      path: node.uuid,
      component: path.resolve(`./src/templates/metadata.tsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        id: node.uuid,
      },
    })
  })
  
  // Pages
  const pagesData = await graphql(`
    query {
      api {
        pages(where: {id: {_neq: "3c8bc1cf-0bfd-421e-8548-58e977452e61"}, _and: {id: {_neq: "d3fed795-b0b7-4432-8f6d-52fec64196bc"}}}) {
          id
          title
        }
      }
    }
  `)
  //console.log(JSON.stringify(result, null, 4))
  pagesData.data.api.pages.forEach((page) => {
    createPage({
      path:
        page.title
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "") + '/',
      component: path.resolve(`./src/templates/page.tsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        id: page.id,
      },
    })
  })
}
