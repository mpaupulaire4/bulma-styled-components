import { PureComponent, HTMLProps, Component } from 'react'
import { Consumer } from './base/Context';
import { BulmaStyledTheme } from './base';

declare module 'bulma-styled-components' {
  type Props<T> = HTMLProps<T> & { as?: string | Component }

  // export class BulmaStyledTheme extends PureComponent<{
  //   overrides?: any
  // }> {}

  export {
    Consumer,
    BulmaStyledTheme
  }

  export class Box extends PureComponent<Props<HTMLElement>> {}
  export class Button extends PureComponent<Props<HTMLElement>> {}
  export class Buttons extends PureComponent<Props<HTMLElement>> {}
  export class Content extends PureComponent<Props<HTMLElement>> {}
  export class Delete extends PureComponent<Props<HTMLElement>> {}
  export class Icon extends PureComponent<Props<HTMLElement>> {}
  export class Image extends PureComponent<Props<HTMLElement>> {}
  export class Notification extends PureComponent<Props<HTMLElement>> {}
  export class Progress extends PureComponent<Props<HTMLElement>> {}
  export class Table extends PureComponent<Props<HTMLElement>> {}
  export class Tag extends PureComponent<Props<HTMLElement>> {}
  export class Tags extends PureComponent<Props<HTMLElement>> {}
  export class Title extends PureComponent<Props<HTMLElement>> {}
  export class Subtitle extends PureComponent<Props<HTMLElement>> {}
  export class Block extends PureComponent<Props<HTMLElement>> {}
  export class Heading extends PureComponent<Props<HTMLElement>> {}
  export class Highlight extends PureComponent<Props<HTMLElement>> {}
  export class Loader extends PureComponent<Props<HTMLElement>> {}
  export class Num extends PureComponent<Props<HTMLElement>> {}


  export class Columns extends PureComponent<Props<HTMLElement>> {}
  export class Column extends PureComponent<Props<HTMLElement>> {}
  export class Container extends PureComponent<Props<HTMLElement>> {}
  export class Footer extends PureComponent<Props<HTMLElement>> {}
  export class Hero extends PureComponent<Props<HTMLElement>> {
    static Body = class Body extends PureComponent<Props<HTMLElement>> {}
    static Head = class Head extends PureComponent<Props<HTMLElement>> {}
    static Foot = class Foot extends PureComponent<Props<HTMLElement>> {}
    static Buttons = class Buttons extends PureComponent<Props<HTMLElement>> {}
    static Video = class Video extends PureComponent<Props<HTMLElement>> {}

  }
  export class Level extends PureComponent<Props<HTMLElement>> {
    static Left = class Left extends PureComponent<Props<HTMLElement>> {}
    static Right = class Right extends PureComponent<Props<HTMLElement>> {}
    static Item = class Item extends PureComponent<Props<HTMLElement>> {}
  }
  export class Media extends PureComponent<Props<HTMLElement>> {
    static Left = class Left extends PureComponent<Props<HTMLElement>> {}
    static Right = class Right extends PureComponent<Props<HTMLElement>> {}
    static Content = class Content extends PureComponent<Props<HTMLElement>> {}
  }
  export class Section extends PureComponent<Props<HTMLElement>> {}
  export class Tile extends PureComponent<Props<HTMLElement>> {}

  export class Checkbox extends PureComponent<Props<HTMLElement>> {}
  export class Control extends PureComponent<Props<HTMLElement>> {}
  export class Field extends PureComponent<Props<HTMLElement>> {
    static Label = class Label extends PureComponent<Props<HTMLElement>> {}
    static Body = class Body extends PureComponent<Props<HTMLElement>> {}
  }
  export class File extends PureComponent<Props<HTMLElement>> {
    static Label = class Label extends PureComponent<Props<HTMLElement>> {}
    static Input = class Input extends PureComponent<Props<HTMLElement>> {}
    static CTA = class CTA extends PureComponent<Props<HTMLElement>> {}
    static Name = class Name extends PureComponent<Props<HTMLElement>> {}
    static Icon = class Icon extends PureComponent<Props<HTMLElement>> {}
  }
  export class Help extends PureComponent<Props<HTMLElement>> {}
  export class Input extends PureComponent<Props<HTMLElement>> {}
  export class Label extends PureComponent<Props<HTMLElement>> {}
  export class Radio extends PureComponent<Props<HTMLElement>> {}
  export class Select extends PureComponent<Props<HTMLElement>> {}
  export class Textarea extends PureComponent<Props<HTMLElement>> {}



