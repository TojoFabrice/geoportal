// @ts-ignore
import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter"

const typesenseAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: process.env.TYPESENSE_API_TOKEN, // Be sure to use the search-only-api-key
    nodes: [
      {
        protocol: process.env.PROJECT_PROTOCOL,
        host: process.env.PROJECT_HOST,
        port: process.env.PROJECT_PORT,
        path: process.env.TYPESENSE_API_PATH || "/search/",
      },
    ],
  },
  // The following parameters are directly passed to Typesense's search API endpoint.
  //  So you can pass any parameters supported by the search endpoint below.
  //  queryBy is required.
  additionalSearchParameters: {
    queryBy: "title,description,tags",
  },
})

export default typesenseAdapter
