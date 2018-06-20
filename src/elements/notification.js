/* stylelint-disable no-descending-specificity */
import styled, { css } from 'styled-components'
import Vars from '../utilities/vars'
import { block } from '../utilities/mixins'
import { fromTheme } from '../utilities/functions'
import { Button } from './buttons'
import Delete from './delete'

Vars.addDerivedDefault(vars => ({
  'notification-background-color': vars['background'],
  'notification-radius': vars['radius'],
  'notification-padding': '1.25rem 2.5rem 1.25rem 1.5rem',
}))

const colorClasses = props => Object.entries(props.theme.colors).reduce((acc, [name, [color, color_invert]]) => css`
  ${acc}
  &.is-${name} {
    background-color: ${color};
    color: ${color_invert};
  }
`, '')

const Notification = styled.div`
  ${block}
  background-color: ${fromTheme('notification-background-color')};
  border-radius: ${fromTheme('notification-radius')};
  padding: ${fromTheme('notification-padding')};
  position: relative;
  a:not(${Button}) { /* stylelint-disable-line */
    color: currentColor;
    text-decoration: underline;
  }
  strong {
    color: currentColor;
  }
  code,
  pre {
    background: ${fromTheme('white')};
  }
  pre code {
    background: transparent;
  }
  & > ${Delete} { /* stylelint-disable-line */
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
  }
  .title,
  .subtitle,
  .content {
    color: currentColor;
  }
  ${colorClasses}
`

export default Notification
