import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = () => {
  const query = useStaticQuery(
    graphql`
      query SeoQuery {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )
  const dt = query.site.siteMetadata

  return (
    <Helmet
      htmlAttributes={{
        lang: `fr`,
      }}
      title={dt.title}
      meta={[
        {
          name: `description`,
          content: dt.description,
        },
        {
          property: `og:title`,
          content: dt.title,
        },
        {
          property: `og:description`,
          content: dt.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: dt.author,
        },
        {
          name: `twitter:title`,
          content: dt.title,
        },
        {
          name: `twitter:description`,
          content: dt.description,
        },
      ]}
    />
  )
}

export default SEO
