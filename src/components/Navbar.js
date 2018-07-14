/* stylelint-disable no-descending-specificity, no-duplicate-selectors */
import styled, { css } from 'styled-components'
import { rgba, darken } from 'polished'
import Vars from '../utilities/vars'
import { fromTheme } from '../utilities/functions'
import {
  desktop,
  overflow_touch,
  hamburger,
  arrow,
  touch,
} from '../utilities/mixins'
import { Icon, Container } from '../'

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

const defaultProps = { theme: Vars.getVariables() }

const navbar_fixed = css`
  left: 0;
  position: fixed;
  right: 0;
  z-index: ${fromTheme('navbar-fixed-z')};
`

const itemLinkShared = css`
  color: ${fromTheme('navbar-item-color')};
  display: block;
  line-height: 1.5;
  padding: 0.5rem 0.75rem;
  position: relative;
  ${Icon} {
    &:only-child {
      margin-left: -0.25rem;
      margin-right: -0.25rem;
    }
  }
  ${desktop`
    align-items: center;
    display: flex;
  `}
`
const NavbarLinkPartialStyles = css`
  cursor: pointer;
  &:hover,
  &.is-active {
    background-color: ${fromTheme('navbar-item-hover-background-color')};
    color: ${fromTheme('navbar-item-hover-color')};
  }
  ${desktop`
    &.is-active {
      color: ${fromTheme('navbar-item-active-color')};
    }
    &.is-active:not(:hover) {
      background-color: ${fromTheme('navbar-item-active-background-color')};
    }
  `}
`

const NavbarLink = styled.a`
  ${itemLinkShared}
  ${NavbarLinkPartialStyles}
  &:not(.is-arrowless) {
    padding-right: 2.5em;
    &::after {
      ${({ theme }) => arrow(theme['navbar-dropdown-arrow'])};
      margin-top: -0.375em;
      right: 1.125em;
    }
  }
  ${touch`
    &::after {
      display: none;
    }
  `}
`
NavbarLink.defaultProps = defaultProps

const NavbarDropdown = styled.div`
  font-size: 0.875rem;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  ${desktop`
    background-color: ${fromTheme('navbar-dropdown-background-color')};
    border-bottom-left-radius: ${fromTheme('navbar-dropdown-radius')};
    border-bottom-right-radius: ${fromTheme('navbar-dropdown-radius')};
    border-top: ${fromTheme('navbar-dropdown-border-top')};
    box-shadow: 0 8px 8px ${({ theme }) => rgba(theme['black'], 0.1)};
    display: none;
    font-size: 0.875rem;
    left: 0;
    min-width: 100%;
    position: absolute;
    top: 100%;
    z-index: ${fromTheme('navbar-dropdown-z')};
    &.is-right {
      left: auto;
      right: 0;
    }
  `}
`
NavbarDropdown.defaultProps = defaultProps

const NavbarItem = styled.div`
  display: block;
  flex-grow: 0;
  flex-shrink: 0;
  ${itemLinkShared}
  a& {
    ${NavbarLinkPartialStyles}
  }
  img {
    max-height: ${fromTheme('navbar-item-img-max-height')};
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
    min-height: ${fromTheme('navbar-height')};
    padding-bottom: calc(0.5rem - 1px);
    &:hover {
      background-color: ${fromTheme('navbar-tab-hover-background-color')};
      border-bottom-color: ${fromTheme('navbar-tab-hover-border-bottom-color')};
    }
    &.is-active {
      background-color: ${fromTheme('navbar-tab-active-background-color')};
      border-bottom-color: ${fromTheme('navbar-tab-active-border-bottom-color')};
      border-bottom-style: ${fromTheme('navbar-tab-active-border-bottom-style')};
      border-bottom-width: ${fromTheme('navbar-tab-active-border-bottom-width')};
      color: ${fromTheme('navbar-tab-active-color')};
      padding-bottom: calc(0.5rem - ${fromTheme('navbar-tab-active-border-bottom-width')});
    }
  }
  ${NavbarDropdown} & {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  ${desktop`
    display: flex;
    &.has-dropdown {
      align-items: stretch;
      &:hover,
      &.is-active {
        ${NavbarLink} {
          background-color: ${fromTheme('navbar-item-hover-background-color')};
        }
      }
    }
    &.has-dropdown-up {
      ${NavbarLink}::after {
        transform: rotate(135deg) translate(0.25em, -0.25em);
      }
      ${NavbarDropdown} {
        border-bottom: ${fromTheme('navbar-dropdown-border-top')};
        border-radius: ${fromTheme('navbar-dropdown-radius')} ${fromTheme('navbar-dropdown-radius')} 0 0;
        border-top: none;
        bottom: 100%;
        box-shadow: 0 -8px 8px ${({ theme }) => rgba(theme['black'], 0.1)};
        top: auto;
      }
    }
    &.is-active,
    &.is-hoverable:hover {
      ${NavbarDropdown} {
        display: block;
        ${/* ${Navbar}.is-spaced &, */''}
        &.is-boxed {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0);
        }
      }
    }
    ${NavbarDropdown} & {
      padding: 0.375rem 1rem;
      white-space: nowrap;
    }
    ${NavbarDropdown} a& {
      padding-right: 3rem;
      &:hover {
        background-color: ${fromTheme('navbar-dropdown-item-hover-background-color')};
        color: ${fromTheme('navbar-dropdown-item-hover-color')};
      }
      &.is-active {
        background-color: ${fromTheme('navbar-dropdown-item-active-background-color')};
        color: ${fromTheme('navbar-dropdown-item-active-color')};
      }
    }
  `}
`
NavbarItem.defaultProps = defaultProps

