import React from 'react'
import { injectGlobal as emotion_injectGlobal } from 'emotion'
import Vars from '../utilities/vars'
import minireset from './minireset'
import getGeneric from './generic'
import Helpers from './helper'

const { Provider, Consumer } = React.createContext({
  get theme() {
    return Vars.getVariables()
  },
})

export { Consumer }

export class BulmaStyledTheme extends React.PureComponent {
  static defaultProps = {
    overrides: {},
  }

  componentWillMount() {
    const vars = Vars.getVariables(this.props.overrides)
    return emotion_injectGlobal`
      ${minireset}
      ${getGeneric(vars)}
      ${Helpers(vars)}
    `
  }

  render() {
    const { overrides, ...props } = this.props
    const theme = Vars.getVariables(overrides)
    return (
      <Provider
        {...props}
        value={{
          theme,
        }}
      />
    )
  }
}
