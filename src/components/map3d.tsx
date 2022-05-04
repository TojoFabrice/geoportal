import React from "react"
import { getAbsoluteUrl } from "../utils"

interface Props {
  page?: String
}

const Map3d = (props: Props) => {
  const { page = "index_758.html" } = props
  // const src = getAbsoluteUrl("/data/" + page)

  const src =
    "http://igoprod.igo.fr/geofit/index.html?x=-1.55411&y=47.21257&z=400"

  return (
    <iframe
      title="map3d"
      src={src}
      allowFullScreen={true}
      className="w-full h-192 border-0"
    />
  )
}

export default Map3d
