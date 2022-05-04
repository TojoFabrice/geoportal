const fetch = require("node-fetch")
const createNodeEntities = require("./createNodeEntities")
const normalizeKeys = require("./utils/normalizeKeys")
const flattenEntities = require("./utils/flattenEntities")
const loadImages = require("./utils/loadImages")
const getUrl = require("./utils/getUrl")
const getTypeDefs = require("./utils/getTypeDefs")
const buildNode = require("./utils/buildNode")
const mappingKeys = require("./utils/mappingKeys")
const schemasDef = require("./utils/schemas")

exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest, store, cache },
  configOptions
) => {
  const { createNode, createTypes, touchNode } = actions
  const {
    url,
    headers,
    rootKey = "metadata",
    imageKeys = ["metadata"], //,
    // schemas = {},
  } = configOptions

  // Specific schema for Geonetwork data
  const schemas = schemasDef

  const URL = getUrl(process.env.NODE_ENV, url)
  let data = await fetch(URL, { headers })
    .then((res) => res.json())
    .catch((err) => console.log(err))

  if (!data) {
    console.log("Enable to download catalog from " + URL)
    return false
  }

  // Geonetwork
  data = mappingKeys(data)
  //

  const typeDefs = getTypeDefs(schemas, imageKeys)
  createTypes(typeDefs)

  /**/
  // build entities and correct schemas, where necessary
  let entities = flattenEntities(
    createNodeEntities({
      name: rootKey,
      data,
      schemas,
      createNodeId,
    })
  )

  // check for problematic keys
  entities = entities.map((entity) => ({
    ...entity,
    data: normalizeKeys(entity.data),
  }))

  // load images or default-dummy-image
  entities = await loadImages({
    entities,
    imageKeys,
    createNode,
    createNodeId,
    touchNode,
    store,
    cache,
    createContentDigest,
  })

  // build gatsby-node-object
  entities = entities.map((entity) =>
    buildNode({ entity, createContentDigest })
  )

  // render nodes
  entities.forEach((entity) => {
    createNode(entity)
  })
}
