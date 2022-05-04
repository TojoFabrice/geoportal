// src/components/toc/styles.ts
/* import styled, { IProps } from "styled-components"
 */
import { css } from "@emotion/react"
import {
  XIcon as CrossIcon,
  ViewListIcon as BookContentIcon,
} from "@heroicons/react/solid"
import tw, { styled } from "twin.macro"

import mediaQuery from "../utils/mediaQuery"
import { ITocListProps, ITocToggleProps } from "./types"

export const TocDiv = styled.div`
  ${tw`h-full z-10 right-0`}
`

export const TocTitle = styled.p`
  ${tw`m-0 pb-4 text-lg font-extrabold tracking-tight sm:text-lg flex`}
`

export const TocLink = styled.a`
  ${tw`font-medium hover:font-bold block underline`}
`

export const TocSubLink = styled.a`
  ${tw`pl-4 font-medium hover:font-bold block no-underline`}
`

export const TocListItem = styled.li`
  ${tw`m-0 list-none`}
`

export const TocIcon = styled(BookContentIcon)`
  ${tw`w-6 mr-4 flex`}
`

const openerToggleCss = (props: any) => css`
  ${tw`fixed ml-10 translate-x-1 p-6 rounded-md bg-gray-200 left-0 top-0`}
`

const closerToggleCss = () => css`
  margin-left: 1em;
  padding: 2px;
  border-radius: 0 50% 50% 0;
`

const toggleCss = () => css`
  width: 1.6em;
  height: auto;
  z-index: 2;
  transition: 0.3s;
  justify-self: end;
  &:hover {
    transform: scale(1.1);
  }
  ${mediaQuery.minMedium} {
    display: none;
  }
`

export const TocToggleOpener = styled(BookContentIcon)`
  ${toggleCss}
  ${openerToggleCss}
`

export const TocToggleCloser = styled(CrossIcon)`
  ${toggleCss}
  ${closerToggleCss}
`
