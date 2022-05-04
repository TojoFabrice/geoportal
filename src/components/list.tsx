import React from "react"
import "../css/header.css"
import CardList from "./lists/lists_tplt/cardList"
import LinkList from "./lists/lists_tplt/linkList"
import ThemeList from "./lists/lists_tplt/themeList"
import UtilsList from "./lists/lists_tplt/utilsList"
import DocumentList from "./lists/lists_tplt/documentList"

interface Props {
  template: string
  title: string
  link?: string
  subtitle?: string
  content: any
  base_url?: string
}

const List = (props: Props) => {
  switch (props.template) {
    case "link":
      return (
        <LinkList
          title={props.title}
          subtitle={props.subtitle}
          links={props.content}
        />
      )
    case "card":
      return (
        <CardList
          title={props.title}
          subtitle={props.subtitle}
          cards={props.content}
          link={props.link}
        />
      )
    case "theme":
      return (
        <ThemeList
          title={props.title}
          link={props.link}
          themes={props.content}
        />
      )
      case "document":
        return (props.content &&
          <DocumentList
            title={props.title}
            link={props.link}
            documents={props.content}
            base_url={props.base_url}
          />
        )
    case "utils":
      return <UtilsList title={props.title} links={props.content} />
    default:
      return null
  }
}

export default List
