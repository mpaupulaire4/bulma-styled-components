/* stylelint-disable no-descending-specificity */
import { css } from 'emotion'
import { rgba, darken } from 'polished'
import { BaseWithConsumer } from '../base/Class'
import { unselectable, loader, center } from '../utilities/mixins'
import { control } from '../utilities/controls'
import Buttons from './Buttons'

BULMA_VARS({
  get 'button-color'() { return this['grey-darker'] },
  get 'button-background-color'() { return this['white'] },

  get 'button-border-color'() { return this['grey-lighter'] },
  get 'button-border-width'() { return this['control-border-width'] },

  get 'button-padding-vertical'() { return `calc(0.375em - ${this['button-border-width']})` },
  get 'button-padding-horizontal'() { return '0.75em' },

  get 'button-hover-color'() { return this['link-hover'] },
  get 'button-hover-border-color'() { return this['link-hover-border'] },

  get 'button-focus-color'() { return this['link-focus'] },
  get 'button-focus-border-color'() { return this['link-focus-border'] },
  get 'button-focus-box-shadow-size'() { return '0 0 0 0.125em' },
  get 'button-focus-box-shadow-color'() { return rgba(this['link'], 0.25) },

  get 'button-active-color'() { return this['link-active'] },
  get 'button-active-border-color'() { return this['link-active-border'] },

  get 'button-text-color'() { return this['text'] },
  get 'button-text-hover-background-color'() { return this['background'] },
  get 'button-text-hover-color'() { return this['text-strong'] },

  get 'button-disabled-background-color'() { return this['white'] },
  get 'button-disabled-border-color'() { return this['grey-lighter'] },
  'button-disabled-shadow': 'none',
  'button-disabled-opacity': '0.5',

  get 'button-static-color'() { return this['grey'] },
  get 'button-static-background-color'() { return this['white-ter'] },
  get 'button-static-border-color'() { return this['grey-lighter'] },
})

const colorClasses = theme => Object.entries(theme.colors).map(([name, [color, color_invert]]) => css`
  &.is-${name} {
    /* Colors */
    background-color: ${color};
    border-color: transparent;
    color: ${color_invert};
    &:hover,
    &.is-hovered {
      background-color: ${darken(0.025, color)};
      border-color: transparent;
      color: ${color_invert};
    }
    &:active,
    &.is-active {
      background-color: ${darken(0.05, color)};
      border-color: transparent;
      color: ${color_invert};
    }
    &:focus,
    &.is-focused {
      border-color: transparent;
      color: ${color_invert};
      &:not(:active) {
        box-shadow: ${theme['button-focus-box-shadow-size']} ${rgba(color, 0.25)};
      }
    }
    &[disabled] {
      background-color: ${color};
      border-color: transparent;
      box-shadow: none;
    }
    &.is-inverted {
      background-color: ${color_invert};
      color: ${color};
      &:hover {
        background-color: ${darken(0.05, color_invert)};
      }
      &[disabled] {
        background-color: ${color_invert};
        border-color: transparent;
        box-shadow: none;
        color: ${color};
      }
    }
    &.is-loading {
      &::after {
        border-color: transparent transparent ${color_invert} ${color_invert} !important;
      }
    }
    &.is-outlined {
      background-color: transparent;
      border-color: ${color};
      color: ${color};
      &:hover,
      &:focus {
        background-color: ${color};
        border-color: ${color};
        color: ${color_invert};
      }
      &.is-loading {
        &::after {
          border-color: transparent transparent ${color} ${color} !important;
        }
      }
      &[disabled] {
        background-color: transparent;
        border-color: ${color};
        box-shadow: none;
        color: ${color};
      }
    }
    &.is-inverted.is-outlined {
      background-color: transparent;
      border-color: ${color_invert};
      color: ${color_invert};
      &:hover,
      &:focus {
        background-color: ${color_invert};
        color: ${color};
      }
      &[disabled] {
        background-color: transparent;
        border-color: ${color_invert};
        box-shadow: none;
        color: ${color_invert};
      }
    }
  }
`, '')

