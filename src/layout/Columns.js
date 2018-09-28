import styled from 'styled-components'
import Vars from '../utilities/vars'
import { fromTheme } from '../utilities/functions'
import {
  tablet,
  desktop,
} from '../utilities/mixins'

Vars.addDerivedDefault(() => ({
  'column-gap': '0.75rem',
}))

export const Columns = styled.div`
  margin-left: (-${fromTheme('column-gap')});
  margin-right: (-${fromTheme('column-gap')});
  margin-top: (-${fromTheme('column-gap')});
  &:last-child {
    margin-bottom: (-${fromTheme('column-gap')});
  }
  &:not(:last-child) {
    margin-bottom: calc(1.5rem - ${fromTheme('column-gap')});
  }
  /* Modifiers */
  &.is-centered {
    justify-content: center;
  }
  &.is-gapless {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  &.is-mobile {
    display: flex;
  }
  &.is-multiline {
    flex-wrap: wrap;
  }
  &.is-vcentered {
    align-items: center;
  }
  /* Responsiveness */
  ${tablet`
    &:not(.is-desktop) {
      display: flex;
    }
  `}
  ${desktop`
    &.is-desktop {
      display: flex;
    }
  `}
`
