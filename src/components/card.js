/* stylelint-disable no-descending-specificity */
import styled from 'styled-components'
import { rgba } from 'polished'
import Vars from '../utilities/vars'
import { fromTheme } from '../utilities/functions'


Vars.addDerivedDefault(vars => ({
  'card-color': vars['text'],
  'card-background-color': vars['white'],
  'card-shadow': `0 2px 3px ${rgba(vars['black'], 0.1)}, 0 0 0 1px ${rgba(vars['black'], 0.1)}`,

  'card-header-background-color': 'transparent',
  'card-header-color': vars['text-strong'],
  'card-header-shadow': `0 1px 2px ${rgba(vars['black'], 0.1)}`,
  'card-header-weight': vars['weight-bold'],

  'card-content-background-color': 'transparent',

  'card-footer-background-color': 'transparent',
  'card-footer-border-top': `1px solid ${vars['border']}`,
}))


export const Card = styled.div`
  background-color: ${fromTheme('card-background-color')};
  box-shadow: ${fromTheme('card-shadow')};
  color: ${fromTheme('card-color')};
  max-width: 100%;
  position: relative;
  .media:not(:last-child) {
    margin-bottom: 0.75rem
  }
`

export const CardHeader = styled.header`
  background-color: ${fromTheme('card-header-background-color')};
  align-items: stretch;
  box-shadow: ${fromTheme('card-header-shadow')};
  display: flex;
`

export const CardHeaderTitle = styled.p`
  align-items: center;
  color: ${fromTheme('card-header-color')};
  display: flex;
  flex-grow: 1;
  font-weight: ${fromTheme('card-header-weight')};
  padding: 0.75rem;
  &.is-centered {
    justify-content: center;
  }
`

export const CardHeaderIcon = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 0.75rem;
`

export const CardImage = styled.div`
  display: block;
  position: relative;
`

export const CardContent = styled.div`
  background-color: ${fromTheme('card-content-background-color')};
  padding: 1.5rem;
`
export const CardFooter = styled.footer`
  background-color: ${fromTheme('card-footer-background-color')};
  border-top: ${fromTheme('card-footer-border-top')};
  align-items: stretch;
  display: flex;
`
export const CardFooterItem = styled.div`
  align-items: center;
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 0;
  justify-content: center;
  padding: 0.75rem;
  &:not(:last-child) {
    border-right: ${fromTheme('card-footer-border-top')};
  }
`
