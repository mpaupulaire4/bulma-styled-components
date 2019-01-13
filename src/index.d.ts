import { PureComponent, HTMLProps, Component } from 'react'

declare module 'bulma-styled-components' {
  type Props = HTMLProps & { as: string | Component }
  interface Base extends PureComponent<Props> {}

}