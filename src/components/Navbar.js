/* stylelint-disable no-descending-specificity, no-duplicate-selectors */
import { css as emotion_css } from 'emotion'
import { rgba, darken } from 'polished'
import Vars from '../utilities/vars'
import { BaseWithConsumer, Base } from '../base/Class'
import {
  desktop,
  overflow_touch,
  hamburger,
  arrow,
  touch,
} from '../utilities/mixins'
import Container from '../layout/Container'
import Icon from '../elements/Icon'

Vars.addDerivedDefault(vars => ({
  'navbar-background-color': vars['white'],
  'navbar-box-shadow-size': '0 2px 0 0',
  'navbar-box-shadow-color': vars['background'],
  'navbar-height': '3.25rem',
  'navbar-padding-vertical': '1rem',
  'navbar-padding-horizontal': '2rem',
  'navbar-z': 30,
  'navbar-fixed-z': 30,

  'navbar-item-color': vars['grey-dark'],
  'navbar-item-hover-color': vars['link'],
  'navbar-item-hover-background-color': vars['white-bis'],
  'navbar-item-active-color': vars['black'],
  'navbar-item-active-background-color': 'transparent',
  'navbar-item-img-max-height': '1.75rem',

  'navbar-burger-color': vars['navbar-item-color'],

  'navbar-tab-hover-background-color': 'transparent',
  'navbar-tab-hover-border-bottom-color': vars['link'],
  'navbar-tab-active-color': vars['link'],
  'navbar-tab-active-background-color': 'transparent',
  'navbar-tab-active-border-bottom-color': vars['link'],
  'navbar-tab-active-border-bottom-style': 'solid',
  'navbar-tab-active-border-bottom-width': '3px',

  'navbar-dropdown-background-color': vars['white'],
  'navbar-dropdown-border-top': `2px solid ${vars['border']}`,
  'navbar-dropdown-offset': '-4px',
  'navbar-dropdown-arrow': vars['link'],
  'navbar-dropdown-radius': vars['radius-large'],
  'navbar-dropdown-z': 20,

  'navbar-dropdown-boxed-radius': vars['radius-large'],
  'navbar-dropdown-boxed-shadow': `0 8px 8px ${rgba(vars['black'], 0.1)}, 0 0 0 1px ${rgba(vars['black'], 0.1)}`,

  'navbar-dropdown-item-hover-color': vars['black'],
  'navbar-dropdown-item-hover-background-color': vars['background'],
  'navbar-dropdown-item-active-color': vars['link'],
  'navbar-dropdown-item-active-background-color': vars['background'],

  'navbar-divider-background-color': vars['background'],
  'navbar-divider-height': '2px',

  'navbar-bottom-box-shadow-size': '0 -2px 0 0',
}))


const navbar_fixed = theme => emotion_css`
  left: 0;
  position: fixed;
  right: 0;
  z-index: ${theme['navbar-fixed-z']};
`

const itemLinkShared = theme => emotion_css`
  color: ${theme['navbar-item-color']};
  display: block;
  line-height: 1.5;
  padding: 0.5rem 0.75rem;
  position: relative;
  .${Icon.name} {
    &:only-child {
      margin-left: -0.25rem;
      margin-right: -0.25rem;
    }
  }
  ${desktop(theme)`
    align-items: center;
    display: flex;
  `}
`
const NavbarLinkPartialStyles = theme => emotion_css`
  cursor: pointer;
  &:hover,
  &.is-active {
    background-color: ${theme['navbar-item-hover-background-color']};
    color: ${theme['navbar-item-hover-color']};
  }
  ${desktop(theme)`
    &.is-active {
      color: ${theme['navbar-item-active-color']};
    }
    &.is-active:not(:hover) {
      background-color: ${theme['navbar-item-active-background-color']};
    }
  `}
`

export class NavbarLink extends BaseWithConsumer {
  static defaultProps = {
    as: 'a',
  }

  static Style = theme => emotion_css`
    ${itemLinkShared(theme)}
    ${NavbarLinkPartialStyles(theme)}
    &:not(.is-arrowless) {
      padding-right: 2.5em;
      &::after {
        ${arrow(theme['navbar-dropdown-arrow'])};
        margin-top: -0.375em;
        right: 1.125em;
      }
    }
    ${touch(theme)`
      &::after {
        display: none;
      }
    `}
  `
}


export class NavbarDropdown extends BaseWithConsumer {
  static defaultProps = {
    as: 'div',
  }

