// import { Link } from "gatsby"
import React from "react"

interface Props {
  title: String
  subtitle: String
}

const HeroDft = (props: Props) => {
  return (
    <section>
      <div className="w-full bg-cover bg-center bg-hero h-96">
        <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
          <div className="text-center">
            <p className="text-white text-2xl font-semibold uppercase md:text-3xl">
              {props.title}
            </p>
            <p className="text-gray-200 text-sm font-semibold md:text-lg">
              {props.subtitle}
            </p>
            {/*<Search />*/}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroDft
