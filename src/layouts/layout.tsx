/**
 * Main site Layout
 */
import React from "react"
// import React, { useState, useEffect } from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import Footer from "./footer"
import Header from "./header"
import SEO from "./seo"
import "@fortawesome/fontawesome-free/css/all.min.css"

// import CookieBox from "./cookie";

// export type Theme = { name: string, label: string, icon: JSX.Element };
type LayoutProps = { children: any }

const Layout = ({ children }: LayoutProps) => {
  const query = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
          icon
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <Helmet>
        <link rel="icon" href={query.site.siteMetadata.icon} type="image/png" />
      </Helmet>
      <SEO />
      <div className="flex flex-col dark:bg-gray-900 light:bg-white">
        <Header template="demo" />
        <div className="text-color-default flex-grow">{children}</div>
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Layout