  static Style = theme => emotion_css`
    font-size: 0.875rem;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    ${desktop(theme)`
      background-color: ${theme['navbar-dropdown-background-color']};
      border-bottom-left-radius: ${theme['navbar-dropdown-radius']};
      border-bottom-right-radius: ${theme['navbar-dropdown-radius']};
      border-top: ${theme['navbar-dropdown-border-top']};
      box-shadow: 0 8px 8px ${rgba(theme['black'], 0.1)};
      display: none;
      font-size: 0.875rem;
      left: 0;
      min-width: 100%;
      position: absolute;
      top: 100%;
      z-index: ${theme['navbar-dropdown-z']};
      &.is-right {
        left: auto;
        right: 0;
      }
    `}
  `
}


export class NavbarItem extends BaseWithConsumer {
  static defaultProps = {
    as: 'div',
  }

  static Style = (theme, { as }) => emotion_css`
    display: block;
    flex-grow: 0;
    flex-shrink: 0;
    ${itemLinkShared(theme)}
    ${as === 'a' ? NavbarLinkPartialStyles(theme) : ''}
    img {
      max-height: ${theme['navbar-item-img-max-height']};
    }
    &.has-dropdown {
      padding: 0;
    }
    &.is-expanded {
      flex-grow: 1;
      flex-shrink: 1;
    }
    &.is-tab {
      border-bottom: 1px solid transparent;
      min-height: ${theme['navbar-height']};
      padding-bottom: calc(0.5rem - 1px);
      &:hover {
        background-color: ${theme['navbar-tab-hover-background-color']};
        border-bottom-color: ${theme['navbar-tab-hover-border-bottom-color']};
      }
      &.is-active {
        background-color: ${theme['navbar-tab-active-background-color']};
        border-bottom-color: ${theme['navbar-tab-active-border-bottom-color']};
        border-bottom-style: ${theme['navbar-tab-active-border-bottom-style']};
        border-bottom-width: ${theme['navbar-tab-active-border-bottom-width']};
        color: ${theme['navbar-tab-active-color']};
        padding-bottom: calc(0.5rem - ${theme['navbar-tab-active-border-bottom-width']});
      }
    }
    .${NavbarDropdown.name} & {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
    ${desktop(theme)`
      display: flex;
      &.has-dropdown {
        align-items: stretch;
        &:hover,
        &.is-active {
          .${NavbarLink.name} {
            background-color: ${theme['navbar-item-hover-background-color']};
          }
        }
      }
      &.has-dropdown-up {
        .${NavbarLink.name}::after {
          transform: rotate(135deg) translate(0.25em, -0.25em);
        }
        .${NavbarDropdown.name} {
          border-bottom: ${theme['navbar-dropdown-border-top']};
          border-radius: ${theme['navbar-dropdown-radius']} ${theme['navbar-dropdown-radius']} 0 0;
          border-top: none;
          bottom: 100%;
          box-shadow: 0 -8px 8px ${rgba(theme['black'], 0.1)};
          top: auto;
        }
      }
      &.is-active,
      &.is-hoverable:hover {
        .${NavbarDropdown.name} {
          display: block;
          ${/* ${Navbar}.is-spaced &, */''}
          &.is-boxed {
            opacity: 1;
            pointer-events: auto;
            transform: translateY(0);
          }
        }
      }
      .${NavbarDropdown.name} & {
        padding: 0.375rem 1rem;
        white-space: nowrap;
      }
      .${NavbarDropdown.name} a& {
        padding-right: 3rem;
        &:hover {
          background-color: ${theme['navbar-dropdown-item-hover-background-color']};
          color: ${theme['navbar-dropdown-item-hover-color']};
        }
        &.is-active {
          background-color: ${theme['navbar-dropdown-item-active-background-color']};
          color: ${theme['navbar-dropdown-item-active-color']};
        }
      }
    `}
  `
}


const brandTabsShared = theme => emotion_css`
  align-items: stretch;
  display: flex;
  flex-shrink: 0;
  min-height: ${theme['navbar-height']};
  ${touch(theme)`
    .${NavbarItem.name} {
      align-items: center;
      display: flex;
    }
  `}
`
export class NavbarBrand extends BaseWithConsumer {
  static defaultProps = {
    as: 'div',
  }

  static Style = theme => emotion_css`
    ${brandTabsShared(theme)}
    a.${/* sc-custom '.navbar-item' */NavbarItem.name} {
      &:hover {
        background-color: transparent;
      }
    }
  `
}


