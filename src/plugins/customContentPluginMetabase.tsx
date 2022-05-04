import type { CellPlugin } from "@react-page/editor"
import React from "react"

type Data = {
  id: string
  title: string
  type: string
  width: number
  height: number
}
// const projectUrl = process.env.REACT_APP_PROJECT_URL as string;
const projectUrl = process.env.PROJECT_URL as string
const metabaseCallURL = projectUrl + "/metabase/public/"

// you can pass the shape of the data as the generic type argument
const customContentPluginMap: CellPlugin<Data> = {
  Renderer: ({ data }) => (
    <div>
      <h4>{data.title}</h4>
      <iframe
        title="carte_fibre"
        src={
          metabaseCallURL +
          (data.type == "Dashboard" ? "dashboard" : "question") +
          "/" +
          data.id
        }
        allowTransparency={true}
        className="w-full"
        width="100%"
        height={data.height || 600}
      ></iframe>
    </div>
  ),
  id: "metabase",
  title: "Metabase",
  description: "A metabase vizualisation",
  version: 1,
}

export default customContentPluginMap
