import styled, { css } from 'styled-components'
import { fromTheme, fromThemeToRGBA } from '../utilities/functions'
import { unselectable } from '../utilities/mixins'

export const DeleteStyle = css`
  ${unselectable}
  appearance: none;
  background-color: ${fromThemeToRGBA('black', 0.2)};
  border: none;
  border-radius: ${fromTheme('radius-rounded')};
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
    background-color: ${fromTheme('white')};
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
    background-color: ${fromThemeToRGBA('black', 0.3)};
  }
  &:active {
    background-color: ${fromThemeToRGBA('black', 0.4)};
  }
  /* Sizes */
  &.is-small {
    height: 16px;
    max-height: 16px;
    max-width: 16px;
    min-height: 16px;
    min-width: 16px;
    width: 16px;
  }
  &.is-medium {
    height: 24px;
    max-height: 24px;
    max-width: 24px;
    min-height: 24px;
    min-width: 24px;
    width: 24px;
  }
  &.is-large {
    height: 32px;
    max-height: 32px;
    max-width: 32px;
    min-height: 32px;
    min-width: 32px;
    width: 32px;
  }
`
export const Delete = styled.button`${DeleteStyle}`
