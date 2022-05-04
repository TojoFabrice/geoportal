import React from "react"
import LinkDocument from "../links_tplt/linkDocument"

interface Props {
  title: string
  documents: Array<object>
  base_url: string
}

const DocumentList = (props: Props) => {
  const documentItems = props.documents.map(function (item) {
    return (
      <LinkDocument
        id={item.id}
        name={item.name}
        tus_id={item.tus_id}
        base_url={props.base_url}
      />
    )
  })

  return (
    <section>
      <p className="text-center text-2xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 border-b border-gray-300">
        {props.title}
      </p>
      <div className="pt-2">{documentItems}</div>
    </section>
  )
}

export default DocumentList
