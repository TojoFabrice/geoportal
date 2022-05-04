import React from "react"
import Search from "../search"

interface Props {
  title: String
  subtitle?: String
}

const HeroMamba = (props: Props) => {
  return (
    <section className="bg-cover bg-center bg-hero">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">
          {props.title} by
          <span className="text-blue-800"> GEO</span>
          <span className="text-lightBlue-500">FIT</span>
        </h1>
        <p className="px-8 mt-8 mb-12 text-lg">{props.subtitle}</p>
        <div className="justify-center w-2/3 ">
          <Search />
        </div>
      </div>
    </section>
  )
}

export default HeroMamba
