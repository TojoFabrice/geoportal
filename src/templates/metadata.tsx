import { graphql, Link, PageProps } from "gatsby"
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"
import React, { ReactElement } from "react"
import dayjs from "dayjs"

import Tag from "../components/tag"
import Layout from "../layouts/layout"
import Content from "../layouts/content"

import Maps from "../components/map2d"
import LinkList from "../components/lists/lists_tplt/linkList"

function Metadata({ data, location }: PageProps): ReactElement {
  // @ts-ignore
  const config = data.site.siteMetadata
  // @ts-ignore
  const post = data.metadata

  const keywords = post.keyword.map((kw: string) => {
    return <Tag title={kw} />
  })

  const links = post.link

  const geoNet =
    config.siteUrl + "/geonetwork/srv/fre/catalog.search#/metadata/" + post.id

  let thumbnail = post.thumbnail

  if (post.thumbail != null && post.thumbnail.childImageSharp.resize) {
    thumbnail = post.thumbnail.childImageSharp.resize.src
  } else {
    thumbnail = ""
  }

  // @ts-ignore
  const image: IGatsbyImageData = getImage(post.image)

  //const [show, setShow] = React.useState();
  return (
    <Layout>
      <Content>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 lg:gap-8 prose dark:prose-dark ">
          <main className="lg:col-span-2 ">
            <p data-typesense-field="title" className="text-2xl">
              {post.title}
            </p>
            <Link
              to={geoNet}
              target="_blank"
              className="text-blue-300  hover:text-blue-500 hover:underline"
            >
              Ouvrir la fiche Geonetwork
            </Link>

            <div data-typesense-field="description" className="my-10">
              {post.abstract}
            </div>

            <div>
              Mots clés :<br />
              {keywords}
              <br />
            </div>
          </main>
          <aside className="order-first lg:order-last">
            <div className="sticky top-6 space-y-2">
              <Tag title={post.updateFrequency} />
              <h3 className="text-md">
                Date de création :
                {dayjs(post.creationDate).format("DD/MM/YYYY")}
              </h3>
              <h3 className="text-md">
                Date de modification :
                {dayjs(post.modified).format("DD/MM/YYYY")}
              </h3>
              <div className="flex">
                <div>
                  <GatsbyImage image={image} alt="" />
                  <span data-typesense-field="thumbnail" className="hidden">
                    {thumbnail}
                  </span>
                </div>
              </div>
              <div className="flex-2 max-h-81">
                <Maps format="min" idMap={0} />
              </div>
            </div>
          </aside>
        </div>

        <br />

        <LinkList title="Téléchargements et liens" subtitle="" links={links} />

        <br />
        <br />

        <p data-typesense-field="typeData" className="hidden">
          {post.type}
        </p>
      </Content>
    </Layout>
  )
}

export default Metadata

export const query = graphql`
  query ($id: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    metadata(id: { eq: $id }) {
      id
      title
      link {
        onlineResource
        protocol
        name
        description
        mimetype
      }
      geoBox
      responsibleParty {
        name
        email
        role
        type
      }
      keyword
      abstract
      modified
      created
      creationDate
      denominator
      geoDesc

      thumbnail: image {
        childImageSharp {
          resize(width: 50, fit: COVER) {
            src
          }
        }
      }
      image {
        childImageSharp {
          gatsbyImageData(
            width: 500
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }

      isHarvested
      lineage
      logo
      published
      resolution
      source
      type
      updateFrequency
      uuid
      valid
    }
  }
`
