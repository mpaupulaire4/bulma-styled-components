import styled, { css } from 'styled-components'
import { tablet } from '../utilities/mixins'


export const Tile = styled.div`
  align-items: stretch;
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  min-height: min-content;
  /* Modifiers */
  &.is-ancestor {
    margin-left: -0.75rem;
    margin-right: -0.75rem;
    margin-top: -0.75rem;
    &:last-child {
      margin-bottom: -0.75rem;
    }
    &:not(:last-child) {
      margin-bottom: 0.75rem;
    }
  }
  &.is-child {
    margin: 0 !important;
  }
  &.is-parent {
    padding: 0.75rem;
  }
  &.is-vertical {
    flex-direction: column;
    & > .tile.is-child:not(:last-child) {
      margin-bottom: 1.5rem !important;
    }
  }
  /* Responsiveness */
  ${tablet`
    &:not(.is-child) {
      display: flex;
    }
    ${[...Array(12).keys()].reduce((acc, i) => css`
      ${acc}
      &.is-${i + 1} {
        flex: none;
        width: ${((i + 1) / 12) * 100}%;
      }
    `, '')}
  `}
`
