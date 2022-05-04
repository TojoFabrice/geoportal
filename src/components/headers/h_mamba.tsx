import { Link } from "gatsby"
import React from "react"
import Search from "../search"

interface Props {
  logo?: String
}

const H_mamba = (props: Props) => {
  return (
    <header className="p-4 bg-coolGray-100 text-coolGray-800">
      <div className="container flex justify-between h-16 mx-auto">
        <div className="flex items-center md:space-x-4">
          <button className="px-6 py-2 font-semibold rounded lg:block bg-lightBlue-600 text-coolGray-50">
            <Link
              to="/admin"
              target="_blank"
              className=" bold border-b-2 border-blue-300 hover:text-blue-700"
            >
              Connexion
            </Link>
          </button>
          <div className="relative">
            <Search />
          </div>
        </div>
        <a
          href="/"
          aria-label="Back to homepage"
          className="flex content-center p-2"
        >
          <img src={props.logo} alt="logo" />
        </a>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <Link
              to="/about"
              className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent hover:text-lightBlue-600 border-lightBlue-600"
            >
              A propos
            </Link>
          </li>
          <li className="flex">
            <Link
              to="/news"
              className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent hover:text-lightBlue-600 border-lightBlue-600"
            >
              Actualités
            </Link>
          </li>
          {/*
           * Sous-Menu au survolage de "Données"
           * Chaque nouvelle section du menu est défini par une balise <ul>
           */}
          <li className="flex hoverable hover:bg-gray-400 hover:text-white">
            <h2 className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent border-lightBlue-600">
              Données
            </h2>
            <div className="z-50 p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-gray-600">
              <div className="container mx-auto w-full flex flex-wrap justify-between mx-2">
                <div className="w-full text-white mb-8">
                  <h2 className="font-bold text-2xl">
                    Accéder à l'ensemble des données !
                  </h2>
                  <p>
                    Qu'il s'agisse de métadonnées ou cartes, trouvez la donnée
                    dont vous avez besoin au format qui vous convient !
                  </p>
                </div>
                <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                  <div className="flex items-center">
                    <svg
                      className="h-8 mb-3 mr-3 fill-current text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M3 6c0-1.1.9-2 2-2h8l4-4h2v16h-2l-4-4H5a2 2 0 0 1-2-2H1V6h2zm8 9v5H8l-1.67-5H5v-2h8v2h-2z" />
                    </svg>
                    <h3 className="font-bold text-xl text-white text-bold mb-2">
                      Open Data
                    </h3>
                  </div>
                  <p className="text-gray-100 text-sm">
                    Retrouvez l'ensemble de nos données au format OpenData.
                  </p>
                  <div className="flex items-center py-3">
                    <svg
                      className="h-6 pr-3 fill-current text-blue-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                    </svg>
                    <Link
                      to="/search_meta"
                      className="text-white bold border-b-2 border-blue-300 hover:text-blue-300"
                    >
                      Accéder aux données
                    </Link>
                  </div>
                </ul>
                <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                  <div className="flex items-center">
                    <svg
                      className="h-8 mb-3 mr-3 fill-current text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4.13 12H4a2 2 0 1 0 1.8 1.11L7.86 10a2.03 2.03 0 0 0 .65-.07l1.55 1.55a2 2 0 1 0 3.72-.37L15.87 8H16a2 2 0 1 0-1.8-1.11L12.14 10a2.03 2.03 0 0 0-.65.07L9.93 8.52a2 2 0 1 0-3.72.37L4.13 12zM0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z" />
                    </svg>
                    <h3 className="font-bold text-xl text-white text-bold mb-2">
                      Cartothèque
                    </h3>
                  </div>
                  <p className="text-gray-100 text-sm">
                    Découvez l'ensemble des cartes disponibles à la
                    visulisation.
                  </p>
                  <div className="flex items-center py-3">
                    <svg
                      className="h-6 pr-3 fill-current text-blue-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                    </svg>
                    <a
                      href="/geoportail/#"
                      target="_blank"
                      className="text-white bold border-b-2 border-blue-300 hover:text-blue-300"
                      rel="noreferrer"
                    >
                      Accéder aux données
                    </a>
                  </div>
                </ul>
                <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                  <div className="flex items-center">
                    <svg
                      className="h-8 mb-3 mr-3 fill-current text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 4v14h14v-6l2-2v10H0V2h10L8 4H2zm10.3-.3l4 4L8 16H4v-4l8.3-8.3zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z" />
                    </svg>
                    <h3 className="font-bold text-xl text-white text-bold mb-2">
                      Catalogue
                    </h3>
                  </div>
                  <p className="text-gray-100 text-sm">
                    Accédez à l'ensemble des données disponibles grâce à
                    GeoNetwork
                  </p>
                  <div className="flex items-center py-3">
                    <svg
                      className="h-6 pr-3 fill-current text-blue-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                    </svg>
                    <Link
                      to="/search_meta"
                      className="text-white bold border-b-2 border-blue-300 hover:text-blue-300"
                    >
                      Accéder aux données
                    </Link>
                  </div>
                </ul>
                <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
                  <div className="flex items-center">
                    <svg
                      className="h-8 mb-3 mr-3 fill-current text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                    </svg>
                    <h3 className="font-bold text-xl text-white text-bold mb-2">
                      Visualiser
                    </h3>
                  </div>
                  <p className="text-gray-100 text-sm">
                    Envie de retravailler ou de combiner des cartes ? Accédez à
                    notre environnement MapStore
                  </p>
                  <div className="flex items-center py-3">
                    <svg
                      className="h-6 pr-3 fill-current text-blue-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                    </svg>
                    <a
                      href="/geoportail/#/viewer/openlayers/27"
                      target="_blank"
                      className="text-white bold border-b-2 border-blue-300 hover:text-blue-300"
                      rel="noreferrer"
                    >
                      Accéder a MapStore
                    </a>
                  </div>
                </ul>
              </div>
            </div>
          </li>
        </ul>

        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-coolGray-800"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  )
}

export default H_mamba
