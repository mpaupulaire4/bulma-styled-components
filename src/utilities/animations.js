import { keyframes } from 'styled-components'

export const spinAround = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
`