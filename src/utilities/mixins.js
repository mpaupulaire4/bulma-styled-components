import { css } from 'styled-components'
import { rgba } from 'polished'
import { spinAround } from './animations'
import { fromTheme } from './functions'

export function center(width, height = 0) {
  if (height) {
    return css`
      position: absolute;
      left: calc(50% - (${width} / 2));
      top: calc(50% - (${height} / 2));
    `
  }
  return css`
    position: absolute;
    left: calc(50% - (${width} / 2));
    top: calc(50% - (${width} / 2));
  `
}

export function fa(size, dimensions) {
  return css`
    display: inline-block;
    font-size: ${size};
    height: ${dimensions};
    line-height: ${dimensions};
    text-align: center;
    vertical-align: top;
    width: ${dimensions};
  `
}

export function hamburger(dimensions) {
  return css`
    cursor: pointer;
    display: block;
    height: ${dimensions};
    position: relative;
    width: ${dimensions};
    span {
      background-color: currentColor;
      display: block;
      height: 1px;
      left: calc(50% - 8px);
      position: absolute;
      transform-origin: center;
      transition-duration: ${fromTheme('speed')};
      transition-property: background-color, opacity, transform;
      transition-timing-function: ${fromTheme('easing')};
      width: 16px;
      &:nth-child(1) {
        top: calc(50% - 6px);
        ${props => props.active ? 'transform: translateY(5px) rotate(45deg);' : ''/* eslint-disable-line no-confusing-arrow */}
      }
      &:nth-child(2) {
        top: calc(50% - 1px);
        ${props => props.active ? 'opacity: 0;' : ''/* eslint-disable-line no-confusing-arrow */}
      }
      &:nth-child(3) {
        top: calc(50% + 4px);
        ${props => props.active ? 'transform: translateY(-5px) rotate(-45deg);' : ''/* eslint-disable-line no-confusing-arrow */}
      }
    }
    &:hover {
      background-color: ${rgba('black', 0.05)};
    }
  `
}

export const overflow_touch = css`
  -webkit-overflow-scrolling: touch;
`

export const placeholder = (...args) => {
  const content = css(...args)
  return css`
    &:-moz-placeholder {
      ${content}
    }
    &:-webkit-input-placeholder {
      ${(content)}
    }
    &-moz-placeholder {
      ${content}
    }
    &-ms-input-placeholder {
      ${content}
    }
  `
}

// Responsiveness

export const from = deviceType => (...args) => css`
  @media screen and (min-width: ${deviceType}) {
    ${css(...args)}
  }
`

export const untill = deviceType => (...args) => css`
  @media screen and (max-width: ${deviceType} - 1px) {
    ${css(...args)}
  }
`

export const mobile = (...args) => css`
  @media screen and (max-width: ${fromTheme('tablet')} - 1px) {
    ${css(...args)}
  }
`
export const tablet = (...args) => css`
  @media screen and (min-width: ${fromTheme('tablet')}), print {
    ${css(...args)}
  }
`

export const tablet_only = (...args) => css`
  @media screen and (min-width: ${fromTheme('tablet')}) and (max-width: ${fromTheme('desktop')} - 1px) {
    ${css(...args)}
  }
`

export const touch = (...args) => css`
  @media screen and (max-width: ${fromTheme('desktop')} - 1px) {
    ${css(...args)}
  }
`

export const desktop = (...args) => css`
  @media screen and (min-width: ${fromTheme('desktop')}) {
    ${css(...args)}
  }
`

export const desktop_only = (...args) => css`
  ${(props) => {
    if (props.theme['widescreen-enabled']) {
      return css`
        @media screen and (min-width: ${props.theme['desktop']}) and (max-width: ${props.theme['widescreen']} - 1px) {
          ${css(...args)}
        }
      ` /* eslint-disable-line */
    }
    return ''
  }}
`

export const until_widescreen = (...args) => css`
  ${(props) => {
    if (props.theme['widescreen-enabled']) {
      return css`
        @media screen and (max-width: ${props.theme['widescreen']} - 1px) {
          ${css(...args)}
        }
      ` /* eslint-disable-line */
    }
    return ''
  }}
`

export const widescreen = (...args) => css`
  ${(props) => {
    if (props.theme['widescreen-enabled']) {
      return css`
        @media screen and (min-width: ${props.theme['widescreen']}) {
          ${css(...args)}
        }
      ` /* eslint-disable-line */
    }
    return ''
  }}
`

export const widescreen_only = (...args) => css`
  ${(props) => {
    if (props.theme['fullhd-enabled'] && props.theme['widescreen-enabled']) {
      return css`
        @media screen and (min-width: ${props.theme['widescreen']}) and (max-width: ${props.theme['fullhd']} - 1px) {
          ${css(...args)}
        }
      ` /* eslint-disable-line */
    }
    return ''
  }}
`

export const until_fullhd = (...args) => css`
  ${(props) => {
    if (props.theme['fullhd-enabled']) {
      return css`
        @media screen and (max-width: ${props.theme['fullhd']} - 1px) {
          ${css(...args)}
        }
      ` /* eslint-disable-line */
    }
    return ''
  }}
`

export const fullhd = (...args) => css`
  ${(props) => {
    if (props.theme['fullhd-enabled']) {
      return css`
        @media screen and (min-width: ${props.theme['fullhd']}) {
          ${css(...args)}
        }
      ` /* eslint-disable-line */
    }
    return ''
  }}
`

// Placeholders

export const unselectable = css`
  -webkit-touch-callout: none;
  user-select: none;
`

export const arrow = color => css`
  border: 3px solid transparent;
  border-radius: 2px;
  border-right: 0;
  border-top: 0;
  content: " ";
  display: block;
  height: 0.625em;
  margin-top: -0.4375em;
  pointer-events: none;
  position: absolute;
  top: 50%;
  transform: rotate(-45deg);
  transform-origin: center;
  width: 0.625em;
  border-color: ${color};
`

export const block = css`
  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`

export const loader = css`
  animation: ${spinAround} 500ms infinite linear;
  border: 2px solid ${fromTheme('border')};
  border-radius: ${fromTheme('radius-rounded')};
  border-right-color: transparent;
  border-top-color: transparent;
  content: "";
  display: block;
  height: 1em;
  position: relative;
  width: 1em;
`

export function overlay(offset = 0) {
  let extra = ''
  if (offset) {
    extra = `
      bottom: ${offset};
      left: ${offset};
      right: ${offset};
      top: ${offset};
    ` /* eslint-disable-line */
  }
  return css`
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    ${extra}
  ` /* eslint-disable-line */
}

