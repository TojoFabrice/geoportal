import React, { ReactElement /*, useState*/ } from "react"

import Layout from "../layouts/layout"
import Content from "../layouts/content"
import { Link, PageProps } from "gatsby"
import {
  Configure,
  connectSearchBox,
  Hits,
  InstantSearch,
  //Menu,
  //Panel,
  Stats,
  //RefinementList,
} from "react-instantsearch-dom"
import typesenseAdapter from "../typesense"

//interface Props {}

function Actualites({ data }: PageProps): ReactElement {
  const searchClient = typesenseAdapter.searchClient

  const SearchBox = ({ currentRefinement, refine }: any) => (
    <div className="pb-5 sm:flex sm:items-center sm:justify-between gap-12">
      <div className="text-lg leading-6 font-medium text-gray-900 w-full">
        <h2 className="text-3xl font-extrabold">Actualités</h2>
        <h3 className="leading-6 text-project-primary font-semibold tracking-wide uppercase ">
          Consulter l'ensemble des actualités
        </h3>{" "}
      </div>
      <div className="w-full place-content-end justify-end align-end">
        <input
          type="search"
          value={currentRefinement}
          onChange={(event) => refine(event.currentTarget.value)}
          placeholder="Titre, description, mots clés"
          className="block w-full py-3 px-4 text-base rounded-xl h-14 placeholder-gray-500 shadow-sm focus:ring-project-primary focus:border-indigo-500 sm:flex-1 border-gray-300 "
        />
        <Stats />
      </div>
    </div>
  )
  const CustomSearchBox = connectSearchBox(SearchBox)

  const Hit = ({ hit }: any) => (
    <Link key={hit.title} to={hit.page_path}>
      <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8 rounded-lg bg-white dark:bg-gray-800 hover:shadow-xl shadow-lg my-10 gap-4 h-full">
        <div className="flex items-center justify-center rounded-md text-white h-full">
          <div>
            <img
              className="bg-cover w-full max-h-64 max-w-md rounded-l-md"
              src={decodeURIComponent(hit.thumbnail)}
              alt=""
            />
          </div>
        </div>
        <div className="col-span-2 px-20 py-12">
          <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            {hit.title}
          </h1>
          <p className="mt-3 text-base text-gray-500 truncate">
            {hit.description}
          </p>
        </div>
      </dl>
    </Link>
  )

  return (
    <div className="bg-gray-100">
      <Layout>
        <Content>
          <InstantSearch searchClient={searchClient} indexName="pages_v1">
            <Configure hitsPerPage={10} facetFilters={["typeData:NEWS"]} />
            <CustomSearchBox />
            <Hits hitComponent={Hit} />
          </InstantSearch>
        </Content>
      </Layout>
    </div>
  )
}

export default Actualites
