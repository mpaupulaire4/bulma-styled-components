import { css } from 'emotion'
import { rgba } from 'polished'
import { spinAround } from './animations'

export function center(width, height = false) {
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

export function hamburger(dimensions, theme, { active }) {
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
      transition-duration: ${theme['speed']};
      transition-property: background-color, opacity, transform;
      transition-timing-function: ${theme['easing']};
      width: 16px;
      &:nth-child(1) {
        top: calc(50% - 6px);
        ${active ? 'transform: translateY(5px) rotate(45deg);' : ''/* eslint-disable-line no-confusing-arrow */}
      }
      &:nth-child(2) {
        top: calc(50% - 1px);
        ${active ? 'opacity: 0;' : ''/* eslint-disable-line no-confusing-arrow */}
      }
      &:nth-child(3) {
        top: calc(50% + 4px);
        ${active ? 'transform: translateY(-5px) rotate(-45deg);' : ''/* eslint-disable-line no-confusing-arrow */}
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

export const mobile = theme => (...args) => css`
  @media screen and (max-width: ${theme['tablet']} - 1px) {
    ${css(...args)}
  }
`
export const tablet = theme => (...args) => css`
  @media screen and (min-width: ${theme['tablet']}), print {
    ${css(...args)}
  }
`

export const tablet_only = theme => (...args) => css`
  @media screen and (min-width: ${theme['tablet']}) and (max-width: ${theme['desktop']} - 1px) {
    ${css(...args)}
  }
`

export const touch = theme => (...args) => css`
  @media screen and (max-width: ${theme['desktop']} - 1px) {
    ${css(...args)}
  }
`

export const desktop = theme => (...args) => css`
  @media screen and (min-width: ${theme['desktop']}) {
    ${css(...args)}
  }
`

export const desktop_only = theme => (...args) => {
  if (theme['widescreen-enabled']) {
    return css`
      @media screen and (min-width: ${theme['desktop']}) and (max-width: ${theme['widescreen']} - 1px) {
        ${css(...args)}
      }
    `
  }
  return ''
}

export const until_widescreen = theme => (...args) => {
  if (theme['widescreen-enabled']) {
    return css`
      @media screen and (max-width: ${theme['widescreen']} - 1px) {
        ${css(...args)}
      }
    `
  }
  return ''
}

export const widescreen = theme => (...args) => {
  if (theme['widescreen-enabled']) {
    return css`
      @media screen and (min-width: ${theme['widescreen']}) {
        ${css(...args)}
      }
    `
  }
  return ''
}

export const widescreen_only = theme => (...args) => {
  if (theme['fullhd-enabled'] && theme['widescreen-enabled']) {
    return css`
      @media screen and (min-width: ${theme['widescreen']}) and (max-width: ${theme['fullhd']} - 1px) {
        ${css(...args)}
      }
    `
  }
  return ''
}

export const until_fullhd = theme => (...args) => {
  if (theme['fullhd-enabled']) {
    return css`
      @media screen and (max-width: ${theme['fullhd']} - 1px) {
        ${css(...args)}
      }
    `
  }
  return ''
}

export const fullhd = theme => (...args) => {
  if (theme['fullhd-enabled']) {
    return css`
      @media screen and (min-width: ${theme['fullhd']}) {
        ${css(...args)}
      }
    `
  }
  return ''
}

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

export const loader = theme => css`
  animation: ${spinAround} 500ms infinite linear;
  border: 2px solid ${theme['border']};
  border-radius: ${theme['radius-rounded']};
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
    `
  }
  return css`
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    ${extra}
  `
}

