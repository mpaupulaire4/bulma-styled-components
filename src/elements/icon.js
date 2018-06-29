import styled from 'styled-components'
import { fromTheme } from '../utilities/functions'
import Vars from '../utilities/vars'

Vars.addDerivedDefault(() => ({
  'icon-dimensions': '1.5rem',
  'icon-dimensions-small': '1rem',
  'icon-dimensions-medium': '2rem',
  'icon-dimensions-large': '3rem',
}))

export const Icon = styled.span`
  align-items: center;
  display: inline-flex;
  justify-content: center;
  height: ${fromTheme('icon-dimensions')};
  width: ${fromTheme('icon-dimensions')};
  /* Sizes */
  &.is-small {
    height: ${fromTheme('icon-dimensions-small')};
    width: ${fromTheme('icon-dimensions-small')};
  }
  &.is-medium {
    height: ${fromTheme('icon-dimensions-medium')};
    width: ${fromTheme('icon-dimensions-medium')};
  }
  &.is-large {
    height: ${fromTheme('icon-dimensions-large')};
    width: ${fromTheme('icon-dimensions-large')};
  }
`
