import React from "react"
import { Link } from "gatsby"
import { truncate } from "lodash"
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"

import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
dayjs.extend(relativeTime)

interface Props {
  id: string
  title: string
  content: string
  image: any
  image_url: any
  author: any
  creation: any
  template: any
}

const CardDft = (props: Props) => {
  const content = truncate(props.content, {
    length: 250,
  })
  const creation = props.creation ? dayjs(props.creation).fromNow() : ""

  /* 
      <article className="flex flex-col bg-coolGray-50">
        <a href={props.id} aria-label="" className="">
          <a href={props.id} aria-label="" className="">
            {props.image_url ? (
              <img
                src={props.image_url}
                alt=""
                className="object-cover w-full h-52"
              />
            ) : (
              <GatsbyImage
                image={image}
                alt=""
                className="object-cover w-full h-52"
              />
            )}
          </a>
        </a>
        <div className="flex flex-col flex-1 p-6">
          <Link
            to={props.id}
            className="text-xs tracking-wider uppercase hover:underline text-lightBlue-600"
          >
            {props.title}
          </Link>
          
          <div
            className="text-base text-gray-700"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
          <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-600">
            <span>{props.author}</span>
            <span>{creation}</span>
          </div>
        </div>
      </article>
      */

  // @ts-ignore
  const image: IGatsbyImageData = getImage(props.image)

  if (props.template === "mamba") {
    return (
      <Link
        to={props.id}
        key={props.title}
        className="flex flex-col rounded-lg shadow-lg overflow-hidden transition duration-200 ease-in-out hover:-translate-y-2 z-1 px-2"
      >
        <div className="flex-shrink-0">
          {props.image_url ? (
            <img
              src={props.image_url}
              alt=""
              className="h-48 w-full object-cover rounded-t-xl"
            />
          ) : (
            <GatsbyImage
              image={image}
              alt=""
              className="h-48 w-full object-cover rounded-t-xl"
            />
          )}
        </div>
        <div className="flex-1 bg-white dark:bg-gray-800 p-6 flex flex-col justify-between rounded-b-xl">
          <div className="flex-1">
            <p className="block mt-2">
              <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {props.title}
              </p>

              <div
                className="mt-3text-base text-gray-500 dark:text-gray-400"
                dangerouslySetInnerHTML={{ __html: content }}
              ></div>
            </p>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <p>
                <span className="sr-only">{props.author}</span>
              </p>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {props.author}
              </p>
              <div className="flex space-x-1 text-sm text-gray-500 dark:text-gray-300">
                <time dateTime={creation}>{creation}</time>
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  } else {
    return (
      <Link to={props.id}>
        <div className="container max-w-md mx-auto mt-10 hover:bg-gray-100">
          <div className="overflow-hidden rounded shadow-lg hover:shadow-xl">
            <GatsbyImage image={image} alt="" className="w-full" />
            <img src={props.image_url} alt="" className="w-full" />
            <div className="px-6 py-4">
              <div className="mb-2 text-lg font-bold">{props.title}</div>
              <div
                className="text-base text-gray-700"
                dangerouslySetInnerHTML={{ __html: content }}
              ></div>
            </div>

            {/*
              <div className="px-6 py-4">
                <span className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                  #photography
                </span>
                <span className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                  #travel
                </span>
                <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                  #winter
                </span>
              </div>
              */}
          </div>
        </div>
      </Link>
    )
  }
}

export default CardDft
