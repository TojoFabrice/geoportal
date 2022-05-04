import React from "react"
import { truncate } from "lodash"

interface Props {
  id: string
  name: string
  description: string
  onlineResource: string
}

function getTypeOfData(data: string) {
  var dataLength: number
  var typeOfData: string

  dataLength = data.length
  typeOfData = data.substring(dataLength - 3, dataLength)
  return typeOfData
}

const LinkDft = (props: Props) => {
  const description = truncate(props.description, {
    length: 250,
  })
  const onlineResource = truncate(props.onlineResource, {
    length: 250,
  })
  const typeOfData = getTypeOfData(onlineResource)
  console.log(props)
  return (
    <a
      href={onlineResource}
      key={props.name}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col rounded-lg shadow-lg overflow-hidden transition duration-200 ease-in-out hover:-translate-y-2 z-1 px-2 bg-gray-50"
    >
      <div className="flex-1  p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="block mt-2">
            <p className="text-xl font-semibold text-gray-900">{props.name}</p>
            <div
              className="mt-3text-base text-gray-500"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
          </p>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <p>
              <span className="sr-only">fichier : {typeOfData}</span>
            </p>
          </div>
        </div>
      </div>
    </a>
  )
}

export default LinkDft
