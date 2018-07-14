/* stylelint-disable no-descending-specificity */
import styled, { css } from 'styled-components'
import { rgba, darken } from 'polished'
import Vars from '../utilities/vars'
import { arrow, loader } from '../utilities/mixins'
import {
  control_small,
  control_medium,
  control_large,
} from '../utilities/controls'
import { input } from './Input'
import { fromTheme } from '../utilities/functions'

Vars.addDerivedDefault(vars => ({
  'input-color': vars['grey-darker'],
  'input-background-color': vars['white'],
  'input-border-color': vars['grey-lighter'],
  'input-shadow': `inset 0 1px 2px ${rgba(vars['black'], 0.1)}`,

  'input-hover-color': vars['grey-darker'],
  'input-hover-border-color': vars['grey-light'],

  'input-focus-color': vars['grey-darker'],
  'input-focus-border-color': vars['link'],
  'input-focus-box-shadow-size': '0 0 0 0.125em',
  'input-focus-box-shadow-color': rgba(vars['link'], 0.25),

  'input-disabled-color': vars['text-light'],
  'input-disabled-background-color': vars['background'],
  'input-disabled-border-color': vars['background'],

  'input-arrow': vars['link'],

  'input-icon-color': vars['grey-lighter'],
  'input-icon-active-color': vars['grey'],

  'input-radius': vars['radius'],
}))

const SelectColorClasses = ({ theme }) => Object.entries(theme['colors']).reduce((acc, [name, [color]]) => css`
  ${acc}
  &.is-${name} {
    &:not(:hover)::after {
      border-color: ${color};
    }
    select {
      border-color: ${color};
      &:hover,
      &.is-hovered {
        border-color: ${darken(0.05, color)};
      }
      &:focus,
      &.is-focused,
      &:active,
      &.is-active {
        box-shadow: ${fromTheme('input-focus-box-shadow-size')} ${rgba(color, 0.25)};
      }
    }
  }
`, '')

export const Select = styled.div`
  display: inline-block;
  max-width: 100%;
  position: relative;
  vertical-align: top;
  &:not(.is-multiple) {
    height: 2.25em;
  }
  &:not(.is-multiple):not(.is-loading) {
    &::after {
      ${({ theme }) => arrow(theme['input-arrow'])}
      right: 1.125em;
      z-index: 4;
    }
  }
  select {
    ${input}
    cursor: pointer;
    display: block;
    font-size: 1em;
    max-width: 100%;
    outline: none;
    &::-ms-expand {
      display: none;
    }
    &[disabled]:hover {
      border-color: ${fromTheme('input-disabled-border-color')};
    }
    &:not([multiple]) {
      padding-right: 2.5em;
    }
    &[multiple] {
      height: initial;
      padding: 0;
      option {
        padding: 0.5em 1em;
      }
    }
  }
  &.is-rounded {
    select {
      border-radius: ${fromTheme('radius-rounded')};
      padding-left: 1em;
    }
  }
  /* States */
  &:not(.is-multiple):not(.is-loading):hover {
    &::after {
      border-color: ${fromTheme('input-hover-color')};
    }
  }
  /* Colors */
  ${SelectColorClasses}

  /* Sizes */
  &.is-small {
    ${control_small}
  }
  &.is-medium {
    ${control_medium}
  }
  &.is-large {
    ${control_large}
  }
  /* Modifiers */
  &.is-disabled {
    &::after {
      border-color: ${fromTheme('input-disabled-color')};
    }
  }
  &.is-fullwidth {
    width: 100%;
    select {
      width: 100%;
    }
  }
  &.is-loading {
    &::after {
      ${loader}
      margin-top: 0;
      position: absolute;
      right: 0.625em;
      top: 0.625em;
      transform: none;
    }
    &.is-small:after {
      font-size: ${fromTheme('size-small')};
    }
    &.is-medium:after {
      font-size: ${fromTheme('size-medium')};
    }
    &.is-large:after {
      font-size: ${fromTheme('size-large')};
    }
  }
`
Select.defaultProps = { theme: Vars.getVariables() }
