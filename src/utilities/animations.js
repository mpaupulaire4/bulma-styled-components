import { keyframes as emotion_keyframes } from 'emotion'

export const spinAround = emotion_keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
`
