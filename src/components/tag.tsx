import React from "react"

interface Props {
  title: string
}

const Tag = (props: Props) => {
  return (
    <span
      data-typesense-field="tags"
      className="inline-block px-3 py-1 m-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded-xl uppercase"
    >
      {props.title}
    </span>
  )
}

export default Tag
