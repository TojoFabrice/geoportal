/**
 * Format a Section in the page, add margin left & right
 */
import React from "react"

type ContentProps = { children: any }

const Content = ({ children }: ContentProps) => {
  return (
    <div className="max-w-7xl mx-auto mt-28 px-5 text-gray-800 pb-10">
      {children}
    </div>
  )
}

export default Content
