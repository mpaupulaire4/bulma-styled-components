import styled from 'styled-components'
import Vars from '../utilities/vars'
import { desktop } from '../utilities/mixins'
import { fromTheme } from '../utilities/functions'

Vars.addDerivedDefault(() => ({
  'section-padding': '3rem 1.5rem',
  'section-padding-medium': '9rem 1.5rem',
  'section-padding-large': '18rem 1.5rem',
}))

export const Section = styled.section`
  padding: ${fromTheme('section-padding')};
  /* Responsiveness */
  ${desktop`
    /* Sizes */
    &.is-medium {
      padding: ${fromTheme('section-padding-medium')};
    }
    &.is-large {
      padding: ${fromTheme('section-padding-large')};
    }
  `}
`