const brandTabsShared = css`
  align-items: stretch;
  display: flex;
  flex-shrink: 0;
  min-height: ${fromTheme('navbar-height')};
  ${touch`
    ${NavbarItem} {
      align-items: center;
      display: flex;
    }
  `}
`
const NavbarBrand = styled.div`
  ${brandTabsShared}
  a${/* sc-custom '.navbar-item' */NavbarItem} {
    &:hover {
      background-color: transparent;
    }
  }
`
NavbarBrand.defaultProps = defaultProps

const navStartEndMenuShared = css`
  ${desktop`
      align-items: stretch;
      display: flex;
  `}
`

const NavbarStart = styled.div`
  ${navStartEndMenuShared}
  ${desktop`
    justify-content: flex-start;
    margin-right: auto;
  `}
`
NavbarStart.defaultProps = defaultProps

const NavbarEnd = styled.div`
  ${navStartEndMenuShared}
  ${desktop`
    justify-content: flex-end;
    margin-left: auto;
  `}
`
NavbarEnd.defaultProps = defaultProps

const NavbarMenu = styled.nav`
  display: none;
  ${touch`
    background-color: ${fromTheme('navbar-background-color')};
    box-shadow: 0 8px 16px ${({ theme }) => rgba(theme['black'], 0.1)};
    padding: 0.5rem 0;
    &.is-active {
      display: block;
    }
  `}
  ${navStartEndMenuShared}
  ${desktop`
    flex-grow: 1;
    flex-shrink: 0;
  `}
`
NavbarMenu.defaultProps = defaultProps

const colorClasses = ({ theme }) => Object.entries(theme['colors']).reduce((acc, [name, [color, color_invert]]) => css`
  ${acc}
  &.is-${name} {
    background-color: ${color};
    color: ${color_invert};
    ${NavbarBrand} {
      & > ${/* sc-selector */NavbarItem},
      ${/* sc-selector */NavbarLink} {
        color: ${color_invert};
      }
      & > a${/* sc-custom '.navbar-item' */NavbarItem},
      ${/* sc-selector */NavbarLink} {
        &:hover,
        &.is-active {
          background-color: ${darken(0.05, color)};
          color: ${color_invert};
        }
      }
      ${NavbarLink} {
        &::after {
          border-color: ${color_invert};
        }
      }
    }
    ${desktop`
      ${NavbarStart},
      ${NavbarEnd} {
        & > ${NavbarItem},
        ${NavbarLink} {
          color: ${color_invert};
        }
        & > a${NavbarItem},
        ${NavbarLink} {
          &:hover,
          &.is-active {
            background-color: ${darken(0.05, color)};
            color: ${color_invert};
          }
        }
        ${NavbarLink} {
          &::after {
            border-color: ${color_invert};
          }
        }
      }
      ${NavbarItem}.has-dropdown:hover ${NavbarLink},
      ${NavbarItem}.has-dropdown.is-active ${NavbarLink} {
        background-color: ${darken(0.05, color)};
        color: ${color_invert};
      }
      ${NavbarDropdown} {
        a${NavbarItem} {
          &.is-active {
            background-color: ${color};
            color: ${color_invert};
          }
        }
      }
    `}
  }
`, '')

