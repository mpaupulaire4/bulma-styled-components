import { injectGlobal } from 'styled-components'
import minireset from './minireset'
import getGeneric from './generic'

export default function applyBase(vars) {
  return injectGlobal`
    ${minireset}
    ${getGeneric(vars)}
  `
}
