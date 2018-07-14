import styled from 'styled-components'
import { InputTextareaShared } from './Input'
import Vars from '../utilities/vars'

export const Textarea = styled.textarea`
  ${InputTextareaShared}
  display: block;
  max-width: 100%;
  min-width: 100%;
  padding: 0.625em;
  resize: vertical;
  &:not([rows]) {
    max-height: 600px;
    min-height: 120px;
  }
  &[rows] {
    height: initial;
  }
  /* Modifiers */
  &.has-fixed-size {
    resize: none;
  }
`
Textarea.defaultProps = { theme: Vars.getVariables() }
