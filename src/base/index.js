import React from 'react'
import { injectGlobal } from 'emotion'
import Vars from '../utilities/vars'
import minireset from './minireset'
import getGeneric from './generic'
import Helpers from './helper'

const { Provider, Consumer } = React.createContext({
  get theme() {
    return Vars.getVariables({})
  },
})

class BulmaStyledTheme extends React.PureComponent {
  static defaultProps = {
    overrides: {},
  }

  componentWillMount() {
    const vars = Vars.getVariables(this.props.overrides)
    return injectGlobal`
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
          get helpers() {
            return this.theme
          },
        }}
      />
    )
  }
}

export {
  Consumer,
  BulmaStyledTheme,
}
