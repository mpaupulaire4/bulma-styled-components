import styled from 'styled-components'
import Vars from '../utilities/vars'
import { fromTheme } from '../utilities/functions'

Vars.addDerivedDefault(vars => ({
  'footer-background-color': vars['white-bis'],
}))

export const Footer = styled.footer`
  background-color: ${fromTheme('footer-background-color')};
  padding: 3rem 1.5rem 6rem;
`
