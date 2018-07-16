/* stylelint-disable no-descending-specificity */
import styled from 'styled-components'
import Vars from '../utilities/vars'
import { Icon } from '../'
import { block, overflow_touch, unselectable } from '../utilities/mixins'
import { fromTheme } from '../utilities/functions'

Vars.addDerivedDefault(vars => ({
  'tabs-border-bottom-color': vars['border'],
  'tabs-border-bottom-style': 'solid',
  'tabs-border-bottom-width': '1px',
  'tabs-link-color': vars['text'],
  'tabs-link-hover-border-bottom-color': vars['text-strong'],
  'tabs-link-hover-color': vars['text-strong'],
  'tabs-link-active-border-bottom-color': vars['link'],
  'tabs-link-active-color': vars['link'],
  'tabs-link-padding': '0.5em 1em',

  'tabs-boxed-link-radius': vars['radius'],
  'tabs-boxed-link-hover-background-color': vars['background'],
  'tabs-boxed-link-hover-border-bottom-color': vars['border'],

  'tabs-boxed-link-active-background-color': vars['white'],
  'tabs-boxed-link-active-border-color': vars['border'],
  'tabs-boxed-link-active-border-bottom-color': 'transparent',

  'tabs-toggle-link-border-color': vars['border'],
  'tabs-toggle-link-border-style': 'solid',
  'tabs-toggle-link-border-width': '1px',
  'tabs-toggle-link-hover-background-color': vars['background'],
  'tabs-toggle-link-hover-border-color': vars['border-hover'],
  'tabs-toggle-link-radius': vars['radius'],
  'tabs-toggle-link-active-background-color': vars['link'],
  'tabs-toggle-link-active-border-color': vars['link'],
  'tabs-toggle-link-active-color': vars['link-invert'],
}))

export const Tabs = styled.div`
  ${block}
  ${overflow_touch}
  ${unselectable}
  align-items: stretch;
  display: flex;
  font-size: ${fromTheme('size-normal')};
  justify-content: space-between;
  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap;
  a {
    align-items: center;
    border-bottom-color: ${fromTheme('tabs-border-bottom-color')};
    border-bottom-style: ${fromTheme('tabs-border-bottom-style')};
    border-bottom-width: ${fromTheme('tabs-border-bottom-width')};
    color: ${fromTheme('tabs-link-color')};
    display: flex;
    justify-content: center;
    margin-bottom: -${fromTheme('tabs-border-bottom-width')};
    padding: ${fromTheme('tabs-link-padding')};
    vertical-align: top;
    &:hover {
      border-bottom-color: ${fromTheme('tabs-link-hover-border-bottom-color')};
      color: ${fromTheme('tabs-link-hover-color')};
    }
  }
  li {
    display: block;
    &.is-active {
      a {
        border-bottom-color: ${fromTheme('tabs-link-active-border-bottom-color')};
        color: ${fromTheme('tabs-link-active-color')};
      }
    }
  }
  ul {
    align-items: center;
    border-bottom-color: ${fromTheme('tabs-border-bottom-color')};
    border-bottom-style: ${fromTheme('tabs-border-bottom-style')};
    border-bottom-width: ${fromTheme('tabs-border-bottom-width')};
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
  ${/* sc-selector */Icon} {
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
      border-radius: ${fromTheme('tabs-boxed-link-radius')} ${fromTheme('tabs-boxed-link-radius')} 0 0;
      &:hover {
        background-color: ${fromTheme('tabs-boxed-link-hover-background-color')};
        border-bottom-color: ${fromTheme('tabs-boxed-link-hover-border-bottom-color')};
      }
    }
    li {
      &.is-active {
        a {
          background-color: ${fromTheme('tabs-boxed-link-active-background-color')};
          border-color: ${fromTheme('tabs-boxed-link-active-border-color')};
          border-bottom-color: ${fromTheme('tabs-boxed-link-active-border-bottom-color')} !important;
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
      border-color: ${fromTheme('tabs-toggle-link-border-color')};
      border-style: ${fromTheme('tabs-toggle-link-border-style')};
      border-width: ${fromTheme('tabs-toggle-link-border-width')};
      margin-bottom: 0;
      position: relative;
      &:hover {
        background-color: ${fromTheme('tabs-toggle-link-hover-background-color')};
        border-color: ${fromTheme('tabs-toggle-link-hover-border-color')};
        z-index: 2;
      }
    }
    li {
      & + li {
        margin-left: -${fromTheme('tabs-toggle-link-border-width')};
      }
      &:first-child a {
        border-radius: ${fromTheme('tabs-toggle-link-radius')} 0 0 ${fromTheme('tabs-toggle-link-radius')};
      }
      &:last-child a {
        border-radius: 0 ${fromTheme('tabs-toggle-link-radius')} ${fromTheme('tabs-toggle-link-radius')} 0;
      }
      &.is-active {
        a {
          background-color: ${fromTheme('tabs-toggle-link-active-background-color')};
          border-color: ${fromTheme('tabs-toggle-link-active-border-color')};
          color: ${fromTheme('tabs-toggle-link-active-color')};
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
          border-bottom-left-radius: ${fromTheme('radius-rounded')};
          border-top-left-radius: ${fromTheme('radius-rounded')};
          padding-left: 1.25em;
        }
        &:last-child a {
          border-bottom-right-radius: ${fromTheme('radius-rounded')};
          border-top-right-radius: ${fromTheme('radius-rounded')};
          padding-right: 1.25em;
        }
      }
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
`
Tabs.defaultProps = { theme: Vars.getVariables() }

