import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import Vars from '../utilities/vars'
import { block } from '../utilities/mixins'
import { fromTheme } from '../utilities/functions'

Vars.addDerivedDefault(vars => ({
  'box-color': vars['text'],
  'box-background-color': vars['white'],
  'box-radius': vars['radius-large'],
  'box-shadow': `0 2px 3px ${rgba(vars['black'], 0.1)}, 0 0 0 1px ${rgba(vars['black'], 0.1)}`,
  'box-padding': '1.25rem',
  'box-link-hover-shadow': `0 2px 3px ${rgba(vars['black'], 0.1)}, 0 0 0 1px ${vars['link']}`,
  'box-link-active-shadow': `inset 0 1px 2px ${rgba(vars['black'], 0.2)}, 0 0 0 1px ${vars['link']}`,
}))

export const BoxStyle = css`
  ${block}
  background-color: ${fromTheme('box-background-color')};
  border-radius: ${fromTheme('box-radius')};
  box-shadow: ${fromTheme('box-shadow')};
  color: ${fromTheme('box-color')};
  display: block;
  padding: ${fromTheme('box-padding')};
  a& {
    &:hover,
    &:focus {
      box-shadow: ${fromTheme('box-link-hover-shadow')};
    }
    &:active {
      box-shadow: ${fromTheme('box-link-active-shadow')};
    }
  }
`
export const Box = styled.div`${BoxStyle}`

Box.defaultProps = {
  theme: Vars.getVariables(),
}