const navStartEndMenuShared = theme => emotion_css`
  ${desktop(theme)`
      align-items: stretch;
      display: flex;
  `}
`

export class NavbarStart extends BaseWithConsumer {
  static defaultProps = {
    as: 'div',
  }

  static Style = theme => emotion_css`
    ${navStartEndMenuShared(theme)}
    ${desktop(theme)`
      justify-content: flex-start;
      margin-right: auto;
    `}
  `
}


export class NavbarEnd extends BaseWithConsumer {
  static defaultProps = {
    as: 'div',
  }

  static Style = theme => emotion_css`
    ${navStartEndMenuShared(theme)}
    ${desktop(theme)`
      justify-content: flex-end;
      margin-left: auto;
    `}
  `
}


export class NavbarMenu extends BaseWithConsumer {
  static defaultProps = {
    as: 'nav',
  }

  static Style = theme => emotion_css`
    display: none;
    ${touch(theme)`
      background-color: ${theme['navbar-background-color']};
      box-shadow: 0 8px 16px ${rgba(theme['black'], 0.1)};
      padding: 0.5rem 0;
      &.is-active {
        display: block;
      }
    `}
    ${navStartEndMenuShared(theme)}
    ${desktop(theme)`
      flex-grow: 1;
      flex-shrink: 0;
    `}
  `
}


const colorClasses = theme => Object.entries(theme['colors']).reduce((acc, [name, [color, color_invert]]) => emotion_css`
  ${acc}
  &.is-${name} {
    background-color: ${color};
    color: ${color_invert};
    .${NavbarBrand.name} {
      & > .${/* sc-selector */NavbarItem.name},
      .${/* sc-selector */NavbarLink.name} {
        color: ${color_invert};
      }
      & > a.${/* sc-custom '.navbar-item' */NavbarItem.name},
      .${/* sc-selector */NavbarLink.name} {
        &:hover,
        &.is-active {
          background-color: ${darken(0.05, color)};
          color: ${color_invert};
        }
      }
      .${NavbarLink.name} {
        &::after {
          border-color: ${color_invert};
        }
      }
    }
    ${desktop(theme)`
      .${NavbarStart.name},
      .${NavbarEnd.name} {
        & > .${NavbarItem.name},
        .${NavbarLink.name} {
          color: ${color_invert};
        }
        & > a.${NavbarItem.name},
        .${NavbarLink.name} {
          &:hover,
          &.is-active {
            background-color: ${darken(0.05, color)};
            color: ${color_invert};
          }
        }
        .${NavbarLink.name} {
          &::after {
            border-color: ${color_invert};
          }
        }
      }
      .${NavbarItem.name}.has-dropdown:hover .${NavbarLink.name},
      .${NavbarItem.name}.has-dropdown.is-active .${NavbarLink.name} {
        background-color: ${darken(0.05, color)};
        color: ${color_invert};
      }
      .${NavbarDropdown.name} {
        a.${NavbarItem.name} {
          &.is-active {
            background-color: ${color};
            color: ${color_invert};
          }
        }
      }
    `}
  }
`, '')

export default class Navbar extends BaseWithConsumer {
  static defaultProps = {
    as: 'nav',
  }

