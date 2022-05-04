import React from "react"
import { Link } from "gatsby"

interface Props {
  id: string
  name: string
  tus_id: string
  base_url: string
}

const LinkDocument = (props: Props) => {
  return (
    <div className="container max-w-md mx-4">
      <Link
        to={props.base_url + "/files/" + props.tus_id}
        className="text-blue-500 underline border-2 border-gray-200 rounded-md"
      >
        {props.name}
      </Link>
    </div>
  )
}

export default LinkDocument
