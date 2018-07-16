import styled from 'styled-components'
import Vars from '../utilities/vars'
import { fromTheme } from '../utilities/functions'

Vars.addDerivedDefault(vars => ({
  'label-color': vars['grey-darker'],
  'label-weight': vars['weight-bold'],
}))

export const Label = styled.label`
  color: ${fromTheme('label-color')};
  display: block;
  font-size: ${fromTheme('size-normal')};
  font-weight: ${fromTheme('label-weight')};
  &:not(:last-child) {
    margin-bottom: 0.5em;
  }
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
Label.defaultProps = { theme: Vars.getVariables() }
