import styled from 'styled-components'
import Vars from '../utilities/vars'
import { CheckboxRadioShared } from './Checkbox'

const defaultProps = { theme: Vars.getVariables() }
const RadioPartial = styled.label`
  ${CheckboxRadioShared}
`

export const Radio = styled(RadioPartial)`
  & + ${/* sc-selector */RadioPartial} {
    margin-left: 0.5em;
  }
`
Radio.defaultProps = defaultProps
