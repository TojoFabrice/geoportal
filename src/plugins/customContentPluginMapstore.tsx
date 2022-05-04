import type { CellPlugin } from "@react-page/editor"
import React from "react"

type Data = {
  context: string
  title: string
  height: number
  type: string
}
const projectUrl = process.env.PROJECT_URL as string
const UrlShareMapStore = (type: string) => {
  let page = ""
  let path = ""
  switch (type) {
    case "Carte":
      page = "embedded.html"
      break
    case "Contexte":
      page = ""
      path = "context/"
      break
    case "Tableau de bord":
      page = "dashboard-embedded.html"
      break
    case "Geostory":
      page = "geostory-embedded.html"
      break
    default:
      page = "embedded.html"
      break
  }
  return projectUrl + "/geoportail/" + page + "#/" + path
}

//
// you can pass the shape of the data as the generic type argument
const customContentPluginMap: CellPlugin<Data> = {
  Renderer: ({ data }) => (
    <div>
      <h4>{data.title}</h4>
      <div>
        <iframe
          width={"100%"}
          height={data.height || 600}
          src={UrlShareMapStore(data.type) + data.context}
        />
      </div>
    </div>
  ),
  id: "map",
  title: "Mapstore",
  description: "Mapstore into your portal",
  version: 1,
}

export default customContentPluginMap
