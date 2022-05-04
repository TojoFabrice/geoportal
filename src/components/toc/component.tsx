import React, { createRef } from "react"
import throttle from "lodash/throttle"
import Scrollspy from "react-scrollspy"

// Import styled components (see the Styles section below).
import {
  TocDiv,
  TocLink,
  TocSubLink,
  TocIcon,
  TocTitle,
  TocToggleOpener,
  TocToggleCloser,
  TocListItem,
} from "./styles"
import { HeadingTree, TraverseResult, IHeadingData } from "./heading-tree"
import HeadingNode from "./heading-node"

interface IProps {
  containerSelector: string // Selector for a content container
  levels?: number[] // Needed heading levels, by default [2, 3, 4]
  prebuiltHeadings?: IHeadingData[] // Already extracted page headings to speed up

  title?: string // Title, default is "Contents"
  throttleTimeMs?: number // Scroll handler throttle time, default is 300

  // Note: offsetToBecomeActive must not be zero because at least in my chrome browser
  // element.scrollTo() sets window.scrollY = element.offsetTop - 1
  // and some routers use this function to scroll to window.location.hash.
  // The default value is 30 (px).
  offsetToBecomeActive?: number
}

interface IActiveHeadings {
  [key: number]: boolean
}

interface IState {
  open: boolean
  headingTree?: HeadingTree
  activeParents: IActiveHeadings
  activeNode?: HeadingNode
  container?: HTMLElement
}

export default class Toc extends React.Component<IProps, IState> {
  private wrapperRef = createRef<HTMLDivElement>()
  private clickEventListenerWasAdded = false
  private handleScrollThrottled: () => void
  private domObserver: MutationObserver

  constructor(props: IProps) {
    super(props)
    this.state = {
      open: false,
      headingTree: null,
      activeParents: {},
      activeNode: null,
      container: null,
    }
    this.handleClickOutside = this.handleClickOutside.bind(this)
    this.handleResize = this.handleResize.bind(this)
  }

  componentWillUnmount() {
    this.handleClose(false)
    window.removeEventListener(`scroll`, this.handleScrollThrottled)
    window.removeEventListener(`resize`, this.handleResize)
  }

  componentDidMount() {
    const container = this.parseHeadings()
    this.setupEventListeners(container)
  }

  private setupEventListeners(container: HTMLElement) {
    const startedAt = performance.now()

    let handleScroll: any
    if (typeof window === "undefined" || !window.MutationObserver) {
      console.info(
        `No window or mutationobserver, falling back to recalculating offsets on scroll`
      )
      handleScroll = () => {
        this.recalcOffsets()
        this.handleScrollImpl()
      }
      this.domObserver = null
    } else {
      handleScroll = this.handleScrollImpl.bind(this)
      this.domObserver = new MutationObserver((mutations) => {
        console.info(
          `Toc: content container "${this.props.containerSelector}" mutation detected, recalculating offsets`,
          mutations
        )
        this.recalcOffsets()
      })
      this.domObserver.observe(container, {
        attributes: true,
        childList: true,
        subtree: true,
        characterData: true,
      })
    }
    this.handleScrollThrottled = throttle(
      handleScroll,
      this.props.throttleTimeMs || 300
    )

    window.addEventListener(`scroll`, this.handleScrollThrottled)
    window.addEventListener(`resize`, this.handleResize)

    console.info(
      `Set up toc event listeners in ${performance.now() - startedAt}ms`
    )
  }

  private buildActiveParents(activeNode: HeadingNode): IActiveHeadings {
    let curNode = activeNode
    const activeParents = {}
    if (this.state.headingTree) {
      activeParents[this.state.headingTree.getRoot().key] = true
    }
    while (curNode !== null) {
      activeParents[curNode.key] = true
      curNode = curNode.parent
    }
    return activeParents
  }

  private handleResize() {
    console.info(`Handling resize event`)
    this.recalcOffsets()
  }

  private recalcOffsets() {
    if (this.state.headingTree) {
      this.state.headingTree.markOffsetCacheStale()
    }
  }

  private handleScrollImpl() {
    const startedAt = performance.now()
    const activeNode = this.findActiveNode()
    const elapsedMs = performance.now() - startedAt
    if (elapsedMs >= 5) {
      console.info(
        `Scroll handler: looking for active heading took ${elapsedMs}ms`
      )
    }
    if (activeNode !== this.state.activeNode) {
      const activeParents = this.buildActiveParents(activeNode)
      this.setState({ activeNode, activeParents })
    }
  }

  private handleClickOutside(event: MouseEvent) {
    if (
      this.wrapperRef &&
      this.wrapperRef.current &&
      !this.wrapperRef.current.contains(event.target as Node)
    ) {
      this.setState({ open: false })
    }
  }

