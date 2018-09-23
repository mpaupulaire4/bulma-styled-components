/* stylelint-disable no-descending-specificity, no-duplicate-selectors */
import { css as emotion_css } from 'emotion'
import { rgba } from 'polished'
import Vars from '../utilities/vars'
import { BaseWithConsumer } from '../base/Class'
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

  'pagination-shadow-inset': `inset 0 1px 2px ${rgba(vars['black'], 0.2)}`,
}))

const PaginationPreviousNextLinkEllipsisShared = theme => emotion_css`
  ${control(theme)}
  ${unselectable}
  font-size: 1em;
  padding-left: 0.5em;
  padding-right: 0.5em;
  justify-content: center;
  margin: 0.25rem;
  text-align: center;
`

const PaginationPreviousNextLinkShared = theme => emotion_css`
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
const PreviousNextShared = theme => emotion_css`
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

  static Style = theme => emotion_css`
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

  static Style = theme => emotion_css`
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

  static Style = theme => emotion_css`
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

  static Style = theme => emotion_css`
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

  static Style = theme => emotion_css`
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

export class Pagination extends BaseWithConsumer {
  static defaultProps = {
    as: 'nav',
  }

  static Style = theme => emotion_css`
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
