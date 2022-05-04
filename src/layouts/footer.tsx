/**
 * https://www.tailwind-kit.com/components/footer
 */
import { Link } from "gatsby"

import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import logoSig from "../images/logo-egeo.png"
import logoSigDark from "../images/logo-egeo-dark.png"

// Partenaires logos
import geofitLogo from "../images/geofit.svg"
import geofitGroupLogo from "../images/geofit_group.svg"
import geofitExpertLogo from "../images/geofit_expert.svg"
import ignFiLogo from "../images/ignfi.svg"

// Partenaires logos - dark
import geofitLogoDark from "../images/geofit-dark.svg"
import geofitGroupLogoDark from "../images/geofit_group-dark.svg"
import geofitExpertLogoDark from "../images/geofit_expert-dark.svg"
import ignFiLogoDark from "../images/ignfi-dark.svg"

interface Props {}

const Footer = (props: Props) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          buildTime
        }
        api {
          pages(
            where: {
              page_categories: { category: { name: { _eq: "footer" } } }
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
  const buildTime: Date = new Date(data.site.buildTime)
  const pages = { ...data.api.pages }

  const pageItems = Object.keys(pages).map(function (index) {
    return (
      <div>
        <a className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
          <Link
            key={"footer_item_" + pages[index].id}
            to={
              "/" +
              pages[index].title
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
            }
            className="text-base text-gray-500 hover:text-gray-900"
          >
            {pages[index].title}
          </Link>
        </a>
      </div>
    )
  })

  return (
    <footer
      className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 w-full z-50"
      aria-labelledby="footer-heading"
    >
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link to="/" aria-label="Back to homepage" className="">
              <img
                src={logoSig}
                alt="logo"
                className="block h-10 w-auto dark:hidden"
              />
              <img
                src={logoSigDark}
                alt="logo"
                className="block h-10 w-auto hidden dark:flex"
              />
            </Link>
            <p className="text-gray-500 text-base">
              Plateforme de géoservices de Geofit
            </p>
            <div className="flex space-x-6">
              <a
                key="Linkedin"
                href="https://www.linkedin.com/company/geofit-group/"
                className="text-gray-400 hover:text-gray-500"
              >
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
              <a
                key="Facebook"
                href="https://fr-fr.facebook.com/geofit.fr"
                className="text-gray-400 hover:text-gray-500"
              >
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a
                key="Twitter"
                href="https://twitter.com/geofitgroup"
                className="text-gray-400 hover:text-gray-500"
              >
                <i className="fab fa-twitter fa-lg"></i>
              </a>
            </div>
          </div>
          <div className="mt-10 col-span-2 grid grid-cols-1 gap-10 sm:grid-cols-4 lg:grid-cols-4">
            {pageItems}
          </div>
        </div>
        <div className="mt-4 border-t border-gray-200 dark:border-gray-700 pt-4">
          <p className="text-sm mb-4 font-semibold text-gray-400 tracking-wider uppercase">
            Le groupe
          </p>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-4 dark:hidden">
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img className="h-12" src={geofitLogo} alt="Geofit" />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img className="h-12" src={geofitGroupLogo} alt="GeofitGroup" />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img
                  className="h-12"
                  src={geofitExpertLogo}
                  alt="Geofit Expert"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                <img className="h-12" src={ignFiLogo} alt="IGN FI" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-4 hidden dark:grid">
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img className="h-12" src={geofitLogoDark} alt="Geofit" />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img
                  className="h-12"
                  src={geofitGroupLogoDark}
                  alt="GeofitGroup"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img
                  className="h-12"
                  src={geofitExpertLogoDark}
                  alt="Geofit Expert"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                <img className="h-12" src={ignFiLogoDark} alt="IGN FI" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
