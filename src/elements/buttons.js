/* stylelint-disable no-descending-specificity */
import styled, { css } from 'styled-components'
import { Button } from './button'

export const ButtonsStyle = css`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  ${Button} {  /* stylelint-disable-line */
    margin-bottom: 0.5rem;
    &:not(:last-child) {
      margin-right: 0.5rem;
    }
  }
  &:last-child {
    margin-bottom: -0.5rem;
  }
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
  &.has-addons {
    ${Button} { /* stylelint-disable-line */
      &:not(:first-child) {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
      }
      &:not(:last-child) {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        margin-right: -1px;
      }
      &:last-child {
        margin-right: 0;
      }
      &:hover,
      &.is-hovered {
        z-index: 2;
      }
      &:focus,
      &.is-focused,
      &:active,
      &.is-active,
      &.is-selected {
        z-index: 3;
        &:hover {
          z-index: 4;
        }
      }
      &.is-expanded {
        flex-grow: 1;
      }
    }
  }
  &.is-centered {
    justify-content: center;
  }
  &.is-right {
    justify-content: flex-end;
  }
`
export const Buttons = styled.div`${ButtonsStyle}`
