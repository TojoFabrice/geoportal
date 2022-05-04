import React from "react"
import LinkUtils from "../links_tplt/linkUtils"

interface Props {
  title: string
  links: Array<object>
}

const UtilsList = (props: Props) => {
  const linkItems = props.links.map(function (card) {
    return <LinkUtils id={card.id} label={card.label} url={card.url} />
  })

  return (
    <section>
      <p className="text-center text-2xl leading-8 font-extrabold tracking-tight text-gray-900 border-b border-gray-300 dark:text-white">
        {props.title}
      </p>
      <div className="pt-2">{linkItems}</div>
    </section>
  )
}

export default UtilsList
