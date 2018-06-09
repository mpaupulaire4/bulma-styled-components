import { css } from 'styled-components'
import { clearFix as ClearFix } from 'polished'
import getVariables from './derived-variables'

function fromTheme (key) {
  return (props) => props.theme[key]
}

export const clearFix = css`
  ${ClearFix()}
`

export function center(width, height = 0) {
  if (height) {
    return css`
      position: absolute;
      left: calc(50% - (${$width} / 2));
      top: calc(50% - (${$height} / 2));
    `
  }
  return css`
    position: absolute;
    left: calc(50% - (${$width} / 2));
    top: calc(50% - (${$width} / 2));
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
        ${props => props.active ? 'transform: translateY(5px) rotate(45deg);' : ''}
      }
      &:nth-child(2) {
        top: calc(50% - 1px);
        ${props => props.active ? 'opacity: 0;' : ''}
      }
      &:nth-child(3) {
        top: calc(50% + 4px);
        ${props => props.active ? 'transform: translateY(-5px) rotate(-45deg);' : ''}
      }
    }
    &:hover {
      background-color: rgba(black, 0.05);
    }
  `
}

export const overflow_touch = css`
  -webkit-overflow-scrolling: touch;
`

const placeholders = [':-moz', ':-webkit-input', '-moz', '-ms-input']

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

export const from = (device) => (...args) => css`
  @media screen and (min-width: ${device}) {
    ${css(...args)}
  }
`

export const untill = (device) => (...args) => css`
  @media screen and (max-width: $device - 1px) {
    ${css(...args)}
  }
`

export const mobile = (...args) => css`
  @media screen and (max-width: ${props => props.theme.tablet} - 1px) {
    ${css(...args)}
  }
`
export const tablet = (...args) => css`
  @media screen and (min-width: ${props => props.theme.tablet}), print {
    ${css(...args)}
  }
`

export const tablet_only = (...args) => css`
  @media screen and (min-width: ${props => props.theme.tablet}) and (max-width: ${props => props.theme.desktop} - 1px) {
    ${css(...args)}
  }
`

export const touch = ({desktop} = getVariables()) => (...args) => css`
  @media screen and (max-width: ${desktop} - 1px) {
    ${css(...args)}
  }
`

export const desktop = ({desktop} = getVariables()) => (...args) => css`
  @media screen and (min-width: ${desktop}) {
    ${css(...args)}
  }
`

export const desktop_only = ({
  desktop,
  widescreen,
  'widescreen-enabled': enabled,
} = getVariables()) => enabled ? (...args) => {
  return css`
    @media screen and (min-width: ${desktop}) and (max-width: ${widescreen} - 1px) {
      ${css(...args)}
    }
  `
} : ''

export const until_widescreen = ({
  widescreen,
  'widescreen-enabled': enabled,
} = getVariables()) => enabled ? (...args) => {
  return css`
    @media screen and (max-width: ${widescreen} - 1px) {
      ${css(...args)}
    }
  `
} : ''

export const widescreen = ({
  desktop,
  widescreen,
  'widescreen-enabled': enabled,
} = getVariables()) => enabled ? (...args) => {
  return css`
    @media screen and (min-width: ${widescreen}) {
      ${css(...args)}
    }
  `
} : ''

export const widescreen_only = ({
  fullhd,
  widescreen,
  'widescreen-enabled': enabled1,
  'fullhd-enabled': enabled2,
} = getVariables()) => enabled1 && enabled2 ? (...args) => {
  return css`
    @media screen and (min-width: ${widescreen}) and (max-width: ${fullhd} - 1px) {
      ${css(...args)}
    }
  `
} : ''

export const until_fullhd = ({
  fullhd,
  'fullhd-enabled': enabled,
} = getVariables()) => enabled ? (...args) => {
  return css`
    @media screen and (max-width: ${fullhd} - 1px) {
      ${css(...args)}
    }
  `
} : ''

export const fullhd = ({
  fullhd,
  'fullhd-enabled': enabled,
} = getVariables()) => enabled ? (...args) => {
  return css`
    @media screen and (min-width: ${fullhd}) {
      ${css(...args)}
    }
  `
} : ''

// Placeholders

export const unselectable = css`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

const arrow = css`
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
`

export const arrow = (color) => css`
  ${arrow}
  border-color: ${color};
`

export const block = css`
  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`

export const delete_ = css`
  ${unselectable}
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: rgba($black, 0.2);
  border: none;
  border-radius: ${props => props.theme[radius-rounded]};
  cursor: pointer;
  pointer-events: auto;
  display: inline-block;
  flex-grow: 0;
  flex-shrink: 0;
  font-size: 0;
  height: 20px;
  max-height: 20px;
  max-width: 20px;
  min-height: 20px;
  min-width: 20px;
  outline: none;
  position: relative;
  vertical-align: top;
  width: 20px;
  &::before,
  &::after {
    background-color: $white;
    content: "";
    display: block;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
    transform-origin: center center;
  }
  &::before {
    height: 2px;
    width: 50%;
  }
  &::after {
    height: 50%;
    width: 2px;
  }
  &:hover,
  &:focus {
    background-color: rgba($black, 0.3);
  }
  &:active {
    background-color: rgba($black, 0.4);
  }
  // Sizes
  &.is-small
    height: 16px;
    max-height: 16px;
    max-width: 16px;
    min-height: 16px;
    min-width: 16px;
    width: 16px;
  &.is-medium
    height: 24px;
    max-height: 24px;
    max-width: 24px;
    min-height: 24px;
    min-width: 24px;
    width: 24px;
  &.is-large
    height: 32px;
    max-height: 32px;
    max-width: 32px;
    min-height: 32px;
    min-width: 32px;
    width: 32px;
`

export function delete
  @extend %delete

%loader
  animation: spinAround 500ms infinite linear;
  border: 2px solid $border;
  border-radius: $radius-rounded;
  border-right-color: transparent;
  border-top-color: transparent;
  content: "";
  display: block;
  height: 1em;
  position: relative;
  width: 1em;

export function loader
  @extend %loader

%overlay
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;

export function overlay($offset: 0);
  @extend %overlay
  @if $offset !export function  0
    bottom: $offset;
    left: $offset;
    right: $offset;
    top: $offset;

