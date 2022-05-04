import React, { ReactElement } from "react"
import { graphql, /*Link,*/ PageProps } from "gatsby"

import Layout from "../layouts/layout"
import Content from "../layouts/content"
import { MenuIcon } from "@heroicons/react/outline"

import Editor from "@react-page/editor"

// The rich text area plugin
import slate from "@react-page/plugins-slate"
import image from "@react-page/plugins-image"
import video from "@react-page/plugins-video"
import spacer from "@react-page/plugins-spacer"
import divider from "@react-page/plugins-divider"
import metabase from "../plugins/customContentPluginMetabase"
import mapstore from "../plugins/customContentPluginMapstore"

// TOC
import Toc from "../components/toc/index"

const cellPlugins = [slate(), image, video, spacer, divider, metabase, mapstore]

function Page({ data }: PageProps): ReactElement {
  const page = data.api.pages[0]
  const page_content = page.content
  /* const editor_cmp = <Editor value={page_content} cellPlugins={cellPlugins} readOnly /> */
  return (
    <Layout>
      <Content>
        <div id={page.id} className="prose dark:prose-dark max-w-7xl">
          {page.toc === true ? (
            <div>
              <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 right-0">
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex-1 flex flex-col min-h-0 border-l border-gray-200 pl-4 bg-white z-1">
                  <div className="flex-1 flex flex-col mt-20 pb-4 overflow-y-auto">
                    <Toc containerSelector={page.id}></Toc>
                  </div>
                </div>
              </div>
              <div className="md:pr-64 flex flex-col flex-1 right-0">
                <div className="sticky top-20 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
                  <button
                    type="button"
                    className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    /* onClick={() => setSidebarOpen(true)} */
                  >
                    <span className="sr-only">Open sidebar</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <main className="flex-1">
                  <div className="py-6">
                    <Editor
                      title="Menu interne"
                      value={page_content}
                      cellPlugins={cellPlugins}
                      readOnly
                    />
                  </div>
                </main>
              </div>
              {/* <Toc headings={data.markdownRemark.headings}></Toc> */}
            </div>
          ) : (
            <Editor value={page_content} cellPlugins={cellPlugins} readOnly />
          )}
        </div>
      </Content>
    </Layout>
  )
}

export default Page

export const query = graphql`
  query ($id: api_uuid!) {
    api {
      pages(where: { id: { _eq: $id } }) {
        id
        title
        toc
        content
        published
        position
      }
    }
  }
`