export const Navbar = styled.nav`
  background-color: ${fromTheme('navbar-background-color')};
  min-height: ${fromTheme('navbar-height')};
  position: relative;
  z-index: ${fromTheme('navbar-z')};
  ${colorClasses}

  & > ${/* sc-custom '.container' */Container} {
    align-items: stretch;
    display: flex;
    min-height: ${fromTheme('navbar-height')};
    width: 100%;
  }
  &.has-shadow {
    box-shadow: ${fromTheme('navbar-box-shadow-size')} ${fromTheme('navbar-box-shadow-color')};
  }
  &.is-fixed-bottom,
  &.is-fixed-top {
    ${navbar_fixed}
  }
  &.is-fixed-bottom {
    bottom: 0;
    &.has-shadow {
      box-shadow: ${fromTheme('navbar-bottom-box-shadow-size')} ${fromTheme('navbar-box-shadow-color')};
    }
  }
  &.is-fixed-top {
    top: 0;
  }
  ${touch`
    & > ${/* sc-custom '.container' */Container} {
      display: block;
    }
    &.is-fixed-bottom-touch,
    &.is-fixed-top-touch {
      ${navbar_fixed}
    }
    &.is-fixed-bottom-touch {
      bottom: 0;
      &.has-shadow {
        box-shadow: 0 -2px 3px ${({ theme }) => rgba(theme['black'], 0.1)};
      }
    }
    &.is-fixed-top-touch {
      top: 0;
    }
    &.is-fixed-top,
    &.is-fixed-top-touch {
      ${NavbarMenu} {
        ${overflow_touch}
        max-height: calc(100vh - ${fromTheme('navbar-height')});
        overflow: auto;
      }
    }
  `}
  ${navStartEndMenuShared}
  ${desktop`
    min-height: ${fromTheme('navbar-height')};
    &.is-spaced {
      padding: ${({ theme }) => `${theme['navbar-padding-vertical']} ${theme['navbar-padding-horizontal']}`};
      ${NavbarStart},
      ${NavbarEnd} {
        align-items: center;
      }
      a${NavbarItem},
      ${NavbarLink} {
        border-radius: ${fromTheme('radius')};
      }
    }
    &.is-transparent {
      a${NavbarItem},
      ${NavbarLink} {
        &:hover,
        &.is-active {
          background-color: transparent !important;
        }
      }
      ${NavbarItem}.has-dropdown {
        &.is-active,
        &.is-hoverable:hover {
          ${NavbarLink} {
            background-color: transparent !important;
          }
        }
      }
      ${NavbarDropdown} {
        a${NavbarItem} {
          &:hover {
            background-color: ${fromTheme('navbar-dropdown-item-hover-background-color')};
            color: ${fromTheme('navbar-dropdown-item-hover-color')};
          }
          &.is-active {
            background-color: ${fromTheme('navbar-dropdown-item-active-background-color')};
            color: ${fromTheme('navbar-dropdown-item-active-color')};
          }
        }
      }
    }
    & > ${/* sc-custom '.container' */Container},
    ${/* sc-custom '.container' */Container} > & {
      ${NavbarBrand} {
        margin-left: -.75rem;
      }
      ${NavbarMenu} {
        margin-right: -.75rem;
      }
    }
    &.is-fixed-bottom-desktop,
    &.is-fixed-top-desktop {
      ${navbar_fixed}
    }
    &.is-fixed-bottom-desktop {
      bottom: 0;
      &.has-shadow {
        box-shadow: 0 -2px 3px ${({ theme }) => rgba(theme['black'], 0.1)};
      }
    }
    &.is-fixed-top-desktop {
      top: 0;
    }
    &.is-spaced ${NavbarDropdown},
    ${NavbarDropdown}.is-boxed {
      border-radius: ${fromTheme('navbar-dropdown-boxed-radius')};
      border-top: none;
      box-shadow: ${fromTheme('navbar-dropdown-boxed-shadow')};
      display: block;
      opacity: 0;
      pointer-events: none;
      top: calc(100% + (${fromTheme('navbar-dropdown-offset')}));
      transform: translateY(-5px);
      transition-duration: ${fromTheme('speed')};
      transition-property: opacity, transform;
    }
  `}
`
Navbar.defaultProps = defaultProps

const NavbarTabs = styled.div`
  max-width: 100vw;
  overflow-x: auto;
  overflow-y: hidden;
  ${brandTabsShared}
  ${overflow_touch}
`
NavbarTabs.defaultProps = defaultProps

const NavbarBurger = styled.a`
  color: ${fromTheme('navbar-burger-color')};
  ${({ theme }) => hamburger(theme['navbar-height'])};
  margin-left: auto;
  ${desktop`
    display: none;
  `}
`
NavbarBurger.defaultProps = defaultProps

const NavbarContent = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
`
NavbarContent.defaultProps = defaultProps

const NavbarDivider = styled.div`
  background-color: ${fromTheme('navbar-divider-background-color')};
  border: none;
  display: none;
  height: ${fromTheme('navbar-divider-height')};
  margin: 0.5rem 0;
  ${desktop`
    display: block;
  `}
`
NavbarDivider.defaultProps = defaultProps

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
