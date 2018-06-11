import { injectGlobal } from 'styled-components'
import minireset from './minireset'
import getGeneric from './generic'

export default function applyBase(vars) {
  /* eslint-disable  no-unused-expressions */
  injectGlobal`
    ${minireset}
    ${getGeneric(vars)}
  `
  /* eslint-enable  no-unused-expressions */
  return vars
}
