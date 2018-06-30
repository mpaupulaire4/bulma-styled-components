import styled, { css } from 'styled-components'
import { rgba, darken, saturate, adjustHue, lighten } from 'polished'
import { touch, overlay, tablet, mobile } from '../utilities/mixins'
import { Button, Tag, Title, Subtitle } from '../elements'

const heroColorClasses = ({ theme }) => Object.entries(theme['colors']).reduce((acc, [name, [color, color_invert]]) => {
  const gradient_top_left = darken(0.1, saturate(0.1, adjustHue(350, color)))
  const gradient_bottom_right = lighten(0.05, saturate(0.05, adjustHue(10, color)))
  return css`
    ${acc}
    &.is-${name} {
      background-color: ${color};
      color: ${color_invert};
      a:not(${Button}):not(.dropdown-item):not(${Tag}),
      strong {
        color: inherit;
      }
      ${Title} {
        color: ${color_invert};
      }
      ${Subtitle} {
        color: ${rgba(color_invert, 0.9)};
        a:not(${Button}),
        strong {
          color: ${color_invert};
        }
      }
      .navbar-menu {
        ${touch`
          background-color: ${color};
        `}
      }
      .navbar-item,
      .navbar-link {
        color: ${rgba(color_invert, 0.7)};
      }
      a.navbar-item,
      .navbar-link {
        &:hover,
        &.is-active {
          background-color: ${darken(0.05, color)};
          color: ${color_invert};
        }
      }
      .tabs {
        a {
          color: ${color_invert};
          opacity: 0.9;
          &:hover {
            opacity: 1;
          }
        }
        li {
          &.is-active a {
            opacity: 1;
          }
        }
        &.is-boxed,
        &.is-toggle {
          a {
            color: ${color_invert};
            &:hover {
              background-color: ${rgba(theme['black'], 0.1)};
            }
          }
          li.is-active a {
            &,
            &:hover {
              background-color: ${color_invert};
              border-color: ${color_invert};
              color: ${color};
            }
          }
        }
      }
      /* Modifiers */
      &.is-bold {
        background-image: linear-gradient(141deg, ${gradient_top_left} 0%, ${color} 71%, ${gradient_bottom_right} 100%);
        ${mobile`
          .navbar-menu {
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

// Main container
export const Hero = styled.section`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .navbar {
    background: none;
  }
  .tabs {
    ul {
      border-bottom: none;
    }
  }
  /* Colors */
  ${heroColorClasses}

  /* Sizes */
  &.is-small {
    .hero-body {
      padding-bottom: 1.5rem;
      padding-top: 1.5rem;
    }
  }
  &.is-medium {
    ${tablet`
      .hero-body {
        padding-bottom: 9rem;
        padding-top: 9rem;
      }
    `}
  }
  &.is-large {
    ${tablet`
      .hero-body {
        padding-bottom: 18rem;
        padding-top: 18rem;
      }
    `}
  }
  &.is-halfheight,
  &.is-fullheight {
    .hero-body {
      align-items: center;
      display: flex;
      & > .container {
        flex-grow: 1;
        flex-shrink: 1;
      }
    }
  }
  &.is-halfheight {
    min-height: 50vh;
  }
  &.is-fullheight {
    min-height: 100vh;
  }
`
// Components
const HeroVideo = styled.div`
  ${overlay}
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
  ${mobile`
    display: none;
  `}
`
Hero.Video = HeroVideo

const HeroButtons = styled.div`
  margin-top: 1.5rem;
  /* Responsiveness */
  ${mobile`
    ${Button} {
      display: flex;
      &:not(:last-child) {
        margin-bottom: 0.75rem;
      }
    }
  `}
  ${tablet`
    display: flex;
    justify-content: center;
    ${Button}:not(:last-child) {
      margin-right: 1.5rem;
    }
  `}
`

Hero.Buttons = HeroButtons

// Containers
const HeroHead = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
`
Hero.Head = HeroHead

const HeroFoot = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
`
Hero.Foot = HeroFoot

const HeroBody = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  padding: 3rem 1.5rem;
`
Hero.Body = HeroBody
