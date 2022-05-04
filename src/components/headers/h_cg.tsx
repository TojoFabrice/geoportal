import { Link } from "gatsby"
import React, { useState } from "react"
import Search from "../search"
import logo from "../../images/logo-egeo.png"
import { UserCircleIcon } from "@heroicons/react/solid"
import { getAbsoluteUrl } from "../../utils"
interface Props {
  title: String
  logo?: String
}

const H_CG = (props: Props) => {
  const [menuOpen, setMenuOpen] = useState(false)

  function handleMenuClick() {
    setMenuOpen(!menuOpen)
    console.log(menuOpen)
  }

  return (
    <header className="p-2 bg-gray-100 text-gray-700 border-b-2 border-indigo-500 flex fixed top-0 inset-x-0 z-9999 items-center flex-col">
      <div className="container flex h-16 ">
        <Link to="/" aria-label="Back to homepage" className="flex ">
          <img src={logo} alt="logo" className="" />
        </Link>
        <div className="flex items-center md:space-x-4 w-200">
          <div className="relative w-100 md:w-96 xl:w-140 hidden md:block">
            <Search />
          </div>
        </div>

        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <Link
              to="/content"
              className="flex items-center px-4 rounded cursor-pointer no-underline hover:no-underline transition-colors duration-200 mx-1 hover:bg-indigo-500 hover:text-white font-bold"
            >
              Découvrir
            </Link>
          </li>
          <li className="flex">
            <Link
              to="/news"
              className="flex items-center px-4 rounded cursor-pointer no-underline hover:no-underline transition-colors duration-200 mx-1 hover:bg-indigo-500 hover:text-white font-bold"
            >
              Actualités
            </Link>
          </li>
          <li className="flex">
            <Link
              to="/about"
              className="flex items-center px-4 rounded cursor-pointer no-underline hover:no-underline transition-colors duration-200 mx-1 hover:bg-indigo-500 hover:text-white font-bold"
            >
              A&nbsp;propos
            </Link>
          </li>
        </ul>

        <button className="p-4 lg:hidden" onClick={handleMenuClick}>
          <div className="block w-5 absolute transform -translate-x-1/2 -translate-y-1/2">
            <span
              aria-hidden="true"
              className={
                (menuOpen ? "rotate-45" : "-translate-y-15") +
                " block absolute h-125 w-5 bg-current transform transition duration-500 ease-in-out"
              }
            ></span>
            <span
              aria-hidden="true"
              className={
                (menuOpen ? "opacity-0" : "") +
                " block absolute h-125 w-5 bg-current transform transition duration-500 ease-in-out"
              }
            ></span>
            <span
              aria-hidden="true"
              className={
                (menuOpen ? "-rotate-45" : "translate-y-15") +
                " block absolute h-125 w-5 bg-current transform transition duration-500 ease-in-out"
              }
            ></span>
          </div>
        </button>
        <div className="flex items-center md:space-x-4">
          <button
            className="group transition duration-200 ease-in-out transform scale-90 cursor-pointer text-indigo-500
              hover:scale-100 hover:bg-indigo-500 hover:text-white  p-3 text-center inline-flex items-center justify-center 
              w-12 h-12 shadow-lg rounded-full bg-white border-indigo-500 border-2 hover:border-transparent"
            title="Connexion"
          >
            <a href={getAbsoluteUrl("/admin")} target="_blank" className="bold">
              <UserCircleIcon className="duration-200 transform group-hover:scale-150 scale-100 w-12" />
            </a>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="flex justify-end w-full lg:hidden">
          <ul>
            <li className="flex justify-end">
              <Link
                to="/content"
                className="flex items-center px-4 rounded cursor-pointer no-underline hover:no-underline transition-colors duration-200 mx-1 py-3 hover:bg-indigo-500 hover:text-white font-bold"
              >
                Découvrir
              </Link>
            </li>
            <li className="flex justify-end">
              <Link
                to="/news"
                className="flex items-center px-4 rounded cursor-pointer no-underline hover:no-underline transition-colors duration-200 mx-1 py-3 hover:bg-indigo-500 hover:text-white font-bold"
              >
                Actualités
              </Link>
            </li>
            <li className="flex justify-end">
              <Link
                to="/about"
                className="flex items-right px-4 rounded cursor-pointer no-underline hover:no-underline transition-colors duration-200 mx-1 py-3 hover:bg-indigo-500 hover:text-white font-bold"
              >
                A propos
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default H_CG
