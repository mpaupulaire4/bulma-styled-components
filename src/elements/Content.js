/* stylelint-disable no-descending-specificity */
import { css } from 'emotion'
import { BaseWithConsumer } from '../base/Class'
import { block, overflow_touch } from '../utilities/mixins'

BULMA_VARS({
  get 'content-heading-color'() { return this['text-strong'] },
  get 'content-heading-weight'() { return this['weight-semibold'] },
  'content-heading-line-height': 1.125,

  get 'content-blockquote-background-color'() { return this['background'] },
  get 'content-blockquote-border-left'() { return `5px solid ${this['border']}` },
  'content-blockquote-padding': '1.25em 1.5em',

  'content-pre-padding': '1.25em 1.5em',

  get 'content-table-cell-border'() { return `1px solid ${this['border']}` },
  'content-table-cell-border-width': '0 0 1px',
  'content-table-cell-padding': '0.5em 0.75em',
  get 'content-table-cell-heading-color'() { return this['text-strong'] },
  'content-table-head-cell-border-width': '0 0 2px',
  get 'content-table-head-cell-color'() { return this['text-strong'] },
  'content-table-foot-cell-border-width': '2px 0 0',
  get 'content-table-foot-cell-color'() { return this['text-strong'] },
})

export default class Content extends BaseWithConsumer {
  static defaultProps = {
    as: 'div',
  }

  static Style = theme => css`
    ${block}
    /* Inline */
    li + li {
      margin-top: 0.25em;
    }
    /* Block */
    p,
    dl,
    ol,
    ul,
    blockquote,
    pre,
    table {
      &:not(:last-child) {
        margin-bottom: 1em;
      }
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${theme['content-heading-color']};
      font-weight: ${theme['content-heading-weight']};
      line-height: ${theme['content-heading-line-height']};
    }
    h1 {
      font-size: 2em;
      margin-bottom: 0.5em;
      &:not(:first-child) {
        margin-top: 1em;
      }
    }
    h2 {
      font-size: 1.75em;
      margin-bottom: 0.5714em;
      &:not(:first-child) {
        margin-top: 1.1428em;
      }
    }
    h3 {
      font-size: 1.5em;
      margin-bottom: 0.6666em;
      &:not(:first-child) {
        margin-top: 1.3333em;
      }
    }
    h4 {
      font-size: 1.25em;
      margin-bottom: 0.8em;
    }
    h5 {
      font-size: 1.125em;
      margin-bottom: 0.8888em;
    }
    h6 {
      font-size: 1em;
      margin-bottom: 1em;
    }
    blockquote {
      background-color: ${theme['content-blockquote-background-color']};
      border-left: ${theme['content-blockquote-border-left']};
      padding: ${theme['content-blockquote-padding']};
    }
    ol {
      list-style: decimal outside;
      margin-left: 2em;
      margin-top: 1em;
    }
    ul {
      list-style: disc outside;
      margin-left: 2em;
      margin-top: 1em;
      ul {
        list-style-type: circle;
        margin-top: 0.5em;
        ul {
          list-style-type: square;
        }
      }
    }
    dd {
      margin-left: 2em;
    }
    figure {
      margin-left: 2em;
      margin-right: 2em;
      text-align: center;
      &:not(:first-child) {
        margin-top: 2em;
      }
      &:not(:last-child) {
        margin-bottom: 2em;
      }
      img {
        display: inline-block;
      }
      figcaption {
        font-style: italic;
      }
    }
    pre {
      ${overflow_touch}
      overflow-x: auto;
      padding: ${theme['content-pre-padding']};
      white-space: pre;
      word-wrap: normal;
    }
    sup,
    sub {
      font-size: 75%;
    }
    table {
      width: 100%;
      td,
      th {
        border: ${theme['content-table-cell-border']};
        border-width: ${theme['content-table-cell-border-width']};
        padding: ${theme['content-table-cell-padding']};
        vertical-align: top;
      }
      th {
        color: ${theme['content-table-cell-heading-color']};
        text-align: left;
      }
      thead {
        td,
        th {
          border-width: ${theme['content-table-head-cell-border-width']};
          color: ${theme['content-table-head-cell-color']};
        }
      }
      tfoot
        td,
        th {
          border-width: ${theme['content-table-foot-cell-border-width']};
          color: ${theme['content-table-foot-cell-color']};
        }
      tbody {
        tr {
          &:last-child {
            td,
            th {
              border-bottom-width: 0;
            }
          }
        }
      }
    }
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
  `
}
