import React, { ReactElement } from "react"
import { graphql, PageProps } from "gatsby"

import Layout from "../layouts/layout"
import Content from "../layouts/content"
import Hero from "../components/hero"
import List from "../components/list"
import Counts from "../components/counts"
import Maps from "../components/map2d"

function Index({ data }: PageProps): ReactElement {
  // @ts-ignore
  const config = data.site.siteMetadata

  // @ts-ignore
  const api = data.api
  const posts = api.posts

  const site = api.site[0]
  const map_id = site ? site.map_context_id : null

  // @ts-ignore
  const dataset = data.dataset.nodes

  // @ts-ignore
  // const map = data.map.nodes

  return (
    <Layout>
      <Hero template="demo" />
      <Content>
        <div className="mt-20 grid grid-cols-1 gap-x-4 gap-y-8 lg:grid-cols-2 md:pt-28 pt-20">
          <div className="flex flex-col">
            <div>
              <Maps format="min" idMap={map_id} />
            </div>
          </div>
          <div className="flex flex-col flex-1 p-6">
            <div className="">
              <h3 className="leading-6 text-project-primary font-semibold tracking-wide uppercase ">
                Géoviz
              </h3>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl mb-8 dark:text-white">
                Vos cartes à la une
              </h2>
              <p className="pt-4 mt-8 text-xl text-gray-500 leading-8">
                Le géoportail permet de visualiser simplement ces données
                cartographiques. Simple d'utilisation, cet outil se base sur une
                technologie Mapstore nativement compatible avec Geoserver.{" "}
                <br />
                <br />
                Visualiser ces données, annoter des cartes, créer de nouvelles
                entités, tout est possible dans cet environnement. Vous pourrez
                donc analyser vos données rapidement et de manière sécurisée.
              </p>
              <div className="mt-8 sm:flex">
                <div className="rounded-md shadow">
                  <a
                    href="/geoportail"
                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-project-primary hover:bg-project-secondary"
                  >
                    Les cartes
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Content>
      <Content>
        <List
          title="Vos Actualités"
          subtitle="Voir toutes les actualités"
          link="actualites"
          content={posts}
          template="card"
        />
      </Content>

      <Content>
        <List
          title="Votre catalogue de données"
          subtitle="Voir toutes les métadonnées"
          link="search_meta"
          content={dataset}
          template="card"
        />
      </Content>

      <Content>
        <p className="text-4xl font-bold text-gray-800 mb-4 dark:text-white">
          Carte à la Une
        </p>
        <p className="text-2xl font-light text-gray-400 hover:text-blue-800">
          <a href={config.siteUrl + "/geoportail/#"}>Voir tous les contextes</a>
        </p>

        <iframe
          title="mapstore2"
          // allowFullScreen = {true}
          src="https://georchestra.geo-solutions.it/mapstore/#/context/urbanismecadastrapp/3494"
          // src="http://egeo.geofit-mada/geoportail/#/viewer/openlayers/19"
          // src="http://egeo.geofit-mada/geoportail/#/viewer/openlayers/47"
          // src="http://localhost:8081/#/viewer/openlayers/10358"
          // src="http://localhost:8083/geoserver/cite/wms?service=WMS&version=1.1.0&request=GetMap&layers=cite%3Alim_reg_nat_2009&bbox=528266.75%2C626511.6875%2C727015.9375%2C947401.9375&width=475&height=768&srs=EPSG%3A2019&styles=&format=application/openlayers"
          allowFullScreen={true}
          className="w-full h-192 border-0"
        />
        {/* <iframe allowFullScreen={true}  src="https://georchestra.geo-solutions.it/mapstore/embedded.html#/3023"></iframe> */}
      </Content>

      <Counts />
    </Layout>
  )
}

export default Index

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
      }
    }
    api {
      posts(limit: 3) {
        id
        title
        content
        keywords
        image_url
        author
        created_at
      }
      site {
        map_context_id
      }
    }
    dataset: allMetadata(
      limit: 3
      sort: { fields: modified, order: DESC }
      filter: {
        type: { eq: "dataset" }
        url: { ne: "" }
        image: { childImageSharp: { id: { ne: null } } }
      }
    ) {
      nodes {
        id
        title
        image {
          childImageSharp {
            gatsbyImageData(
              width: 300
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        content: abstract
      }
    }
    opendata: allMetadata(
      limit: 3
      sort: { fields: modified, order: DESC }
      filter: { type: { eq: "opendata" }, url: { ne: "" } }
    ) {
      nodes {
        id
        title
        image {
          childImageSharp {
            gatsbyImageData(
              width: 300
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        content: abstract
      }
    }
    map: allMetadata(
      limit: 3
      sort: { fields: modified, order: DESC }
      filter: { type: { eq: "map" }, url: { ne: "" } }
    ) {
      nodes {
        id
        title
        image {
          childImageSharp {
            gatsbyImageData(
              width: 300
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        content: abstract
      }
    }
  }
`