export default class Button extends BaseWithConsumer {
  static displayName ='Button'
  static defaultProps = {
    as: 'button',
  }

  static Style = theme => css`
    ${control(theme)}
    ${unselectable}
    background-color: ${theme['button-background-color']};
    border-color: ${theme['button-border-color']};
    border-width: ${theme['button-border-width']};
    color: ${theme['button-color']};
    cursor: pointer;
    justify-content: center;
    padding-bottom: ${theme['button-padding-vertical']};
    padding-left: ${theme['button-padding-horizontal']};
    padding-right: ${theme['button-padding-horizontal']};
    padding-top: ${theme['button-padding-vertical']};
    text-align: center;
    white-space: nowrap;
    strong {
      color: inherit;
    }
    &.is-text {
      background-color: transparent;
      border-color: transparent;
      color: ${theme['button-text-color']};
      text-decoration: underline;
      &:hover,
      &.is-hovered,
      &:focus,
      &.is-focused {
        background-color: ${theme['button-text-hover-background-color']};
        color: ${theme['button-text-hover-color']};
      }
      &:active,
      &.is-active {
        background-color: ${darken(0.05, theme['button-text-hover-background-color'])};
        color: ${theme['button-text-hover-color']};
      }
      &[disabled] {
        background-color: transparent;
        border-color: transparent;
        box-shadow: none;
      }
    }
    /* States */
    &:hover,
    &.is-hovered {
      border-color: ${theme['button-hover-border-color']};
      color: ${theme['button-hover-color']};
    }
    &:active,
    &.is-active {
      border-color: ${theme['button-active-border-color']};
      color: ${theme['button-active-color']};
    }
    &:focus,
    &.is-focused {
      border-color: ${theme['button-focus-border-color']};
      color: ${theme['button-focus-color']};
      &:not(:active) {
        box-shadow: ${theme['button-focus-box-shadow-size']} ${theme['button-focus-box-shadow-color']};
      }
    }
    /* Sizes */
    &.is-small {
      border-radius: ${theme['radius-small']};
      font-size: ${theme['size-small']};
    }
    &.is-medium {
      font-size: ${theme['size-medium']};
    }
    &.is-large {
      font-size: ${theme['size-large']};
    }
    /*  Modifiers */
    &[disabled] {
      background-color: ${theme['button-disabled-background-color']};
      border-color: ${theme['button-disabled-border-color']};
      box-shadow: ${theme['button-disabled-shadow']};
      opacity: ${theme['button-disabled-opacity']};
    }
    &.is-fullwidth {
      display: flex;
      width: 100%;
    }
    &.is-loading {
      color: transparent !important;
      pointer-events: none;
      &::after {
        ${loader(theme)}
        ${center('1em')}
        position: absolute !important;
      }
    }
    &.is-static {
      background-color: ${theme['button-static-background-color']};
      border-color: ${theme['button-static-border-color']};
      color: ${theme['button-static-color']};
      box-shadow: none;
      pointer-events: none;
    }
    &.is-rounded {
      border-radius: ${theme['radius-rounded']};
      padding-left: 1em;
      padding-right: 1em;
    }
    .${/* sc-custom '.buttons' */Buttons.name} & {
      margin-bottom: 0.5rem;
      &:not(:last-child) {
        margin-right: 0.5rem;
      }
    }
    .${/* sc-custom '.buttons' */Buttons.name}.has-addons & {
      &:not(:first-child) {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
      }
      &:not(:last-child) {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        margin-right: -1px;
      }
      &:last-child {
        margin-right: 0;
      }
      &:hover,
      &.is-hovered {
        z-index: 2;
      }
      &:focus,
      &.is-focused,
      &:active,
      &.is-active,
      &.is-selected {
        z-index: 3;
        &:hover {
          z-index: 4;
        }
      }
      &.is-expanded {
        flex-grow: 1;
      }
    }
    ${colorClasses(theme)}
  `
}
