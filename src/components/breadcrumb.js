/* stylelint-disable no-descending-specificity */
import styled from 'styled-components'
import Vars from '../utilities/vars'
import { fromTheme } from '../utilities/functions'
import { block, unselectable } from '../utilities/mixins'
import Icon from '../elements/icon'


Vars.addDerivedDefault(vars => ({
  'breadcrumb-item-color': vars['link'],
  'breadcrumb-item-hover-color': vars['link-hover'],
  'breadcrumb-item-active-color': vars['text-strong'],

  'breadcrumb-item-padding-vertical': 0,
  'breadcrumb-item-padding-horizontal': '0.75em',

  'breadcrumb-item-separator-color': vars['grey-light'],
}))


const Breadcrumb = styled.nav`
  ${block}
  ${unselectable}
  font-size: ${fromTheme('size-normal')};
  white-space: nowrap;
  a {
    align-items: center;
    color: ${fromTheme('breadcrumb-item-color')};
    display: flex;
    justify-content: center;
    padding: ${fromTheme('breadcrumb-item-padding-vertical')} ${fromTheme('breadcrumb-item-padding-horizontal')};
    &:hover {
      color: ${fromTheme('breadcrumb-item-hover-color')};
    }
  }
  li {
    align-items: center;
    display: flex;
    &:first-child a {
      padding-left: 0;
    }
    &.is-active {
      a {
        color: ${fromTheme('breadcrumb-item-active-color')};
        cursor: default;
        pointer-events: none;
      }
    }
    & + li::before {
      color: ${fromTheme('breadcrumb-item-separator-color')};
      content: "\u002f";
    }
  }
  ul,
  ol {
    align-items: flex-start;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  ${Icon} { /* stylelint-disable-line */
    &:first-child {
      margin-right: 0.5em;
    }
    &:last-child {
      margin-left: 0.5em;
    }
  }
  /* Alignment */
  &.is-centered {
    ol,
    ul {
      justify-content: center;
    }
  }
  &.is-right {
    ol,
    ul {
      justify-content: flex-end;
    }
  }
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
  /* Styles */
  &.has-arrow-separator {
    li + li::before {
      content: "\u2192";
    }
  }
  &.has-bullet-separator {
    li + li::before {
      content: "\u2022";
    }
  }
  &.has-dot-separator {
    li + li::before {
      content: "\u00b7";
    }
  }
  &.has-succeeds-separator {
    li + li::before {
      content: "\u227B";
    }
  }
`

export default Breadcrumb