  export class Breadcrumb extends PureComponent<Props<HTMLElement>> {}
  export class Card extends PureComponent<Props<HTMLElement>> {
    static Header = class extends PureComponent<Props<HTMLElement>> {
      static Title = class extends PureComponent<Props<HTMLElement>> {}
      static Icon = class extends PureComponent<Props<HTMLElement>> {}
    }
    static Image = class extends PureComponent<Props<HTMLElement>> {}
    static Content = class extends PureComponent<Props<HTMLElement>> {}
    static Footer = class extends PureComponent<Props<HTMLElement>> {
      static Item = class extends PureComponent<Props<HTMLElement>> {}
    }
  }
  export class Dropdown extends PureComponent<Props<HTMLElement>> {
    static Menu = class extends PureComponent<Props<HTMLElement>> {}
    static Content = class extends PureComponent<Props<HTMLElement>> {}
    static Item = class extends PureComponent<Props<HTMLElement>> {}
    static Divider = class extends PureComponent<Props<HTMLElement>> {}
  }
  export class Menu extends PureComponent<Props<HTMLElement>> {
    static List = class extends PureComponent<Props<HTMLElement>> {}
    static Label = class extends PureComponent<Props<HTMLElement>> {}
  }
  export class Message extends PureComponent<Props<HTMLElement>> {
    static Header = class extends PureComponent<Props<HTMLElement>> {}
    static Body = class extends PureComponent<Props<HTMLElement>> {}
  }
  export class Modal extends PureComponent<Props<HTMLElement>> {
    static Background = class extends PureComponent<Props<HTMLElement>> {}
    static Content = class extends PureComponent<Props<HTMLElement>> {}
    static Close = class extends PureComponent<Props<HTMLElement>> {}
    static Card = class extends PureComponent<Props<HTMLElement>> {
      static Head = class extends PureComponent<Props<HTMLElement>> {}
      static Title = class extends PureComponent<Props<HTMLElement>> {}
    }
    static Foot = class extends PureComponent<Props<HTMLElement>> {}
    static Body = class extends PureComponent<Props<HTMLElement>> {}

  }
  export class Navbar extends PureComponent<Props<HTMLElement>> {
    static Link = class extends PureComponent<Props<HTMLElement>> {}
    static Item = class extends PureComponent<Props<HTMLElement>> {}
    static Dropdown = class extends PureComponent<Props<HTMLElement>> {}
    static Brand = class extends PureComponent<Props<HTMLElement>> {}
    static Start = class extends PureComponent<Props<HTMLElement>> {}
    static End = class extends PureComponent<Props<HTMLElement>> {}
    static Menu = class extends PureComponent<Props<HTMLElement>> {}
    static Tabs = class extends PureComponent<Props<HTMLElement>> {}
    static Burger = class extends PureComponent<Props<HTMLElement>> {}
    static Content = class extends PureComponent<Props<HTMLElement>> {}
    static Divider = class extends PureComponent<Props<HTMLElement>> {}
  }
  export class Pagination extends PureComponent<Props<HTMLElement>> {
    static Previous = class extends PureComponent<Props<HTMLElement>> {}
    static Next = class extends PureComponent<Props<HTMLElement>> {}
    static Link = class extends PureComponent<Props<HTMLElement>> {}
    static Ellipsis = class extends PureComponent<Props<HTMLElement>> {}
    static List = class extends PureComponent<Props<HTMLElement>> {}
  }
  export class Panel extends PureComponent<Props<HTMLElement>> {
    static Heading = class extends PureComponent<Props<HTMLElement>> {}
    static Tabs = class extends PureComponent<Props<HTMLElement>> {}
    static Lisr = class extends PureComponent<Props<HTMLElement>> {}
    static Icon = class extends PureComponent<Props<HTMLElement>> {}
    static Block = class extends PureComponent<Props<HTMLElement>> {}
  }
  export class Tabs extends PureComponent<Props<HTMLElement>> {}
}