  static Style = theme => emotion_css`
    background-color: ${theme['navbar-background-color']};
    min-height: ${theme['navbar-height']};
    position: relative;
    z-index: ${theme['navbar-z']};
    ${colorClasses(theme)}

    & > .${/* sc-custom '.container' */Container.name} {
      align-items: stretch;
      display: flex;
      min-height: ${theme['navbar-height']};
      width: 100%;
    }
    &.has-shadow {
      box-shadow: ${theme['navbar-box-shadow-size']} ${theme['navbar-box-shadow-color']};
    }
    &.is-fixed-bottom,
    &.is-fixed-top {
      ${navbar_fixed(theme)}
    }
    &.is-fixed-bottom {
      bottom: 0;
      &.has-shadow {
        box-shadow: ${theme['navbar-bottom-box-shadow-size']} ${theme['navbar-box-shadow-color']};
      }
    }
    &.is-fixed-top {
      top: 0;
    }
    ${touch(theme)`
      & > .${/* sc-custom '.container' */Container.name} {
        display: block;
      }
      &.is-fixed-bottom-touch,
      &.is-fixed-top-touch {
        ${navbar_fixed(theme)}
      }
      &.is-fixed-bottom-touch {
        bottom: 0;
        &.has-shadow {
          box-shadow: 0 -2px 3px ${rgba(theme['black'], 0.1)};
        }
      }
      &.is-fixed-top-touch {
        top: 0;
      }
      &.is-fixed-top,
      &.is-fixed-top-touch {
        .${NavbarMenu.name} {
          ${overflow_touch}
          max-height: calc(100vh - ${theme['navbar-height']});
          overflow: auto;
        }
      }
    `}
    ${navStartEndMenuShared(theme)}
    ${desktop(theme)`
      min-height: ${theme['navbar-height']};
      &.is-spaced {
        padding: ${theme['navbar-padding-vertical']} ${theme['navbar-padding-horizontal']};
        .${NavbarStart.name},
        .${NavbarEnd.name} {
          align-items: center;
        }
        a.${NavbarItem.name},
        .${NavbarLink.name} {
          border-radius: ${theme['radius']};
        }
      }
      &.is-transparent {
        a.${NavbarItem.name},
        .${NavbarLink.name} {
          &:hover,
          &.is-active {
            background-color: transparent !important;
          }
        }
        .${NavbarItem.name}.has-dropdown {
          &.is-active,
          &.is-hoverable:hover {
            .${NavbarLink.name} {
              background-color: transparent !important;
            }
          }
        }
        .${NavbarDropdown.name} {
          a.${NavbarItem.name} {
            &:hover {
              background-color: ${theme['navbar-dropdown-item-hover-background-color']};
              color: ${theme['navbar-dropdown-item-hover-color']};
            }
            &.is-active {
              background-color: ${theme['navbar-dropdown-item-active-background-color']};
              color: ${theme['navbar-dropdown-item-active-color']};
            }
          }
        }
      }
      & > .${/* sc-custom '.container' */Container.name},
      .${/* sc-custom '.container' */Container.name} > & {
        .${NavbarBrand.name} {
          margin-left: -.75rem;
        }
        .${NavbarMenu.name} {
          margin-right: -.75rem;
        }
      }
      &.is-fixed-bottom-desktop,
      &.is-fixed-top-desktop {
        ${navbar_fixed(theme)}
      }
      &.is-fixed-bottom-desktop {
        bottom: 0;
        &.has-shadow {
          box-shadow: 0 -2px 3px ${rgba(theme['black'], 0.1)};
        }
      }
      &.is-fixed-top-desktop {
        top: 0;
      }
      &.is-spaced .${NavbarDropdown.name},
      .${NavbarDropdown.name}.is-boxed {
        border-radius: ${theme['navbar-dropdown-boxed-radius']};
        border-top: none;
        box-shadow: ${theme['navbar-dropdown-boxed-shadow']};
        display: block;
        opacity: 0;
        pointer-events: none;
        top: calc(100% + (${theme['navbar-dropdown-offset']}));
        transform: translateY(-5px);
        transition-duration: ${theme['speed']};
        transition-property: opacity, transform;
      }
    `}
  `
}


export class NavbarTabs extends BaseWithConsumer {
  static defaultProps = {
    as: 'div',
  }

  static Style = theme => emotion_css`
    max-width: 100vw;
    overflow-x: auto;
    overflow-y: hidden;
    ${brandTabsShared(theme)}
    ${overflow_touch}
  `
}


export class NavbarBurger extends BaseWithConsumer {
  static defaultProps = {
    as: 'a',
  }

  static Style = (theme, props) => emotion_css`
    color: ${theme['navbar-burger-color']};
    ${hamburger(theme['navbar-height'], theme, props)};
    margin-left: auto;
    ${desktop(theme)`
      display: none;
    `}
  `
}


export class NavbarContent extends Base {
  static defaultProps = {
    as: 'div',
  }

  static Style = () => emotion_css`
    flex-grow: 1;
    flex-shrink: 1;
  `
}


export class NavbarDivider extends BaseWithConsumer {
  static defaultProps = {
    as: 'div',
  }

  static Style = theme => emotion_css`
    background-color: ${theme['navbar-divider-background-color']};
    border: none;
    display: none;
    height: ${theme['navbar-divider-height']};
    margin: 0.5rem 0;
    ${desktop(theme)`
      display: block;
    `}
  `
}


Navbar.Link = NavbarLink
Navbar.Item = NavbarItem
Navbar.Dropdown = NavbarDropdown
Navbar.Brand = NavbarBrand
Navbar.Start = NavbarStart
Navbar.End = NavbarEnd
Navbar.Menu = NavbarMenu
Navbar.Tabs = NavbarTabs
Navbar.Burger = NavbarBurger
Navbar.Content = NavbarContent
Navbar.Divider = NavbarDivider
