import React from "react"
import { Link } from "gatsby"

interface Props {
  id: string
  label: string
  url: string
}

const LinkUtils = (props: Props) => {
  return (
    <div className="container max-w-md mx-4">
      <Link
        to={props.url}
        className="text-blue-500 underline border-2 border-gray-200 rounded-md"
      >
        {props.label}
      </Link>
    </div>
  )
}

export default LinkUtils
