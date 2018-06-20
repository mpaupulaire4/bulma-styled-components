import styled, { css } from 'styled-components'
import { rgba, darken } from 'polished'
import Vars from '../utilities/vars'
import { fromTheme } from '../utilities/functions'
import { unselectable, loader, center } from '../utilities/mixins'
import { control } from '../utilities/controls'

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

const defaultProps = { theme: Vars.getVariables() }

const colorClass = props => Object.entries(props.theme.colors).reduce((acc, [name, [color, color_invert]]) => css`
  ${acc}
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
        box-shadow: ${props.theme['button-focus-box-shadow-size']} ${rgba(color, 0.25)};
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
        color: $color;
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

export const Button = styled.button`
  ${control}
  ${unselectable}
  background-color: ${fromTheme('button-background-color')};
  border-color: ${fromTheme('button-border-color')};
  border-width: ${fromTheme('button-border-width')};
  color: ${fromTheme('button-color')};
  cursor: pointer;
  justify-content: center;
  padding-bottom: ${fromTheme('button-padding-vertical')};
  padding-left: ${fromTheme('button-padding-horizontal')};
  padding-right: ${fromTheme('button-padding-horizontal')};
  padding-top: ${fromTheme('button-padding-vertical')};
  text-align: center;
  white-space: nowrap;
  strong {
    color: inherit;
  }
  .icon {
    &,
    &.is-small,
    &.is-medium,
    &.is-large {
      height: 1.5em;
      width: 1.5em;
    }
    &:first-child:not(:last-child) {
      margin-left: calc(-0.375em - ${fromTheme('button-border-width')});
      margin-right: 0.1875em;
    }
    &:last-child:not(:first-child) {
      margin-left: 0.1875em;
      margin-right: calc(-0.375em - ${fromTheme('button-border-width')});
    }
    &:first-child:last-child {
      margin-left: calc(-0.375em - ${fromTheme('button-border-width')});
      margin-right: calc(-0.375em - ${fromTheme('button-border-width')});
    }
  }
  &.is-text {
    background-color: transparent;
    border-color: transparent;
    color: ${fromTheme('button-text-color')};
    text-decoration: underline;
    &:hover,
    &.is-hovered,
    &:focus,
    &.is-focused {
      background-color: ${fromTheme('button-text-hover-background-color')};
      color: ${fromTheme('button-text-hover-color')};
    }
    &:active,
    &.is-active {
      background-color: ${props => darken(0.05, props.theme['button-text-hover-background-color'])};
      color: ${fromTheme('button-text-hover-color')};
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
    border-color: ${fromTheme('button-hover-border-color')};
    color: ${fromTheme('button-hover-color')};
  }
  &:active,
  &.is-active {
    border-color: ${fromTheme('button-active-border-color')};
    color: ${fromTheme('button-active-color')};
  }
  &:focus,
  &.is-focused {
    border-color: ${fromTheme('button-focus-border-color')};
    color: ${fromTheme('button-focus-color')};
    &:not(:active) {
      box-shadow: ${fromTheme('button-focus-box-shadow-size')} ${fromTheme('button-focus-box-shadow-color')};
    }
  }
  ${colorClass}
  /* Sizes */
  &.is-small {
    border-radius: ${fromTheme('radius-small')};
    font-size: ${fromTheme('size-small')};
  }
  &.is-medium {
    font-size: ${fromTheme('size-medium')};
  }
  &.is-large {
    font-size: ${fromTheme('size-large')};
  }
  /*  Modifiers */
  &[disabled] {
    background-color: ${fromTheme('button-disabled-background-color')};
    border-color: ${fromTheme('button-disabled-border-color')};
    box-shadow: ${fromTheme('button-disabled-shadow')};
    opacity: ${fromTheme('button-disabled-opacity')};
  }
  &.is-fullwidth {
    display: flex;
    width: 100%;
  }
  &.is-loading {
    color: transparent !important;
    pointer-events: none;
    &::after {
      ${loader}
      ${center('1em')}
      position: absolute !important;
    }
  }
  &.is-static {
    background-color: ${fromTheme('button-static-background-color')};
    border-color: ${fromTheme('button-static-border-color')};
    color: ${fromTheme('button-static-color')};
    box-shadow: none;
    pointer-events: none;
  }
  &.is-rounded {
    border-radius: ${fromTheme('radius-rounded')};
    padding-left: 1em;
    padding-right: 1em;
  }
`
Button.defaultProps = defaultProps

export const Buttons = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  ${Button} { /* stylelint-disable-line */
    margin-bottom: 0.5rem;
    &:not(:last-child) {
      margin-right: 0.5rem;
    }
  }
  &:last-child {
    margin-bottom: -0.5rem;
  }
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
  &.has-addons {
    ${Button} { /* stylelint-disable-line */
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
  }
  &.is-centered {
    justify-content: center;
  }
  &.is-right {
    justify-content: flex-end;
  }
`
Buttons.defaultProps = defaultProps
