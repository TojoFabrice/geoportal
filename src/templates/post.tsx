import React, { ReactElement } from "react"
import { graphql, /*Link,*/ PageProps } from "gatsby"

import Layout from "../layouts/layout"
import Content from "../layouts/content"
import Tag from "../components/tag"
import List from "../components/list"
import Moment from "moment"
import { ArrowCircleLeftIcon } from "@heroicons/react/outline"

function Post({ data, location }: PageProps): ReactElement {
  Moment.locale("fr")
  // @ts-ignore
  const post = data.api.posts[0]

  const links = data.api.links
  const documents = data.api.documents
  const base_url = data.site.siteMetadata.siteUrl
  //{
  /*const keywords = post.keywords.map((kw: string) => {
    return <Tag title={kw} />
  })

  const image: IGatsbyImageData = getImage(data.image)*/
  //}

  return (
    <div className="bg-gray-100">
      <Layout>
        <Content>
          <div className="mt-28 w-full pb-10">
            <div className="space-y-6 lg:col-start-1 lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 shadow rounded-xl">
                <div className="px-4 py-5 sm:px-6">
                  <a
                    href="/actualites"
                    aria-label="Page d'actualités"
                    className="flex flex-inline-col text-gray-500 hover:text-gray-700 pb-2"
                  >
                    <ArrowCircleLeftIcon
                      className="h-6 w-6 mr-2"
                      aria-hidden="true"
                    />
                    Retour
                  </a>
                  <h2
                    data-typesense-field="title"
                    className="text-3xl font-extrabold mb-8 dark:text-white"
                  >
                    {post.title}
                  </h2>
                  <h3 className="leading-6 text-project-primary font-semibold tracking-wide uppercase ">
                    Soumis par {post.author} le{" "}
                    {Moment(post.created_at).format("D MMM YYYY")}
                  </h3>
                  <Tag title={post.keywords} />{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-8 gap-8">
            <div className="w-3/4">
              <div className="bg-white dark:bg-gray-800 shadow rounded-xl">
                <div className="px-4 py-5 sm:px-6">
                  <div className="flex">
                    <div>
                      <img src={post.image_url} alt="" className="z-10" />
                      <span data-typesense-field="thumbnail" className="hidden">
                        {encodeURIComponent(post.image_url)}
                      </span>
                    </div>
                  </div>
                  <div
                    data-typesense-field="description"
                    className="my-10 text-justify dark:text-gray-400"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  ></div>
                </div>
              </div>
            </div>
            <section aria-labelledby="timeline-title" className="w-1/4">
              <div className="bg-white dark:bg-gray-800 px-4 py-5 shadow rounded-xl sm:px-6">
                {/* Activity Feed */}
                <div className="mt-6 flow-root">
                  <List title="Liens utiles" content={links} template="utils" />
                  <List
                    title="Documents utiles"
                    content={documents}
                    template="document"
                    base_url={base_url}
                  />
                </div>
              </div>
            </section>
          </div>
          <p data-typesense-field="typeData" className="hidden">
            NEWS
          </p>
        </Content>
      </Layout>
    </div>
  )
}

export default Post

export const query = graphql`
  query ($id: api_uuid!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    api {
      posts(where: { id: { _eq: $id } }) {
        id
        title
        content
        keywords
        author
        category
        image_url
        created_at
        updated_at
        published
      }
      links(where: { post_links: { post_id: { _eq: $id } } }) {
        label
        url
        id
      }
      documents(where: { post_documents: { post_id: { _eq: $id } } }) {
        name
        tus_id
        id
      }
    }
  }
`
