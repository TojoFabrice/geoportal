import React from "react"
import LinkDft from "../links_tplt/linkDft"

interface Props {
  title: string
  subtitle?: string
  links?: Array<object>
}

const LinkList = (props: Props) => {
  console.log(props)
  const linkItems = props.links.map(function (card) {
    return (
      <LinkDft
        id={card.id}
        name={card.name}
        description={card.description}
        onlineResource={card.onlineResource}
      />
    )
  })

  return (
    <section>
      <div className="title">
        <p className="text-center text-2xl leading-8 font-extrabold tracking-tight text-gray-900 border-b border-gray-300 dark:text-gray-100">
          {props.title}
        </p>
        <p className="text-xl font-light text-gray-400">{props.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
        {linkItems}
      </div>
    </section>
  )
}

export default LinkList
