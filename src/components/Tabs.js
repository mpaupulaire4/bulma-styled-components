/* stylelint-disable no-descending-specificity */
import { css } from 'emotion'
import { BaseWithConsumer } from '../base/Class'
import Icon from '../elements/Icon'
import { block, overflow_touch, unselectable } from '../utilities/mixins'

BULMA_VARS({
  get 'tabs-border-bottom-color'() { return this['border'] },
  'tabs-border-bottom-style': 'solid',
  'tabs-border-bottom-width': '1px',
  get 'tabs-link-color'() { return this['text'] },
  get 'tabs-link-hover-border-bottom-color'() { return this['text-strong'] },
  get 'tabs-link-hover-color'() { return this['text-strong'] },
  get 'tabs-link-active-border-bottom-color'() { return this['link'] },
  get 'tabs-link-active-color'() { return this['link'] },
  'tabs-link-padding': '0.5em 1em',

  get 'tabs-boxed-link-radius'() { return this['radius'] },
  get 'tabs-boxed-link-hover-background-color'() { return this['background'] },
  get 'tabs-boxed-link-hover-border-bottom-color'() { return this['border'] },

  get 'tabs-boxed-link-active-background-color'() { return this['white'] },
  get 'tabs-boxed-link-active-border-color'() { return this['border'] },
  'tabs-boxed-link-active-border-bottom-color': 'transparent',

  get 'tabs-toggle-link-border-color'() { return this['border'] },
  'tabs-toggle-link-border-style': 'solid',
  'tabs-toggle-link-border-width': '1px',
  get 'tabs-toggle-link-hover-background-color'() { return this['background'] },
  get 'tabs-toggle-link-hover-border-color'() { return this['border-hover'] },
  get 'tabs-toggle-link-radius'() { return this['radius'] },
  get 'tabs-toggle-link-active-background-color'() { return this['link'] },
  get 'tabs-toggle-link-active-border-color'() { return this['link'] },
  get 'tabs-toggle-link-active-color'() { return this['link-invert'] },
})

export default class Tabs extends BaseWithConsumer {
  static defaultProps = {
    as: 'div',
  }

  static Style = theme => css`
    ${block}
    ${overflow_touch}
    ${unselectable}
    align-items: stretch;
    display: flex;
    font-size: ${theme['size-normal']};
    justify-content: space-between;
    overflow: hidden;
    overflow-x: auto;
    white-space: nowrap;
    a {
      align-items: center;
      border-bottom-color: ${theme['tabs-border-bottom-color']};
      border-bottom-style: ${theme['tabs-border-bottom-style']};
      border-bottom-width: ${theme['tabs-border-bottom-width']};
      color: ${theme['tabs-link-color']};
      display: flex;
      justify-content: center;
      margin-bottom: -${theme['tabs-border-bottom-width']};
      padding: ${theme['tabs-link-padding']};
      vertical-align: top;
      &:hover {
        border-bottom-color: ${theme['tabs-link-hover-border-bottom-color']};
        color: ${theme['tabs-link-hover-color']};
      }
    }
    li {
      display: block;
      &.is-active {
        a {
          border-bottom-color: ${theme['tabs-link-active-border-bottom-color']};
          color: ${theme['tabs-link-active-color']};
        }
      }
    }
    ul {
      align-items: center;
      border-bottom-color: ${theme['tabs-border-bottom-color']};
      border-bottom-style: ${theme['tabs-border-bottom-style']};
      border-bottom-width: ${theme['tabs-border-bottom-width']};
      display: flex;
      flex-grow: 1;
      flex-shrink: 0;
      justify-content: flex-start;
      &.is-left {
        padding-right: 0.75em;
      }
      &.is-center {
        flex: none;
        justify-content: center;
        padding-left: 0.75em;
        padding-right: 0.75em;
      }
      &.is-right {
        justify-content: flex-end;
        padding-left: 0.75em;
      }
    }
    .${/* sc-selector */Icon.name} {
      &:first-child {
        margin-right: 0.5em;
      }
      &:last-child {
        margin-left: 0.5em;
      }
    }
    /* Alignment */
    &.is-centered {
      ul {
        justify-content: center;
      }
    }
    &.is-right {
      ul {
        justify-content: flex-end;
      }
    }
    /* Styles */
    &.is-boxed {
      a {
        border: 1px solid transparent;
        border-radius: ${theme['tabs-boxed-link-radius']} ${theme['tabs-boxed-link-radius']} 0 0;
        &:hover {
          background-color: ${theme['tabs-boxed-link-hover-background-color']};
          border-bottom-color: ${theme['tabs-boxed-link-hover-border-bottom-color']};
        }
      }
      li {
        &.is-active {
          a {
            background-color: ${theme['tabs-boxed-link-active-background-color']};
            border-color: ${theme['tabs-boxed-link-active-border-color']};
            border-bottom-color: ${theme['tabs-boxed-link-active-border-bottom-color']} !important;
          }
        }
      }
    }
    &.is-fullwidth {
      li {
        flex-grow: 1;
        flex-shrink: 0;
      }
    }
    &.is-toggle {
      a {
        border-color: ${theme['tabs-toggle-link-border-color']};
        border-style: ${theme['tabs-toggle-link-border-style']};
        border-width: ${theme['tabs-toggle-link-border-width']};
        margin-bottom: 0;
        position: relative;
        &:hover {
          background-color: ${theme['tabs-toggle-link-hover-background-color']};
          border-color: ${theme['tabs-toggle-link-hover-border-color']};
          z-index: 2;
        }
      }
      li {
        & + li {
          margin-left: -${theme['tabs-toggle-link-border-width']};
        }
        &:first-child a {
          border-radius: ${theme['tabs-toggle-link-radius']} 0 0 ${theme['tabs-toggle-link-radius']};
        }
        &:last-child a {
          border-radius: 0 ${theme['tabs-toggle-link-radius']} ${theme['tabs-toggle-link-radius']} 0;
        }
        &.is-active {
          a {
            background-color: ${theme['tabs-toggle-link-active-background-color']};
            border-color: ${theme['tabs-toggle-link-active-border-color']};
            color: ${theme['tabs-toggle-link-active-color']};
            z-index: 1;
          }
        }
      }
      ul {
        border-bottom: none;
      }
      &.is-toggle-rounded {
        li {
          &:first-child a {
            border-bottom-left-radius: ${theme['radius-rounded']};
            border-top-left-radius: ${theme['radius-rounded']};
            padding-left: 1.25em;
          }
          &:last-child a {
            border-bottom-right-radius: ${theme['radius-rounded']};
            border-top-right-radius: ${theme['radius-rounded']};
            padding-right: 1.25em;
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
