import React from 'react'
import Vars from './utilities/vars'
import BulmaStyledTheme from './base'

export * from './elements'
export * from './components'
export * from './layout'
export * from './form'

export { BulmaStyledTheme }


const { Provider, Consumer } = React.createContext(Vars.getVariables())

export {
  Provider as Theme,
  Consumer,
}

