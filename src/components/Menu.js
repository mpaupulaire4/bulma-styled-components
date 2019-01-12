/* stylelint-disable no-descending-specificity */
import { css } from 'emotion'
import { BaseWithConsumer } from '../base/Class'


BULMA_VARS({
  get 'menu-item-color'() { return this['text'] },
  get 'menu-item-radius'() { return this['radius-small'] },
  get 'menu-item-hover-color'() { return this['text-strong'] },
  get 'menu-item-hover-background-color'() { return this['background'] },
  get 'menu-item-active-color'() { return this['link-invert'] },
  get 'menu-item-active-background-color'() { return this['link'] },

  get 'menu-list-border-left'() { return `1px solid ${this['border']}` },

  get 'menu-label-color'() { return this['text-light'] },
})


export default class Menu extends BaseWithConsumer {
  static displayName ='Menu'
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
  static displayName ='MenuList'
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
  static displayName ='MenuLabel'
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

