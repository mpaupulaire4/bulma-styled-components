/* stylelint-disable no-descending-specificity, no-duplicate-selectors */
import { css } from 'emotion'
import { rgba } from 'polished'
import { BaseWithConsumer } from '../base/Class'
import {
  unselectable,
  mobile,
  tablet,
} from '../utilities/mixins'
import { control } from '../utilities/controls'

BULMA_VARS({
  get 'pagination-color'() { return this['grey-darker'] },
  get 'pagination-border-color'() { return this['grey-lighter'] },
  'pagination-margin': '-0.25rem',

  get 'pagination-hover-color'() { return this['link-hover'] },
  get 'pagination-hover-border-color'() { return this['link-hover-border'] },

  get 'pagination-focus-color'() { return this['link-focus'] },
  get 'pagination-focus-border-color'() { return this['link-focus-border'] },

  get 'pagination-active-color'() { return this['link-active'] },
  get 'pagination-active-border-color'() { return this['link-active-border'] },

  get 'pagination-disabled-color'() { return this['grey'] },
  get 'pagination-disabled-background-color'() { return this['grey-lighter'] },
  get 'pagination-disabled-border-color'() { return this['grey-lighter'] },

  get 'pagination-current-color'() { return this['link-invert'] },
  get 'pagination-current-background-color'() { return this['link'] },
  get 'pagination-current-border-color'() { return this['link'] },

  get 'pagination-ellipsis-color'() { return this['grey-light'] },

  get 'pagination-shadow-inset'() { return `inset 0 1px 2px ${rgba(this['black'], 0.2)}` },
})

const PaginationPreviousNextLinkEllipsisShared = theme => css`
  ${control(theme)}
  ${unselectable}
  font-size: 1em;
  padding-left: 0.5em;
  padding-right: 0.5em;
  justify-content: center;
  margin: 0.25rem;
  text-align: center;
`

const PaginationPreviousNextLinkShared = theme => css`
  border-color: ${theme['pagination-border-color']};
  color: ${theme['pagination-color']};
  min-width: 2.25em;
  &:hover {
    border-color: ${theme['pagination-hover-border-color']};
    color: ${theme['pagination-hover-color']};
  }
  &:focus {
    border-color: ${theme['pagination-focus-border-color']};
  }
  &:active {
    box-shadow: ${theme['pagination-shadow-inset']};
  }
  &[disabled] {
    background-color: ${theme['pagination-disabled-background-color']};
    border-color: ${theme['pagination-disabled-border-color']};
    box-shadow: none;
    color: ${theme['pagination-disabled-color']};
    opacity: 0.5;
  }
`
const PreviousNextShared = theme => css`
  ${PaginationPreviousNextLinkEllipsisShared(theme)}
  ${PaginationPreviousNextLinkShared(theme)}
  padding-left: 0.75em;
  padding-right: 0.75em;
  white-space: nowrap;
  ${mobile(theme)`
    flex-grow: 1;
    flex-shrink: 1;
  `}
`
export class PaginationPrevious extends BaseWithConsumer {
  static defaultProps = {
    as: 'a',
  }

  static Style = theme => css`
    ${PreviousNextShared(theme)}
    ${tablet(theme)`
      order: 2;
    `}
  `
}


export class PaginationNext extends BaseWithConsumer {
  static defaultProps = {
    as: 'a',
  }

  static Style = theme => css`
    ${PreviousNextShared(theme)}
    ${tablet(theme)`
      order: 3;
    `}
  `
}

export class PaginationLink extends BaseWithConsumer {
  static defaultProps = {
    as: 'a',
  }

  static Style = theme => css`
    ${PaginationPreviousNextLinkEllipsisShared(theme)}
    ${PaginationPreviousNextLinkShared(theme)}
    &.is-current {
      background-color: ${theme['pagination-current-background-color']};
      border-color: ${theme['pagination-current-border-color']};
      color: ${theme['pagination-current-color']};
    }
  `
}

export class PaginationEllipsis extends BaseWithConsumer {
  static defaultProps = {
    as: 'span',
  }

  static Style = theme => css`
    ${PaginationPreviousNextLinkEllipsisShared(theme)}
    color: ${theme['pagination-ellipsis-color']};
    pointer-events: none;
  `
}

const PaginationListShared = `
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
`

export class PaginationList extends BaseWithConsumer {
  static defaultProps = {
    as: 'ul',
  }

  static Style = theme => css`
    ${PaginationListShared}
    flex-wrap: wrap;
    ${mobile(theme)`
      li {
        flex-grow: 1;
        flex-shrink: 1;
      }
    `}
    ${tablet(theme)`
      flex-grow: 1;
      flex-shrink: 1;
      justify-content: flex-start;
      order: 1;
    `}
  `
}

export default class Pagination extends BaseWithConsumer {
  static defaultProps = {
    as: 'nav',
  }

  static Style = theme => css`
    ${PaginationListShared}
    font-size: ${theme['size-normal']};
    margin: ${theme['pagination-margin']};
    /* Sizes */
    &.is-small {
      font-size: ${theme['size-small']};
    }
    &.is-medium {
      font-size: ${theme['size-medium']};
    }
    &.is-large {
      font-size: ${theme['size-large']};
    }
    &.is-rounded {
      .${/* sc-custom '.previous' */PaginationPrevious.name},
      .${/* sc-custom '.next' */PaginationNext.name} {
        padding-left: 1em;
        padding-right: 1em;
        border-radius: ${theme['radius-rounded']};
      }
      .${/* sc-custom '.link' */PaginationLink.name} {
        border-radius: ${theme['radius-rounded']};
      }
    }
    ${mobile(theme)`
      flex-wrap: wrap;
    `}
    ${tablet(theme)`
      justify-content: space-between;
      &.is-centered {
        .${/* sc-custom '.previous' */PaginationPrevious.name} {
          order: 1;
        }
        .${/* sc-custom '.list' */PaginationList.name} {
          justify-content: center;
          order: 2;
        }
        .${/* sc-custom '.next' */PaginationNext.name} {
          order: 3;
        }
      }
      &.is-right {
        .${/* sc-custom '.previous' */PaginationPrevious.name} {
          order: 1;
        }
        .${/* sc-custom '.next' */PaginationNext.name} {
          order: 2;
        }
        .${/* sc-custom '.list' */PaginationList.name} {
          justify-content: flex-end;
          order: 3;
        }
      }
    `}
  `
}

Pagination.Previous = PaginationPrevious
Pagination.Next = PaginationNext
Pagination.Link = PaginationLink
Pagination.Ellipsis = PaginationEllipsis
Pagination.List = PaginationList
