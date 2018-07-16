import styled, { css } from 'styled-components'
import Vars from '../utilities/vars'
import { fromTheme } from '../utilities/functions'

Vars.addDerivedDefault(vars => ({
  'help-size': vars['size-small'],
}))

const HelpColorClasses = ({ theme }) => Object.entries(theme['colors']).reduce((acc, [name, [color]]) => css`
  ${acc}
  &.is-${name} {
    color: ${color};
  }
`, '')

export const Help = styled.p`
  display: block;
  font-size: ${fromTheme('help-size')};
  margin-top: 0.25rem;
  ${HelpColorClasses}
`
Help.defaultProps = { theme: Vars.getVariables() }
