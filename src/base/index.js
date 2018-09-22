import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { injectGlobal as emotion_injectGlobal } from 'emotion'
import Vars from '../utilities/vars'
import minireset from './minireset'
import getGeneric from './generic'
import Helpers from './helper'

const BulmaStyledContainer = styled.div`
  ${Helpers}
`
const { Provider, Consumer } = React.createContext({
  get theme() {
    return Vars.getVariables()
  },
})

export {
  Provider as Theme,
  Consumer,
}

export class BulmaStyledTheme extends React.PureComponent {
  static defaultProps = {
    overrides: {},
  }

  componentWillMount() {
    this.vars = Vars.getVariables(this.props.overrides)
    return emotion_injectGlobal`
      ${minireset}
      ${getGeneric(this.vars)}
    `
  }

  vars = Vars.getVariables();

  render() {
    const { overrides, ...props } = this.props
    return (
      <ThemeProvider theme={this.vars}>
        <BulmaStyledContainer {...props} />
      </ThemeProvider>
    )
  }
}
