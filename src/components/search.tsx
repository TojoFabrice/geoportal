import React, { Fragment, useState } from "react"

import { InstantSearch, Configure } from "react-instantsearch-dom"

import Autocomplete from "./search/autocomplete"
import { Dialog, Transition } from "@headlessui/react"
import { SearchIcon } from "@heroicons/react/outline"
// @ts-ignore
import typesenseAdapter from "../typesense"

interface Props {}

const Search = (props: Props) => {
  const searchClient = typesenseAdapter.searchClient
  // @ts-ignore
  const [query, setQuery] = useState("")
  const [searchBarActive, setSearchBarActive] = useState(false)
  const [open, setOpen] = useState(false)

  return (
    <>
      <section className="my-4 flex w-full">
        <button
          onClick={() => {
            setOpen(!open)
          }}
          type="submit"
          className="z-50 px-4 outline-none focus:outline-none active:outline-none"
        >
          <SearchIcon
            className="h-6 w-6 dark:text-gray-200"
            aria-hidden="true"
          />
        </button>
      </section>
      <Transition.Root
        show={open}
        as={Fragment}
        afterLeave={() => setQuery("")}
      >
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20"
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity blur" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <section className="my-4 flex justify-center">
              <InstantSearch searchClient={searchClient} indexName="pages_v1">
                <Configure hitsPerPage={5} />
                <Autocomplete
                  // @ts-ignore
                  onSuggestionSelected={setQuery}
                  onSuggestionCleared={setQuery}
                />
                <button
                  type="submit"
                  className="-mx-10 z-50 outline-none focus:outline-none active:outline-none dark:color-gray-100 dark:border-gray-100"
                >
                  <SearchIcon
                    className="h-6 w-6 dark:color-gray-100 dark:border-gray-100"
                    aria-hidden="true"
                  />
                </button>
              </InstantSearch>
            </section>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default Search