  private handleOpen() {
    if (!this.clickEventListenerWasAdded) {
      document.addEventListener("mousedown", this.handleClickOutside)
      this.clickEventListenerWasAdded = true
    }
    this.setState({ open: true })
  }

  private handleClose(canSetState: boolean) {
    if (this.clickEventListenerWasAdded) {
      document.removeEventListener("mousedown", this.handleClickOutside)
      this.clickEventListenerWasAdded = false
    }
    if (canSetState) {
      this.setState({ open: false })
    }
  }

  private handleHeadingClick(ev: any, h: HeadingNode) {
    ev.preventDefault()
    let elemTopOffset = h.cachedOffsetTop
    window.history.replaceState({}, "", `#${h.id}`)
    window.scrollTo(0, elemTopOffset)
    this.handleClose(true)
    this.setState({ activeNode: h, activeParents: this.buildActiveParents(h) })
  }

  private parseHeadings() {
    const startedAt = performance.now()
    /* const container = document.querySelector(this.props.containerSelector) as HTMLElement */
    const container = document.getElementById(
      this.props.containerSelector
    ) as HTMLElement
    if (!container) {
      throw Error(
        `failed to find container by selector "${this.props.containerSelector}"`
      )
    }

    const htmlNodes: HTMLElement[] = Array.from(
      document.querySelectorAll("h2, h3")
    )
    htmlNodes.map((node, i) => node.setAttribute("id", "heading_" + i))
    let headings = htmlNodes.map((node, i) => ({
      value: node.innerText,
      depth: Number(node.nodeName[1]),
      id: "heading_" + i,
      htmlNode: node,
    }))

    const tree = new HeadingTree(headings)
    console.info(
      `Built headings tree in ${performance.now() - startedAt}ms from ${
        this.props.prebuiltHeadings ? "prebuilt headings" : "DOM"
      }`
    )
    this.setState({ headingTree: tree, container })
    return container
  }

  private findActiveNode(): HeadingNode | null {
    if (!this.state.headingTree) {
      return null
    }

    const offsetToBecomeActive = this.props.offsetToBecomeActive || 30
    const curScrollPos = window.scrollY + offsetToBecomeActive

    let activeNode = null
    let lastNode = null
    this.state.headingTree.traverseInPreorder((h: HeadingNode) => {
      if (curScrollPos > h.cachedOffsetTop) {
        lastNode = h
        return TraverseResult.Continue
      }

      activeNode = lastNode
      return TraverseResult.Stop
    })

    if (activeNode === null && lastNode !== null && this.state.container) {
      // Mark last heading active only if we didn't scroll after the end of the container.
      if (
        window.scrollY <=
        this.state.container.offsetTop + this.state.container.offsetHeight
      ) {
        return lastNode
      }
    }

    return activeNode
  }

  private renderHeadings() {
    if (!this.state.headingTree) {
      return
    }

    const items = Array()
    const itemsId = Array()
    this.state.headingTree.traverseInPreorder((h) => {
      const isActive =
        this.state.activeNode && this.state.activeNode.key === h.key
      itemsId.push(h.id)
      items.push(
        <TocListItem depth={h.depth} active={isActive} key={h.key}>
          {h.depth === 0 ? (
            <TocLink
              href={`#${h.id}`}
              link={`#${h.id}`}
              active={isActive}
              depth={h.depth}
              ref={React.createRef()}
            >
              {h.title}
            </TocLink>
          ) : (
            <TocSubLink
              href={`#${h.id}`}
              link={`#${h.id}`}
              active={isActive}
              depth={h.depth}
              ref={React.createRef()}
            >
              {h.title}
            </TocSubLink>
          )}
          {/* <TocListBullet depth={h.depth} active={isActive} /> */}
        </TocListItem>
      )

      return this.state.activeParents[h.key]
        ? TraverseResult.Continue
        : TraverseResult.NoChildren
    })
    return { items, itemsId }
  }

  render() {
    let headings = this.renderHeadings()
    let itemsId = headings?.itemsId
    let items = headings?.items
    return (
      <>
        <TocToggleOpener
          open={this.state.open}
          onClick={this.handleOpen.bind(this)}
        />
        <TocDiv ref={this.wrapperRef} open={this.state.open}>
          <TocTitle>
            <TocIcon />
            {this.props.title || `Menu interne`}
            <TocToggleCloser onClick={() => this.handleClose(true)} />
          </TocTitle>
          <nav className="">
            <ul className="list-none">
              <Scrollspy items={itemsId} currentClassName="underline">
                {items}
              </Scrollspy>
            </ul>
          </nav>
        </TocDiv>
      </>
    )
  }
}
