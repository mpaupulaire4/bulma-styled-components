import React from 'react'
import { injectGlobal } from 'emotion'
import Variables from '../utilities/variables'
import minireset from './minireset'
import getGeneric from './generic'
import Helpers from './helper'
import { Provider } from './Context'

export class BulmaStyledTheme extends React.PureComponent {
  static defaultProps = {
    overrides: {},
  }

  componentWillMount() {
    const vars = Variables(this.props.overrides)
    return injectGlobal`
      ${minireset}
      ${getGeneric(vars)}
      ${Helpers(vars)}
    `
  }

  render() {
    const { overrides, ...props } = this.props
    const theme = Variables(overrides)
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
