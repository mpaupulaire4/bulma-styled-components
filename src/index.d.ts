import { PureComponent, HTMLProps, Component } from 'react'

declare module 'bulma-styled-components' {
  type Props<T> = HTMLProps<T> & { as: string | Component }

  export class Box extends PureComponent<Props<HTMLDivElement>> {}

}