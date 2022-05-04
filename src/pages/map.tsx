import React, { ReactElement } from "react"

import Layout from "../layouts/layout"
//import Content from '../layouts/content'

import Maps from "../components/map2d"

interface Props {}

function Map(_props: Props): ReactElement {
  return (
    <Layout>
      <Maps />
    </Layout>
  )
}

export default Map
