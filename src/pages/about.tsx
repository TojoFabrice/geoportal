import React, { ReactElement } from "react"
import { graphql, PageProps } from "gatsby"

import Layout from "../layouts/layout"
import Content from "../layouts/content"

function About({ data, location }: PageProps): ReactElement {
  const about = data.api.site[0].about
  return (
    <Layout>
      <Content>
        <p className="text-4xl font-bold text-gray-600 mb-14">A propos</p>
        <div dangerouslySetInnerHTML={{ __html: about }}></div>
      </Content>
    </Layout>
  )
}

export default About

export const query = graphql`
  query {
    api {
      site {
        about
      }
    }
  }
`
