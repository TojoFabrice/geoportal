import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import HeroMamba from "./heros/hero_mamba"
import HeroCG from "./heros/hero_cg"
import HeroDemo from "./heros/hero_demo"
import HeroDft from "./heros/hero_dft"

// import Search from './search'

interface Props {
  template?: string
}
// style="height:32rem; background-image: url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);"
const Hero = (props: Props) => {
  const data = useStaticQuery(
    graphql`
      query {
        api {
          site {
            name
            title
          }
        }
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `
  )
  // Merge default local data and GraphQL API data
  const site = { ...data.site.siteMetadata, ...data.api.site[0] }
  switch (props.template) {
    case "mamba":
      return <HeroMamba title={site.title} subtitle={site.subtitle} />
    case "cg":
      return <HeroCG title={site.title} />
    case "demo":
      return <HeroDemo title={site.title} />
    default:
      return <HeroDft title={site.title} subtitle={site.subtitle} />
  }
}

export default Hero
