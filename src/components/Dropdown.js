/* stylelint-disable no-descending-specificity */
import { css as emotion_css } from 'emotion'
import { rgba } from 'polished'
import Vars from '../utilities/vars'
import { BaseWithConsumer } from '../base/Class'


Vars.addDerivedDefault(vars => ({
  'dropdown-content-background-color': vars['white'],
  'dropdown-content-arrow': vars['link'],
  'dropdown-content-offset': '4px',
  'dropdown-content-radius': vars['radius'],
  'dropdown-content-shadow': `0 2px 3px ${rgba(vars['black'], 0.1)}, 0 0 0 1px ${rgba(vars['black'], 0.1)}`,
  'dropdown-content-z': 20,

  'dropdown-item-color': vars['grey-dark'],
  'dropdown-item-hover-color': vars['black'],
  'dropdown-item-hover-background-color': vars['background'],
  'dropdown-item-active-color': vars['link-invert'],
  'dropdown-item-active-background-color': vars['link'],

  'dropdown-divider-background-color': vars['border'],
}))

export class DropdownMenu extends BaseWithConsumer {
  static defaultProps = {
    as: 'div',
  }

  static Style = theme => emotion_css`
    display: none;
    left: 0;
    min-width: 12rem;
    padding-top: ${theme['dropdown-content-offset']};
    position: absolute;
    top: 100%;
    z-index: ${theme['dropdown-content-z']};
  `
}

export default class Dropdown extends BaseWithConsumer {
  static defaultProps = {
    as: 'div',
  }

  static Style = theme => emotion_css`
    display: inline;
    position: relative;
    vertical-align: top;
    &.is-active,
    &.is-hoverable:hover {
      .${/* sc-custom ".dropdown-menu" */DropdownMenu.name} {
        display: block;
      }
    }
    &.is-right {
      .${/* sc-custom ".dropdown-menu" */DropdownMenu.name} {
        left: auto;
        right: 0;
      }
    }
    &.is-up {
      .${/* sc-custom ".dropdown-menu" */DropdownMenu.name} {
        bottom: 100%;
        padding-bottom: ${theme['dropdown-content-offset']};
        padding-top: initial;
        top: auto;
      }
    }
  `
}

Dropdown.Menu = DropdownMenu

export class DropdownContent extends BaseWithConsumer {
  static defaultProps = {
    as: 'div',
  }

  static Style = theme => emotion_css`
    background-color: ${theme['dropdown-content-background-color']};
    border-radius: ${theme['dropdown-content-radius']};
    box-shadow: ${theme['dropdown-content-shadow']};
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
  `
}
Dropdown.Content = DropdownContent

export class DropdownItem extends BaseWithConsumer {
  static defaultProps = {
    as: 'a',
  }

  static Style = theme => emotion_css`
    color: ${theme['dropdown-item-color']};
    display: block;
    font-size: 0.875rem;
    line-height: 1.5;
    padding: 0.375rem 1rem;
    position: relative;
    a& {
      padding-right: 3rem;
      white-space: nowrap;
      &:hover {
        background-color: ${theme['dropdown-item-hover-background-color']};
        color: ${theme['dropdown-item-hover-color']};
      }
      &.is-active {
        background-color: ${theme['dropdown-item-active-background-color']};
        color: ${theme['dropdown-item-active-color']};
      }
    }
  `
}
Dropdown.Item = DropdownItem

export class DropdownDivider extends BaseWithConsumer {
  static defaultProps = {
    as: 'hr',
  }

  static Style = theme => emotion_css`
    background-color: ${theme['dropdown-divider-background-color']};
    border: none;
    display: block;
    height: 1px;
    margin: 0.5rem 0;
  `
}
Dropdown.Divider = DropdownDivider
