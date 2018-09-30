/* stylelint-disable no-descending-specificity */
import { css } from 'emotion'
import Vars from '../utilities/vars'
import { BaseWithConsumer } from '../base/Class'


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


export default class Menu extends BaseWithConsumer {
  static defaultProps = {
    as: 'aside',
  }

  static Style = theme => css`
    font-size: ${theme['size-normal']};
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

export class MenuList extends BaseWithConsumer {
  static defaultProps = {
    as: 'ul',
  }

  static Style = theme => css`
    line-height: 1.25;
    a {
      border-radius: ${theme['menu-item-radius']};
      color: ${theme['menu-item-color']};
      display: block;
      padding: 0.5em 0.75em;
    }
    a:hover {
      background-color: ${theme['menu-item-hover-background-color']};
      color: ${theme['menu-item-hover-color']};
    }
    /* Modifiers */
    a.is-active {
      background-color: ${theme['menu-item-active-background-color']};
      color: ${theme['menu-item-active-color']};
    }
    li {
      ul {
        border-left: ${theme['menu-list-border-left']};
        margin: 0.75em;
        padding-left: 0.75em;
      }
    }
  `
}
Menu.List = MenuList

export class MenuLabel extends BaseWithConsumer {
  static defaultProps = {
    as: 'p',
  }

  static Style = theme => css`
    color: ${theme['menu-label-color']};
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
}
Menu.Label = MenuLabel

