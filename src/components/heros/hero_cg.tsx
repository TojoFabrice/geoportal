import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

import imgCarto from "../../images/icon-visualisateur.png"
import imgGeocatalogue from "../../images/icon-geocatalogue.png"
import imgOpenData from "../../images/icon-opendata.png"
import imgDataviz from "../../images/icon-dataviz.png"
import imgField from "../../images/icon-field.png"
import imgCheck from "../../images/icon-check.png"

interface Props {
  title: String
}

const HeroCG = (props: Props) => {
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
  // const mapId = data.api.site[0].map_context_id

  return (
    <section className="mt-16">
      <div className="w-full z-0 pt-20 h-160 bg-cover bg-center bg-hero bg-fixed">
        <div className="w-full h-3/4 flex flex-wrap justify-center items-center gap-3 py-5 ">
          <Link
            to="/search_meta"
            className="group cursor-pointer transition duration-200 w-4/12 md:w-2/12 bg-white 
            rounded p-3 text-black border-1 border-gray-300 "
          >
            <div className="w-full mb-3 pb-3 border-b border-1 border-grey-300">
              <h3 className="text-xl font-semibold text-shadow flex flex-col justify-center items-center">
                DATASTORE
              </h3>
            </div>
            <div className=" flex-col justify-center items-center flex">
              <img src={imgOpenData} alt="image1" className="" />
            </div>
            <div className="transition-height duration-200 h-0 group-hover:h-20  md:flex hidden w-full">
              <p className="transition duration-200 text-opacity-0 group-hover:text-opacity-100 text-gray-900 w-full flex flex-col justify-center items-center text-center">
                Accédez à votre catalogue de données.
              </p>
            </div>
          </Link>

          <a
            href={siteUrl + "/geoportail/#/"}
            className="group cursor-pointer transition duration-200 hover:shadow-2xl backdrop backfrop-blur w-4/12 md:w-2/12 bg-white 
            rounded p-3 text-gray-700 border-1 border-gray-300 shadow-lg"
            rel="noreferrer"
          >
            <div className="w-full mb-3 pb-3 border-b border-1 border-grey-300">
              <h3 className="text-xl font-semibold text-shadow flex flex-col justify-center items-center ">
                MAP
              </h3>
            </div>
            <div className=" flex-col justify-center items-center flex">
              <img src={imgCarto} alt="image1" className="" />
            </div>
            <div className="transition-height duration-200 h-0 group-hover:h-20 md:flex hidden w-full">
              <p className="transition duration-200 text-opacity-0 group-hover:text-opacity-100 text-gray-900 w-full flex flex-col justify-center items-center text-center">
                Créez et gérez du contenu cartographique.
              </p>
            </div>
          </a>

          <a
            href={siteUrl + "/metabase/browse/"}
            className="group cursor-pointer transition duration-200 hover:shadow-2xl backdrop w-4/12 md:w-2/12 bg-white 
            rounded p-3 text-black border-1 border-gray-300 shadow-lg"
            rel="noreferrer"
          >
            <div className="w-full mb-3 pb-3 border-b border-1 border-grey-300">
              <h3 className="text-xl font-semibold text-shadow flex flex-col justify-center items-center ">
                DATAVIZ
              </h3>
            </div>
            <div className="flex-col justify-center items-center flex">
              <img src={imgDataviz} alt="image1" className="" />
            </div>
            <div className="transition-height duration-200 h-0 group-hover:h-20 md:flex hidden w-full">
              <p className="transition duration-200 text-opacity-0 group-hover:text-opacity-100 text-gray-900 w-full flex flex-col justify-center items-center text-center">
                Croisez et mettez en forme vos données.
              </p>
            </div>
          </a>

          <Link
            to="http://kf.egeo.geofit.fr/"
            className="group cursor-pointer transition duration-200 hover:shadow-2xl backdrop w-4/12 md:w-2/12 bg-white 
            rounded p-3 text-black border-1 border-gray-300 shadow-lg"
            rel="noreferrer"
          >
            <div className="w-full mb-3 pb-3 border-b border-1 border-grey-300">
              <h3 className="text-xl font-semibold text-shadow flex flex-col justify-center items-center ">
                FIELD
              </h3>
            </div>
            <div className="flex-col justify-center items-center flex">
              <img src={imgField} alt="image1" className="" />
            </div>
            <div className="transition-height duration-200 h-0 group-hover:h-20 md:flex hidden w-full">
              <p className="transition duration-200 text-opacity-0 group-hover:text-opacity-100 text-gray-900 w-full flex flex-col justify-center items-center text-center">
                Validez et collectez vos informations.
              </p>
            </div>
          </Link>

          <Link
            to="http://geofit-fme.ataraxie.fr/fmeserver"
            className="group cursor-pointer transition duration-200 hover:shadow-2xl backdrop w-4/12 md:w-2/12 bg-white 
            rounded p-3 text-black border-1 border-gray-300 shadow-lg"
            rel="noreferrer"
          >
            <div className="w-full mb-3 pb-3 border-b border-1 border-grey-300">
              <h3 className="text-xl font-semibold text-shadow flex flex-col justify-center items-center ">
                INTEGRATE
              </h3>
            </div>
            <div className="flex-col justify-center items-center flex">
              <img src={imgCheck} alt="image1" className="" />
            </div>
            <div className="transition-height duration-200 h-0 group-hover:h-20 md:flex hidden w-full">
              <p className="transition duration-200 text-opacity-0 group-hover:text-opacity-100 text-gray-900 w-full flex flex-col justify-center items-center text-center">
                Importer, exporter, fiabiliser et contrôlez vos données
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroCG
