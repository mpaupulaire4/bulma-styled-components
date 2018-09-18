/* stylelint-disable no-descending-specificity */
import styled from 'styled-components'

const Tags = styled.div`
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
  &.has-addons {
    /* styles defined in Tag */
  }
  &.is-centered {
    justify-content: center;
  }
  &.is-right {
    justify-content: flex-end;
  }
`
export default Tags
