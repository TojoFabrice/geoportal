// src/components/toc/heading-node.ts
export default class HeadingNode {
  title: string
  children: HeadingNode[]
  parent?: HeadingNode
  private offsetCacheVersion: number | null
  cachedOffsetTop: number
  private htmlNode: HTMLElement | null
  depth: number // relative depth, starts from 0
  id: string
  key: number // faster comparison than by id

  constructor(
    htmlNode: HTMLElement | null,
    value: string,
    depth: number,
    id: string,
    cachedOffsetTop: number,
    key: number,
    offsetCacheVersion: number
  ) {
    this.htmlNode = htmlNode
    this.title = value
    this.parent = null
    this.children = []
    this.depth = depth
    this.id = id
    this.cachedOffsetTop = cachedOffsetTop
    this.key = key
    this.offsetCacheVersion = offsetCacheVersion - 1
  }

  lazyLoad(curCacheVersion: number) {
    if (curCacheVersion === this.offsetCacheVersion) {
      return
    }

    if (!this.htmlNode) {
      this.htmlNode = document.getElementById(this.id)
      if (!this.htmlNode) {
        throw Error(`no heading with id "${this.id}"`)
      }
    }

    this.cachedOffsetTop = this.htmlNode.offsetTop
    this.offsetCacheVersion = curCacheVersion
  }
}
