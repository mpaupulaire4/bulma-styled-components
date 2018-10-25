import React from 'react'
import Variables from '../utilities/variables'

const { Provider, Consumer } = React.createContext({
  get theme() {
    return Variables({})
  },
})

export {
  Provider,
  Consumer,
}
