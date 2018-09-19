import styled, { css } from 'styled-components'
import {
  block,
  tablet,
  mobile,
} from '../utilities/mixins'
import { fromTheme } from '../utilities/functions'
import Title from '../elements/Title'
import Subtitle from '../elements/Subtitle'

export const LevelItem = styled.div`
  align-items: center;
  display: flex;
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
  justify-content: center;
  ${Title}, ${Subtitle} { /* stylelint-disable-line */
    margin-bottom: 0;
  }

  /* Responsiveness */
  ${mobile`
    &:not(:last-child) {
      margin-bottom: 0.75rem;
    }
  `}
`

const levelShared = css`
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
  ${LevelItem} { /* stylelint-disable-line */
    /* Modifiers */
    &.is-flexible {
      flex-grow: 1;
    }
    /* Responsiveness */
    ${tablet`
      &:not(:last-child) {
        margin-right: 0.75rem;
      }
    `}
  }
`

export const LevelRight = styled.div`
  ${levelShared}
  align-items: center;
  justify-content: flex-end;
  /* Responsiveness */
  ${tablet`
    display: flex;
  `}
`

export const LevelLeft = styled.div`
  ${levelShared}
  align-items: center;
  justify-content: flex-start;
  /* Responsiveness */
  ${mobile`
    & + ${LevelRight} {
      margin-top: 1.5rem;
    }
  `}
  ${tablet`
    display: flex;
  `}
  `

export const Level = styled.div`
  ${block}
  align-items: center;
  justify-content: space-between;
  code {
    border-radius: ${fromTheme('radius')}
  }
  img {
    display: inline-block;
    vertical-align: top;
  }
  /* Modifiers */
  &.is-mobile {
    display: flex;
    ${LevelLeft},
    ${LevelRight} { /* stylelint-disable-line */
      display: flex;
    }
    ${LevelLeft} + ${LevelRight} { /* stylelint-disable-line */
      margin-top: 0;
    }
    ${LevelItem} { /* stylelint-disable-line */
      margin-right: 0.75rem;
    }
    ${LevelItem}:not(:last-child) {
      margin-bottom: 0;
    }
    ${LevelItem}:not(.is-narrow) {
      flex-grow: 1;
    }
  }
  /* Responsiveness */
  ${tablet`
    display: flex;
    & > .level-item {
      &:not(.is-narrow) {
        flex-grow: 1;
      }
    }
  `}
`
Level.Right = LevelRight
Level.Left = LevelLeft
Level.Item = LevelItem
