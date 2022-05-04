import { Link } from "gatsby"
import React, { Fragment } from "react"
import Search from "../search"
import logoSig from "../../images/logo-egeo.png"
import logoSigDark from "../../images/logo-egeo-dark.png"
import {
  UserCircleIcon,
  SearchIcon,
  ChevronDownIcon,
} from "@heroicons/react/solid"
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline"
import { Disclosure, Menu, Transition, Popover } from "@headlessui/react"
import ThemeToggle from "./themeToggle" // 👈

interface Props {
  pages?: Object
}

const H_DEMO = (props: Props) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
  }
  const pageItems = Object.keys(props.pages).map(function (index) {
    return (
      <Link
        key={"navabar_item_" + props.pages[index].id}
        to={
          "/" +
          props.pages[index].title
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
        }
        className="border-transparent hover:border-project-primary text-gray-900 dark:text-gray-100 inline-flex items-center px-4 pt-1 border-b-2 text-sm font-medium"
      >
        {props.pages[index].title}
      </Link>
    )
  })

  const pageMobileItems = Object.keys(props.pages).map(function (index) {
    return (
      <Disclosure.Button
        key={"navabar_mobile_item_" + props.pages[index].id}
        href={
          "/" +
          props.pages[index].title
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
        }
        className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
      >
        {props.pages[index].title}
      </Disclosure.Button>
    )
  })

  return (
    <Disclosure
      as="nav"
      key="navbar"
      className="bg-white dark:bg-gray-800 shadow-sm fixed w-full z-50"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex px-2 lg:px-0">
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/" aria-label="Back to homepage" className="">
                    <img
                      src={logoSig}
                      alt="logo"
                      className="block h-8 w-auto dark:hidden"
                    />
                    <img
                      src={logoSigDark}
                      alt="logo"
                      className="block h-8 w-auto hidden dark:flex"
                    />
                  </Link>
                </div>
                <div className="hidden lg:ml-6 lg:flex lg:space-x-8 pl-4">
                  {pageItems}
                </div>
              </div>

              <div className="flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-project-primary">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:ml-4 lg:flex lg:items-center">
                <ThemeToggle></ThemeToggle>
                <Search />
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open
                            ? "text-gray-900  dark:text-gray-100"
                            : "text-gray-500",
                          "group rounded-md inline-flex items-left text-base font-medium hover:text-gray-900 focus:outline-none "
                        )}
                      >
                        <UserCircleIcon className="h-10 w-10 text-gray-500 hover:text-gray-700" />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="origin-top-right absolute z-10 left transform -translate-x-1/2 mt-3 px-2 max-w-xs sm:px-0">
                          <div className="text-sm font-medium rounded-md shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white dark: dark:bg-gray-900 px-6 py-4 ">
                              <a
                                href="/admin"
                                target="_blank"
                                className="-m-3 p-3 block rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition ease-in-out duration-150"
                              >
                                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                  Connexion
                                </p>
                              </a>
                              <a
                                href="/inscription"
                                className="-m-3 p-3 block rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition ease-in-out duration-150"
                              >
                                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                  Inscription
                                </p>
                              </a>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden bg-white dark:bg-gray-900 shadow">
            <div className="pt-2 pb-3 space-y-1">{pageMobileItems}</div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="mt-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Connexion
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Inscription
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default H_DEMO
