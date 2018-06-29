/* stylelint-disable no-descending-specificity */
import styled from 'styled-components'
import Vars from '../utilities/vars'
import { fromTheme } from '../utilities/functions'


Vars.addDerivedDefault(vars => ({
  'menu-item-color': vars['text'],
  'menu-item-radius': vars['radius-small'],
  'menu-item-hover-color': vars['text-strong'],
  'menu-item-hover-background-color': vars['background'],
  'menu-item-active-color': vars['link-invert'],
  'menu-item-active-background-color': vars['link'],

  'menu-list-border-left': `1px solid ${vars['border']}`,

  'menu-label-color': vars['text-light'],
}))


export const Menu = styled.aside`
  font-size: ${fromTheme('size-normal')};
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

export const MenuList = styled.ul`
  line-height: 1.25;
  a {
    border-radius: ${fromTheme('menu-item-radius')};
    color: ${fromTheme('menu-item-color')};
    display: block;
    padding: 0.5em 0.75em;
    &:hover {
      background-color: ${fromTheme('menu-item-hover-background-color')};
      color: ${fromTheme('menu-item-hover-color')};
    }
    /* Modifiers */
    &.is-active {
      background-color: ${fromTheme('menu-item-active-background-color')};
      color: ${fromTheme('menu-item-active-color')};
    }
  }
  li {
    ul {
      border-left: ${fromTheme('menu-list-border-left')};
      margin: 0.75em;
      padding-left: 0.75em;
    }
  }
`
Menu.List = MenuList

export const MenuLabel = styled.p`
  color: ${fromTheme('menu-label-color')};
  font-size: 0.75em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  &:not(:first-child) {
    margin-top: 1em;
  }
  &:not(:last-child) {
    margin-bottom: 1em;
  }
`
Menu.Label = MenuLabel

