import type { CellPlugin } from "@react-page/editor"
import React from "react"

type Faqs = {
  question: string
  answer: string
}

type State = {
  title: string
  faqs: Faqs[]
}

const customContentPluginFaq: CellPlugin<State> = {
  Renderer: ({ data }) => (
    <div>
      <h1>{data.title}</h1>
      <dl className="divide-y divide-gray-200">
        {data.faqs &&
          data.faqs.map((faq, index) => {
            return (
              <div className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8">
                <dt className="text-base font-medium text-gray-900 md:col-span-5">
                  {faq.question}
                </dt>
                <dd className="mt-2 md:mt-0 md:col-span-7">
                  <p className="text-base text-gray-500">{faq.answer}</p>
                </dd>
              </div>
            )
          })}
      </dl>
    </div>
  ),
  id: "custom-content-plugin-faq",
  title: "FAQ",

  description: "Some custom content plugin with FAQ",
  version: 1,

  controls: {
    type: "autoform",
    columnCount: 1,
    schema: {
      properties: {
        title: {
          type: "string",
        },
        faqs: {
          type: "array",
          items: {
            type: "object",
            required: [],
            properties: {
              question: {
                type: "string",
              },
              answer: {
                type: "string",
              },
            },
          },
        },
      },
      required: [],
    },
  },
}
export default customContentPluginFaq
