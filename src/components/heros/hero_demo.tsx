import { Link } from "gatsby"
import React from "react"
import { XIcon } from "@heroicons/react/outline"
import { useStaticQuery, graphql } from "gatsby"

import imgCarto from "../../images/icon-visualisateur.svg"
import imgGeocatalogue from "../../images/icon-geocatalogue.svg"
import imgOpenData from "../../images/icon-opendata.svg"
import imgDataviz from "../../images/icon-dataviz.svg"
import imgField from "../../images/icon-field.svg"
import imgCheck from "../../images/icon-check.svg"

import imgCartoDark from "../../images/icon-visualisateur-dark.svg"
import imgGeocatalogueDark from "../../images/icon-geocatalogue-dark.svg"
import imgOpenDataDark from "../../images/icon-opendata-dark.svg"
import imgDatavizDark from "../../images/icon-dataviz-dark.svg"
import imgFieldDark from "../../images/icon-field-dark.svg"
import imgCheckDark from "../../images/icon-check-dark.svg"

interface Props {
  title: String
}

const HeroDemo = (props: Props) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
        api {
          site {
            map_context_id
          }
        }
      }
    `
  )
  const siteUrl = data.site.siteMetadata.siteUrl

  return (
    <section>
      <div className="w-full bg-cover bg-center bg-hero h-160 z-0 pt-20">
        <div className="h-auto w-full bg-white dark:bg-gray-800 bg-opacity-50 flex">
          <div className="text-center">
            <p className="text-teal-500 text-l font-semibold uppercase md:text-3xl overflow-ellipsis md:overflow-clip "></p>
          </div>
        </div>
        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-20 lg:px-8">
          <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="block text-white">
              Hub géospatial collaboratif
            </span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-center text-xl text-gray-200 sm:max-w-3xl">
            Solution Open Source sur-mesure pour communiquer et valoriser les
            données disponibles sur votre territoire ou vos infrastructures
          </p>
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            {/* <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5"> */}
            <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5">
              <a
                href={siteUrl + "/geoportail/#/"}
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-extrabold rounded-md uppercase  shadow-sm shadow-xl text-white bg-project-primary hover:bg-project-primaryHov sm:px-8"
              >
                Cartes interactives
              </a>
              {/*               <a
                href="#"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-extrabold rounded-md shadow-sm text-project-secondary bg-white bg-opacity-60 hover:bg-opacity-70 sm:px-8"
              >
                Actualités
              </a> */}
            </div>
          </div>
          <div className="w-full h-3/4 flex flex-wrap justify-center items-center gap-12 xl:mt-16 lg:mt-0 my-4 sm:pt-20">
            <ul
              role="list"
              className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-5"
            >
              <li className="col-span-1 bg-white dark:bg-gray-800 rounded-lg divide-y divide-gray-200 transition duration-200 ease-in-out hover:-translate-y-2 shadow-xl hover:shadow-2xl px-8 py-5">
                <Link
                  to="/search_meta"
                  target="_blank"
                  className="group flex-grow lg:flex-grow-0 cursor-pointer transition duration-200 hover:shadow-2xl backdrop w-5/12 md:w-1/5"
                  rel="noreferrer"
                >
                  <div className="absolute items-center justify-center w-16 rounded-md text-white hidden sm:flex">
                    <img
                      src={imgOpenData}
                      alt="image1"
                      className="w-full dark:hidden"
                    />
                    <img
                      src={imgOpenDataDark}
                      alt="image1"
                      className="w-full hidden dark:flex"
                    />
                  </div>
                  <div className="w-full">
                    <h3 className="sm:ml-20 text-xl font-semibold text-shadow flex flex-col dark:text-white">
                      DATASTORE
                    </h3>
                    <p className="mt-2 sm:ml-20 text-sm text-gray-500 dark:text-gray-300">
                      Accédez à votre catalogue de données.
                    </p>
                  </div>
                </Link>
              </li>
              <li className="col-span-1 bg-white dark:bg-gray-800 rounded-lg divide-y divide-gray-200 transition duration-200 ease-in-out hover:-translate-y-2 shadow-xl hover:shadow-2xl px-8 py-5">
                <Link
                  to={siteUrl + "/geoportail/#/"}
                  className="group flex-grow lg:flex-grow-0 cursor-pointer transition duration-200 hover:shadow-2xl backdrop w-5/12 md:w-1/5"
                >
                  <div className="absolute items-center justify-center w-16 rounded-md text-white hidden sm:flex">
                    <img
                      src={imgCarto}
                      alt="image1"
                      className="w-full dark:hidden"
                    />
                    <img
                      src={imgCartoDark}
                      alt="image1"
                      className="w-full hidden dark:flex"
                    />
                  </div>
                  <div className="w-full">
                    <h3 className="sm:ml-20 text-xl font-semibold text-shadow flex flex-col dark:text-white">
                      MAP
                    </h3>
                    <p className="mt-2 sm:ml-20 text-sm text-gray-500 dark:text-gray-300">
                      Consulter, gérer, mettre à jour et diffuser vos contenus
                      cartographiques.
                    </p>
                  </div>
                </Link>
              </li>
              <li className="col-span-1 bg-white dark:bg-gray-800 rounded-lg divide-y divide-gray-200 transition duration-200 ease-in-out hover:-translate-y-2 shadow-xl hover:shadow-2xl px-8 py-5">
                <Link
                  to={siteUrl + "/metabase/browse/"}
                  target="_blank"
                  className="group flex-grow lg:flex-grow-0 cursor-pointer transition duration-200 hover:shadow-2xl backdrop w-5/12 md:w-1/5"
                >
                  <div className="absolute items-center justify-center w-16 rounded-md text-white hidden sm:flex">
                    <img
                      src={imgDataviz}
                      alt="image1"
                      className="w-full dark:hidden"
                    />
                    <img
                      src={imgDatavizDark}
                      alt="image1"
                      className="w-full hidden dark:flex"
                    />
                  </div>
                  <div className="w-full">
                    <h3 className="sm:ml-20 text-xl font-semibold text-shadow flex flex-col dark:text-white">
                      DATAVIZ
                    </h3>
                    <p className="mt-2 sm:ml-20 text-sm text-gray-500 dark:text-gray-300">
                      Croisez et mettez en forme vos données.
                    </p>
                  </div>
                </Link>
              </li>
              <li className="col-span-1 bg-white dark:bg-gray-800 rounded-lg divide-y divide-gray-200 transition duration-200 ease-in-out hover:-translate-y-2 shadow-xl hover:shadow-2xl px-8 py-5">
                <Link
                  to="http://kf.egeo.geofit.fr/"
                  target="_blank"
                  className="group flex-grow lg:flex-grow-0 cursor-pointer transition duration-200 hover:shadow-2xl backdrop w-5/12 md:w-1/5"
                >
                  <div className="absolute items-center justify-center w-16 rounded-md text-white hidden sm:flex">
                    <img
                      src={imgField}
                      alt="image1"
                      className="w-full dark:hidden"
                    />
                    <img
                      src={imgFieldDark}
                      alt="image1"
                      className="w-full hidden dark:flex"
                    />
                  </div>
                  <div className="w-full">
                    <h3 className="sm:ml-20 text-xl font-semibold text-shadow flex flex-col dark:text-white">
                      FIELD
                    </h3>
                    <p className="mt-2 sm:ml-20 text-sm text-gray-500 dark:text-gray-300">
                      Validez et collectez vos informations.
                    </p>
                  </div>
                </Link>
              </li>
              <li className="col-span-1 bg-white dark:bg-gray-800 rounded-lg divide-y divide-gray-200 transition duration-200 ease-in-out hover:-translate-y-2 shadow-xl hover:shadow-2xl px-8 py-5">
                <Link
                  to="http://geofit-fme.ataraxie.fr/fmeserver"
                  target="_blank"
                  className="group flex-grow lg:flex-grow-0 cursor-pointer transition duration-200 hover:shadow-2xl backdrop w-5/12 md:w-1/5"
                >
                  <div className="absolute items-center justify-center w-16 rounded-md text-white hidden sm:flex">
                    <img
                      src={imgCheck}
                      alt="image1"
                      className="w-full dark:hidden"
                    />
                    <img
                      src={imgCheckDark}
                      alt="image1"
                      className="w-full hidden dark:flex"
                    />
                  </div>
                  <div className="w-full">
                    <h3 className="sm:ml-20 text-xl font-semibold text-shadow flex flex-col dark:text-white">
                      CHECK
                    </h3>
                    <p className="mt-2 sm:ml-20 text-sm text-gray-500 dark:text-gray-300">
                      Fiabiliser et contrôlez vos données
                    </p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroDemo
