/* stylelint-disable no-descending-specificity */
import React from 'react'
import { css as emotion_css } from 'emotion'
import { rgba, darken } from 'polished'
import { Consumer } from '../base'
import Vars from '../utilities/vars'
import { unselectable, loader, center } from '../utilities/mixins'
import { control } from '../utilities/controls'
import Buttons from './Buttons'

Vars.addDerivedDefault(vars => ({
  'button-color': vars['grey-darker'],
  'button-background-color': vars['white'],

  'button-border-color': vars['grey-lighter'],
  'button-border-width': vars['control-border-width'],

  'button-padding-vertical': `calc(0.375em - ${vars['button-border-width']})`,
  'button-padding-horizontal': '0.75em',

  'button-hover-color': vars['link-hover'],
  'button-hover-border-color': vars['link-hover-border'],

  'button-focus-color': vars['link-focus'],
  'button-focus-border-color': vars['link-focus-border'],
  'button-focus-box-shadow-size': '0 0 0 0.125em',
  'button-focus-box-shadow-color': rgba(vars['link'], 0.25),

  'button-active-color': vars['link-active'],
  'button-active-border-color': vars['link-active-border'],

  'button-text-color': vars['text'],
  'button-text-hover-background-color': vars['background'],
  'button-text-hover-color': vars['text-strong'],

  'button-disabled-background-color': vars['white'],
  'button-disabled-border-color': vars['grey-lighter'],
  'button-disabled-shadow': 'none',
  'button-disabled-opacity': '0.5',

  'button-static-color': vars['grey'],
  'button-static-background-color': vars['white-ter'],
  'button-static-border-color': vars['grey-lighter'],
}))

const colorClasses = theme => Object.entries(theme.colors).map(([name, [color, color_invert]]) => emotion_css`
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

const ButtonStyle = theme => emotion_css`
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
`

export default class Button extends React.PureComponent {
  static defaultProps = {
    as: 'button',
    className: '',
  }

  render() {
    const { as, className, ...props } = this.props
    return (
      <Consumer>
        {({ theme }) => React.createElement(as, {
          ...props,
          className: [
            Button.name,
            ButtonStyle(theme, as),
            ...colorClasses(theme),
            className,
          ].join(' '),
        })}
      </Consumer>
    )
  }
}
