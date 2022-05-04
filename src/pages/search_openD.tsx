import React, { /*useState,*/ ReactElement } from "react"
import { Link } from "gatsby"

import Layout from "../layouts/layout"
import Content from "../layouts/content"

import {
  InstantSearch,
  Configure,
  connectSearchBox,
  Stats,
  InfiniteHits,
  Panel,
  Menu,
} from "react-instantsearch-dom"
import typesenseAdapter from "../typesense"
import { getAbsoluteUrl } from "../utils"

interface Props {}

function Search_openData(_props: Props): ReactElement {
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
    <Link to={hit.page_path}>
      <div className="p-5 my-2 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img src={hit.thumbnail} className="m-2 float-left" alt=""></img>
        <div className="ml-2">
          <h1 className="text-xl">{hit.title}</h1>
          <p className="truncate">{hit.description}</p>
        </div>
      </div>
    </Link>
  )

  return (
    <Layout>
      <Content>
        <p className="text-4xl font-bold text-gray-600 dark:text-gray-100">
          OpenData
        </p>
        <p className=" mb-5 dark:text-gray-400">
          Effectuer un recherche dans le Catalogue OpenData{" "}
          <a
            className="text-blue-400"
            href={getAbsoluteUrl("/geonetwork/srv/fre/catalog.search")}
            target="_blank"
            rel="noreferrer"
          >
            Geonetwork
          </a>
        </p>
        <InstantSearch searchClient={searchClient} indexName="pages_v1">
          <Configure hitsPerPage={10} facetFilters={["typeData:opendata"]} />

          <CustomSearchBox />
          <Stats />

          <div className="float-left w-60 mt-5">
            <Panel header="Mots clés">
              <Menu
                attribute="tags"
                limit={10}
                showMoreLimit={500}
                showMore={true}
                searchable
              />
            </Panel>
          </div>
          <div className="ml-64">
            <InfiniteHits hitComponent={Hit} />
          </div>
        </InstantSearch>
      </Content>
    </Layout>
  )
}

export default Search_openData
