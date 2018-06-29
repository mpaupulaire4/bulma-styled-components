/* stylelint-disable no-descending-specificity */
import styled, { css } from 'styled-components'
import Vars from '../utilities/vars'
import { block } from '../utilities/mixins'
import { fromTheme } from '../utilities/functions'

Vars.addDerivedDefault(vars => ({
  'progress-bar-background-color': vars['border'],
  'progress-value-background-color': vars['text'],
}))

const colorClasses = props => Object.entries(props.theme.colors).reduce((acc, [name, [color]]) => css`
  ${acc}
  &.is-${name} {
    &::-webkit-progress-value {
      background-color: ${color};
    }
    &::-moz-progress-bar {
      background-color: ${color}
    }
    &::-ms-fill {
      background-color: ${color}
    }
  }
`, '')

export const Progress = styled.progress`
  ${block}
  appearance: none;
  border: none;
  border-radius: ${fromTheme('radius-rounded')};
  display: block;
  height: ${fromTheme('size-normal')};
  overflow: hidden;
  padding: 0;
  width: 100%;
  &::-webkit-progress-bar {
    background-color: ${fromTheme('progress-bar-background-color')};
  }
  &::-webkit-progress-value {
    background-color: ${fromTheme('progress-value-background-color')};
  }
  &::-moz-progress-bar {
    background-color: ${fromTheme('progress-value-background-color')};
  }
  &::-ms-fill {
    background-color: ${fromTheme('progress-value-background-color')};
    border: none;
  }
  /* Colors */
  ${colorClasses}
  /* Sizes */
  &.is-small {
    height: ${fromTheme('size-small')};
  }
  &.is-medium {
    height: ${fromTheme('size-medium')};
  }
  &.is-large {
    height: ${fromTheme('size-large')};
  }
`
