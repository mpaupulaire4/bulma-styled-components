/* stylelint-disable no-descending-specificity */
import styled, { css } from 'styled-components'

export const ButtonsStyle = css`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  &:last-child {
    margin-bottom: -0.5rem;
  }
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
  &.is-centered {
    justify-content: center;
  }
  &.is-right {
    justify-content: flex-end;
  }
`
const Buttons = styled.div`${ButtonsStyle}`

export default Buttons
