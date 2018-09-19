import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import Vars from '../utilities/vars'
import { placeholder } from '../utilities/mixins'
import {
  control,
  control_small,
  control_medium,
  control_large,
} from '../utilities/controls'
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
}))

export const InputStyle = css`
  ${control}
  background-color: ${fromTheme('input-background-color')};
  border-color: ${fromTheme('input-border-color')};
  color: ${fromTheme('input-color')};
  ${placeholder`
    color: ${({ theme }) => rgba(theme['input-color'], 0.3)};
  `}
  &:hover,
  &.is-hovered {
    border-color: ${fromTheme('input-hover-border-color')};
  }
  &:focus,
  &.is-focused,
  &:active,
  &.is-active {
    border-color: ${fromTheme('input-focus-border-color')};
    box-shadow: ${fromTheme('input-focus-box-shadow-size')} ${fromTheme('input-focus-box-shadow-color')};
  }
  &[disabled] {
    background-color: ${fromTheme('input-disabled-background-color')};
    border-color: ${fromTheme('input-disabled-border-color')};
    box-shadow: none;
    color: ${fromTheme('input-disabled-color')};
    ${placeholder`
      color: ${({ theme }) => rgba(theme['input-disabled-color'], 0.3)};
    `}
  }
`
const ITSharedColorClasses = ({ theme }) => Object.entries(theme['colors']).reduce((acc, [name, [color]]) => css`
  ${acc}
  &.is-${/* sc-custom 'blue' */name} {
    border-color: ${color};
    &:focus,
    &.is-focused,
    &:active,
    &.is-active {
      box-shadow: ${fromTheme('input-focus-box-shadow-size')} ${rgba(color, 0.25)};
    }
  }
`, '')
export const InputTextareaShared = css`
  ${InputStyle}
  box-shadow: ${fromTheme('input-shadow')};
  max-width: 100%;
  width: 100%;
  &[readonly] {
    box-shadow: none;
  }
  /* Colors */
  ${ITSharedColorClasses}
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
  &.is-fullwidth {
    display: block;
    width: 100%;
  }
  &.is-inline {
    display: inline;
    width: auto;
  }
`
export const Input = styled.input`
  ${InputTextareaShared}
  &.is-rounded {
    border-radius: ${fromTheme('radius-rounded')};
    padding-left: 1em;
    padding-right: 1em;
  }
  &.is-static {
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;
    padding-left: 0;
    padding-right: 0;
  }
`
Input.defaultProps = { theme: Vars.getVariables() }
