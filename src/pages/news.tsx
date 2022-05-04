import React, { ReactElement } from "react"

import Layout from "../layouts/layout"
import Content from "../layouts/content"
import { Link, PageProps } from "gatsby"
import {
  Configure,
  connectSearchBox,
  InfiniteHits,
  InstantSearch,
  // Menu,
  // Panel,
  Stats,
  // RefinementList,
} from "react-instantsearch-dom"
import typesenseAdapter from "../typesense"

// interface Props {}

function News({ data }: PageProps): ReactElement {
  const searchClient = typesenseAdapter.searchClient

  const SearchBox = ({ currentRefinement, refine }: any) => (
    <div className="w-full h-14 bg-white border border-gray-400 rounded-xl">
      <input
        type="search"
        value={currentRefinement}
        onChange={(event) => refine(event.currentTarget.value)}
        placeholder="Titre, description, mots clés"
        className="appearance-none w-full p-3 bg-transparent outline-none focus:outline-none active:outline-none text-xl"
      />
    </div>
  )
  const CustomSearchBox = connectSearchBox(SearchBox)

  const Hit = ({ hit }: any) => (
    <div
      key={hit.title}
      className="flex flex-col rounded-lg shadow-lg overflow-hidden"
    >
      <div className="flex-shrink-0">
        <img
          className="h-48 w-full object-cover"
          src="https://wireframestogo.com/585b-Image-Placeholder-Light/thumbnail.png"
          alt=""
        />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <Link className="block mt-2" to={hit.page_path}>
            <p className="text-xl font-semibold text-gray-900">{hit.title}</p>
            <p className="truncate mt-3 text-base text-gray-500">
              {hit.description}
            </p>
          </Link>
        </div>
      </div>
    </div>
    /*     <Link to={hit.page_path}>
      <div className="p-5 my-2 bg-gray-50 hover:bg-gray-100">
        <div className="ml-2">
          <img src='https://wireframestogo.com/585b-Image-Placeholder-Light/thumbnail.png' className="m-2 float-left" alt=""></img>
          <h1 className="text-xl">{hit.title}</h1>
          <p className="truncate">{hit.description}</p>
        </div>
      </div>
    </Link> */
  )

  return (
    <Layout>
      <Content>
        <p className="text-4xl font-bold text-gray-600">Actualités !</p>
        <p className=" mb-5"> Consulter l'ensemble des actualités </p>
        <InstantSearch searchClient={searchClient} indexName="pages_v1">
          <Configure hitsPerPage={10} facetFilters={["typeData:NEWS"]} />

          <CustomSearchBox />
          <Stats />

          <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="relative max-w-7-xl mx-auto">
              <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                <InfiniteHits hitComponent={Hit} />
              </div>
            </div>
          </div>
        </InstantSearch>
      </Content>
    </Layout>
  )
}

export default News
