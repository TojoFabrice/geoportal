import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import HCg from "../components/headers/h_cg2"
import HDemo from "../components/headers/h_demo"
import HDefault from "../components/headers/h_defaut"
import HMamba from "../components/headers/h_mamba"
import "../css/header.css"

interface Props {
  template?: String
}

const Header = (props: Props) => {
  const data = useStaticQuery(
    graphql`
      query {
        api {
          site {
            name
            title
            logo
          }
          pages(
            where: {
              page_categories: { category: { name: { _eq: "header" } } }
            }
            order_by: { position: asc }
          ) {
            id
            author
            image_url
            created_at
            updated_at
            title
            published
            position
            toc
          }
        }
      }
    `
  )
  const site = { ...data.api.site[0] }
  const pages = { ...data.api.pages }

  switch (props.template) {
    case "mamba":
      return <HMamba logo={site.logo} />
    case "cg":
      return <HCg title={site.title} logo={site.logo} />
    case "demo":
      return <HDemo pages={pages} />
    default:
      return <HDefault />
  }
}

export default Header
