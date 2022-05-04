import React from "react"
import { Link } from "gatsby"
// import { getImage, IGatsbyImageData } from "gatsby-plugin-image"

interface Props {
  id: string
  title: String
  keywords: String
  image: any
}

const Theme = (props: Props) => {
  // @ts-ignore
  // const image: IGatsbyImageData = getImage(props.image)

  return (
    <Link to={props.id}>
      <div className="container max-w-sm mx-auto mt-5 hover:bg-gray-100">
        <div className="overflow-hidden bg-gray-100 rounded-xl shadow-lg hover:shadow-xl">
          {/*
          <div className="">
            <div className="mb-2 text-lg font-bold text-center flex pt-2">
              <div className="flex-1">
                <img src={mpIco} alt="Ico"></img>
              </div>
            </div>
          </div>
              */}

          <div className="text-lg font-bold text-center p-2">
            {props.keywords}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Theme
