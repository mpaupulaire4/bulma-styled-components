/* stylelint-disable no-descending-specificity, no-duplicate-selectors */
import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import Vars from '../utilities/vars'
import { fromTheme } from '../utilities/functions'
import {
  unselectable,
  mobile,
  tablet,
} from '../utilities/mixins'
import { control } from '../utilities/controls'

Vars.addDerivedDefault(vars => ({
  'pagination-color': vars['grey-darker'],
  'pagination-border-color': vars['grey-lighter'],
  'pagination-margin': '-0.25rem',

  'pagination-hover-color': vars['link-hover'],
  'pagination-hover-border-color': vars['link-hover-border'],

  'pagination-focus-color': vars['link-focus'],
  'pagination-focus-border-color': vars['link-focus-border'],

  'pagination-active-color': vars['link-active'],
  'pagination-active-border-color': vars['link-active-border'],

  'pagination-disabled-color': vars['grey'],
  'pagination-disabled-background-color': vars['grey-lighter'],
  'pagination-disabled-border-color': vars['grey-lighter'],

  'pagination-current-color': vars['link-invert'],
  'pagination-current-background-color': vars['link'],
  'pagination-current-border-color': vars['link'],

  'pagination-ellipsis-color': vars['grey-light'],

  'pagination-shadow-inset': `inset 0 1px 2px ${rgba(vars['black'], 0.2)}`
}))

const defaultProps = { theme: Vars.getVariables() }

const PaginationPreviousNextLinkEllipsisShared = css`
  ${control}
  ${unselectable}
  font-size: 1em;
  padding-left: 0.5em;
  padding-right: 0.5em;
  justify-content: center;
  margin: 0.25rem;
  text-align: center;
`

const PaginationPreviousNextLinkShared = css`
  border-color: ${fromTheme('pagination-border-color')};
  color: ${fromTheme('pagination-color')};
  min-width: 2.25em;
  &:hover {
    border-color: ${fromTheme('pagination-hover-border-color')};
    color: ${fromTheme('pagination-hover-color')};
  }
  &:focus {
    border-color: ${fromTheme('pagination-focus-border-color')};
  }
  &:active {
    box-shadow: ${fromTheme('pagination-shadow-inset')};
  }
  &[disabled] {
    background-color: ${fromTheme('pagination-disabled-background-color')};
    border-color: ${fromTheme('pagination-disabled-border-color')};
    box-shadow: none;
    color: ${fromTheme('pagination-disabled-color')};
    opacity: 0.5;
  }
`
const PreviousNextShared = css`
  ${PaginationPreviousNextLinkEllipsisShared}
  ${PaginationPreviousNextLinkShared}
  padding-left: 0.75em;
  padding-right: 0.75em;
  white-space: nowrap;
  ${mobile`
    flex-grow: 1;
    flex-shrink: 1;
  `}
`
export const PaginationPrevious = styled.a`
  ${PreviousNextShared}
  ${tablet`
    order: 2;
  `}
`
PaginationPrevious.defaultProps = defaultProps


export const PaginationNext = styled.a`
  ${PreviousNextShared}
  ${tablet`
    order: 3;
  `}
`
PaginationNext.defaultProps = defaultProps

export const PaginationLink = styled.a`
  ${PaginationPreviousNextLinkEllipsisShared}
  ${PaginationPreviousNextLinkShared}
  &.is-current {
    background-color: ${fromTheme('pagination-current-background-color')};
    border-color: ${fromTheme('pagination-current-border-color')};
    color: ${fromTheme('pagination-current-color')};
  }
`
PaginationLink.defaultProps = defaultProps

export const PaginationEllipsis = styled.span`
  ${PaginationPreviousNextLinkEllipsisShared}
  color: ${fromTheme('pagination-ellipsis-color')};
  pointer-events: none;
`
PaginationEllipsis.defaultProps = defaultProps

const PaginationListShared = css`
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
`

export const PaginationList = styled.ul`
  ${PaginationListShared}
  flex-wrap: wrap;
  ${mobile`
    li {
      flex-grow: 1;
      flex-shrink: 1;
    }
  `}
  ${tablet`
    flex-grow: 1;
    flex-shrink: 1;
    justify-content: flex-start;
    order: 1;
  `}
`
PaginationList.defaultProps = defaultProps

export const Pagination = styled.nav`
  ${PaginationListShared}
  font-size: ${fromTheme('size-normal')};
  margin: ${fromTheme('pagination-margin')};
  /* Sizes */
  &.is-small {
    font-size: ${fromTheme('size-small')};
  }
  &.is-medium {
    font-size: ${fromTheme('size-medium')};
  }
  &.is-large {
    font-size: ${fromTheme('size-large')};
  }
  &.is-rounded {
    ${/* sc-custom '.previous' */PaginationPrevious},
    ${/* sc-custom '.next' */PaginationNext} {
      padding-left: 1em;
      padding-right: 1em;
      border-radius: ${fromTheme('radius-rounded')};
    }
    ${/* sc-custom '.link' */PaginationLink} {
      border-radius: ${fromTheme('radius-rounded')};
    }
  }
  ${mobile`
    flex-wrap: wrap;
  `}
  ${tablet`
    justify-content: space-between;
    &.is-centered {
      ${/* sc-custom '.previous' */PaginationPrevious} {
        order: 1;
      }
      ${/* sc-custom '.list' */PaginationList} {
        justify-content: center;
        order: 2;
      }
      ${/* sc-custom '.next' */PaginationNext} {
        order: 3;
      }
    }
    &.is-right {
      ${/* sc-custom '.previous' */PaginationPrevious} {
        order: 1;
      }
      ${/* sc-custom '.next' */PaginationNext} {
        order: 2;
      }
      ${/* sc-custom '.list' */PaginationList} {
        justify-content: flex-end;
        order: 3;
      }
    }
  `}
`
Pagination.defaultProps = defaultProps

Pagination.Previous = PaginationPrevious
Pagination.Next = PaginationNext
Pagination.Link = PaginationLink
Pagination.Ellipsis = PaginationEllipsis
Pagination.List = PaginationList
