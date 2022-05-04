// import { Link } from "gatsby"
import React from "react"
import Theme from "../theme"

interface Props {
  title: string
  link: string
  themes: Array<object>
}

const ThemeList = (props: Props) => {
  const themeItems = props.themes.map((theme) => {
    // @ts-ignore
    return <Theme key={theme.id} {...theme} />
  })

  return (
    <section>
      <div className="title">
        <p className="text-4xl font-bold text-gray-800 mb-4 dark:text-white">
          {props.title}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
        {themeItems}
      </div>
    </section>
  )
}

export default ThemeList
