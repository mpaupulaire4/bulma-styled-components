/* stylelint-disable no-descending-specificity */
import { css } from 'emotion'
import { rgba, darken, saturate, adjustHue, lighten } from 'polished'
import { touch, overlay, tablet, mobile } from '../utilities/mixins'
import Button from '../elements/Button'
import Tag from '../elements/Tag'
import Title from '../elements/Title'
import Subtitle from '../elements/Subtitle'
import Tabs from '../components/Tabs'
import { DropdownItem } from '../components/Dropdown'
import Navbar, { NavbarItem, NavbarLink, NavbarMenu } from '../components/Navbar'
import Container from './Container'
import { Base, BaseWithConsumer } from '../base/Class'

const heroColorClasses = theme => Object.entries(theme['colors']).reduce((acc, [name, [color, color_invert]]) => {
  const gradient_top_left = darken(0.1, saturate(0.1, adjustHue(350, color)))
  const gradient_bottom_right = lighten(0.05, saturate(0.05, adjustHue(10, color)))
  return css`
    ${acc}
    &.is-${/* sc-custom 'blue' */name} {
      background-color: ${color};
      color: ${color_invert};
      a:not(.${/* sc-custom '.button' */Button.name}):not(.${/* sc-custom '.dropdown-item' */DropdownItem.name}):not(.${/* sc-custom '.tag' */Tag.name}),
      strong {
        color: inherit;
      }
      .${/* sc-custom '.title' */Title.name} {
        color: ${color_invert};
      }
      .${/* sc-custom '.subtitle' */Subtitle.name} {
        color: ${rgba(color_invert, 0.9)};
        a:not(.${/* sc-selector */Button.name}),
        strong {
          color: ${color_invert};
        }
      }
      .${/* sc-custom '.navbar-menu' */NavbarMenu.name} {
        ${touch(theme)`
          background-color: ${color};
        `}
      }
      .${/* sc-custom '.navbar-item' */NavbarItem.name},
      .${/* sc-custom '.navbar-link' */NavbarLink.name} {
        color: ${rgba(color_invert, 0.7)};
      }
      a.${/* sc-custom '.navbar-link' */NavbarItem.name},
      .${/* sc-selector */NavbarLink.name}:hover,
      .${/* sc-selector */NavbarLink.name}.is-active {
        background-color: ${darken(0.05, color)};
        color: ${color_invert};
      }
      .${/* sc-custom '.tabs' */Tabs.name} {
        a {
          color: ${color_invert};
          opacity: 0.9;
        }
        a:hover {
          opacity: 1;
        }
        li.is-active a {
          opacity: 1;
        }
      }
      .${/* sc-custom '.tabs' */Tabs.name}.is-boxed,
      .${/* sc-custom '.tabs' */Tabs.name}.is-toggle {
        a {
          color: ${color_invert};
        }
        a:hover {
          background-color: ${rgba(theme['black'], 0.1)};
        }
        li.is-active a,
        li.is-active a:hover {
          background-color: ${color_invert};
          border-color: ${color_invert};
          color: ${color};
        }
      }
      /* Modifiers */
      &.is-bold {
        background-image: linear-gradient(141deg, ${gradient_top_left} 0%, ${color} 71%, ${gradient_bottom_right} 100%);
        ${mobile(theme)`
          .${NavbarMenu.name} {
            background-image: linear-gradient(141deg, ${gradient_top_left} 0%, ${color} 71%, ${gradient_bottom_right} 100%);
          }
        `}
      }
      /* Responsiveness */
      /* +mobile
        .nav-toggle
          span
            background-color: $color-invert
          &:hover
            background-color: rgba($black, 0.1)
          &.is-active
            span
              background-color: $color-invert
        .nav-menu
          .nav-item
            border-top-color: rgba($color-invert, 0.2) */
    }
  `
}, '')

class HeroBody extends Base {
  static displayName ='HeroBody'
  static defaultProps = {
    as: 'div',
  }

  static Style = () => css`
    flex-grow: 1;
    flex-shrink: 0;
    padding: 3rem 1.5rem;
  `
}

// Main container
export default class Hero extends BaseWithConsumer {
  static displayName ='Hero'
  static defaultProps = {
    as: 'section',
  }

  static Style = theme => css`
    align-items: stretch;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .${/* sc-custom '.navbar' */Navbar.name} {
      background: none;
    }
    .${/* sc-custom '.tabs' */Tabs.name} {
      ul {
        border-bottom: none;
      }
    }
    /* Colors */
    ${heroColorClasses(theme)}

    /* Sizes */
    &.is-small {
      .${/* sc-selector */HeroBody.name} {
        padding-bottom: 1.5rem;
        padding-top: 1.5rem;
      }
    }
    &.is-medium {
      ${tablet(theme)`
        .${HeroBody.name} {
          padding-bottom: 9rem;
          padding-top: 9rem;
        }
      `}
    }
    &.is-large {
      ${tablet(theme)`
        .${HeroBody.name} {
          padding-bottom: 18rem;
          padding-top: 18rem;
        }
      `}
    }
    &.is-halfheight,
    &.is-fullheight {
      .${HeroBody.name} {
        align-items: center;
        display: flex;
      }
      .${HeroBody.name} > .${Container.name} {
        flex-grow: 1;
        flex-shrink: 1;
      }
    }
    &.is-halfheight {
      min-height: 50vh;
    }
    &.is-fullheight {
      min-height: 100vh;
    }
  `
}
// Components
class HeroVideo extends BaseWithConsumer {
  static displayName ='HeroVideo'
  static defaultProps = {
    as: 'div',
  }

  static Style = theme => css`
    ${overlay()}
    overflow: hidden;
    video {
      left: 50%;
      min-height: 100%;
      min-width: 100%;
      position: absolute;
      top: 50%;
      transform: translate3d(-50%, -50%, 0);
    }
    /* Modifiers */
    &.is-transparent {
      opacity: 0.3;
    }
    /* Responsiveness */
    ${mobile(theme)`
      display: none;
    `}
  `
}
Hero.Video = HeroVideo

class HeroButtons extends BaseWithConsumer {
  static displayName ='HeroButtons'
  static defaultProps = {
    as: 'div',
  }

  static Style = theme => css`
    margin-top: 1.5rem;
    /* Responsiveness */
    ${mobile(theme)`
      .${Button.name} {
        display: flex;
      }
      .${Button.name}:not(:last-child) {
        margin-bottom: 0.75rem;
      }
    `}
    ${tablet(theme)`
      display: flex;
      justify-content: center;
      .${Button.name}:not(:last-child) {
        margin-right: 1.5rem;
      }
    `}
  `
}

Hero.Buttons = HeroButtons

// Containers
class HeroHead extends Base {
  static displayName ='HeroHead'
  static defaultProps = {
    as: 'div',
  }

  static Style = () => css`
    flex-grow: 0;
    flex-shrink: 0;
  `
}
Hero.Head = HeroHead

class HeroFoot extends Base {
  static displayName ='HeroFoot'
  static defaultProps = {
    as: 'div',
  }

  static Style = () => css`
    flex-grow: 0;
    flex-shrink: 0;
  `
}
Hero.Foot = HeroFoot
Hero.Body = HeroBody

