import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

interface Props {}

const Counts = (props: Props) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
        opendata: allMetadata(filter: { type: { eq: "opendata" } }) {
          totalCount
        }
        dataset: allMetadata(filter: { type: { eq: "dataset" } }) {
          totalCount
        }
        map: allMetadata(filter: { type: { eq: "map" } }) {
          totalCount
        }
      }
    `
  )

  return (
    <section className=" bg-project-primary dark:bg-project-primary px-4 py-12 mx-auto sm:py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold leading-9 text-white sm:text-4xl sm:leading-10">
          Données disponibles sur la plateforme
        </h2>
        {/*<p className="mt-3 text-base leading-7 sm:mt-4 text-white">
                    sous titre de description des données.
                </p> */}
      </div>
      <div className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
        <div>
          <Link to="/search_openD">
            <p className="text-5xl font-extrabold leading-none text-white">
              {data.opendata.totalCount}
            </p>
            <p className="mt-2 text-base font-medium leading-6 text-white">
              Open Data
            </p>
          </Link>
        </div>
        <div className="mt-10 sm:mt-0">
          <a href={data.site.siteMetadata.siteUrl + "/geoportail/#"}>
            <p className="text-5xl font-extrabold leading-none text-white">
              {data.map.totalCount}
            </p>
            <p className="mt-2 text-base font-medium leading-6 text-white">
              Cartothèque
            </p>
          </a>
        </div>
        <div className="mt-10 sm:mt-0">
          <Link to="/search_meta">
            <p className="text-5xl font-extrabold leading-none text-white">
              {data.dataset.totalCount}
            </p>
            <p className="mt-2 text-base font-medium leading-6 text-white">
              Catalogue
            </p>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Counts
