import { PureComponent, HTMLProps, Component } from 'react'

declare module 'bulma-styled-components' {
  type Props<T> = HTMLProps<T> & { as: string | Component }

  export class Box extends PureComponent<Props<HTMLDivElement>> {}
  export class Button extends PureComponent<Props<HTMLDivElement>> {}
  export class Buttons extends PureComponent<Props<HTMLDivElement>> {}
  export class Content extends PureComponent<Props<HTMLDivElement>> {}
  export class Delete extends PureComponent<Props<HTMLDivElement>> {}
  export class Icon extends PureComponent<Props<HTMLDivElement>> {}
  export class Image extends PureComponent<Props<HTMLDivElement>> {}
  export class Notification extends PureComponent<Props<HTMLDivElement>> {}
  export class Progress extends PureComponent<Props<HTMLDivElement>> {}
  export class Table extends PureComponent<Props<HTMLDivElement>> {}
  export class Tag extends PureComponent<Props<HTMLDivElement>> {}
  export class Tags extends PureComponent<Props<HTMLDivElement>> {}
  export class Title extends PureComponent<Props<HTMLDivElement>> {}
  export class Subtitle extends PureComponent<Props<HTMLDivElement>> {}
  export class Block extends PureComponent<Props<HTMLDivElement>> {}
  export class Heading extends PureComponent<Props<HTMLDivElement>> {}
  export class Highlight extends PureComponent<Props<HTMLDivElement>> {}
  export class Loader extends PureComponent<Props<HTMLDivElement>> {}
  export class Num extends PureComponent<Props<HTMLDivElement>> {}

}