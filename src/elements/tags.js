/* stylelint-disable no-descending-specificity */
import styled from 'styled-components'
import { Tag } from './'

export const Tags = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  ${Tag} { /* stylelint-disable-line */
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
    ${Tag} { /* stylelint-disable-line */
      margin-right: 0;
      &:not(:first-child) {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
      }
      &:not(:last-child) {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
      }
    }
  }
  &.is-centered {
    justify-content: center;
    ${Tag} { /* stylelint-disable-line */
      margin-right: 0.25rem;
      margin-left: 0.25rem;
    }
  }
  &.is-right {
    justify-content: flex-end;
    ${Tag} { /* stylelint-disable-line */
      &:not(:first-child) {
        margin-left: 0.5rem;
      }
      &:not(:last-child) {
        margin-right: 0;
      }
    }
  }
`
