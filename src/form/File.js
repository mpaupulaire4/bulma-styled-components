/* stylelint-disable no-descending-specificity */
import styled, { css } from 'styled-components'
import { rgba, darken } from 'polished'
import Vars from '../utilities/vars'
import { unselectable } from '../utilities/mixins'
import { control } from '../utilities/controls'
import { fromTheme } from '../utilities/functions'

Vars.addDerivedDefault(vars => ({
  'file-border-color': vars['border'],
  'file-radius': vars['radius'],

  'file-cta-background-color': vars['white-ter'],
  'file-cta-color': vars['grey-dark'],
  'file-cta-hover-color': vars['grey-darker'],
  'file-cta-active-color': vars['grey-darker'],

  'file-name-border-color': vars['border'],
  'file-name-border-style': 'solid',
  'file-name-border-width': '1px 1px 1px 0',
  'file-name-max-width': '16em',
}))

const defaultProps = { theme: Vars.getVariables() }

const CTANameShared = css`
  ${control}
  border-color: ${fromTheme('file-border-color')};
  border-radius: ${fromTheme('file-radius')};
  font-size: 1em;
  padding-left: 1em;
  padding-right: 1em;
  white-space: nowrap;
`

export const FileCTA = styled.span`
  ${CTANameShared}
  background-color: ${fromTheme('file-cta-background-color')};
  color: ${fromTheme('file-cta-color')};
`
FileCTA.defaultProps = defaultProps

export const FileName = styled.span`
  ${CTANameShared}
  border-color: ${fromTheme('file-name-border-color')};
  border-style: ${fromTheme('file-name-border-style')};
  border-width: ${fromTheme('file-name-border-width')};
  display: block;
  max-width: ${fromTheme('file-name-max-width')};
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
`
FileName.defaultProps = defaultProps

export const FileIcon = styled.span`
  align-items: center;
  display: flex;
  height: 1em;
  justify-content: center;
  margin-right: 0.5em;
  width: 1em;
  .fa {
    font-size: 14px;
  }
`
FileIcon.defaultProps = defaultProps

export const FileLabel = styled.label`
  align-items: stretch;
  display: flex;
  cursor: pointer;
  justify-content: flex-start;
  overflow: hidden;
  position: relative;
  &:hover {
    ${/* sc-custom '.CTA' */FileCTA} {
      background-color: ${({ theme }) => darken(0.025, theme['file-cta-background-color'])};
      color: ${fromTheme('file-cta-hover-color')};
    }
    ${/* sc-custom '.Name' */FileName} {
      border-color: ${({ theme }) => darken(0.025, theme['file-name-border-color'])};
    }
  }
  &:active {
    ${/* sc-custom '.CTA' */FileCTA} {
      background-color: ${({ theme }) => darken(0.05, theme['file-cta-background-color'])};
      color: ${fromTheme('file-cta-active-color')};
    }
    ${/* sc-custom '.Name' */FileName} {
      border-color: ${({ theme }) => darken(0.05, theme['file-name-border-color'])};
    }
  }
`
FileLabel.defaultProps = defaultProps

export const FileInput = styled.input.attrs({
  type: 'file',
})`
  height: 0.01em;
  left: 0;
  outline: none;
  position: absolute;
  top: 0;
  width: 0.01em;
`
FileInput.defaultProps = defaultProps

const FileColorClasses = ({ theme }) => Object.entries(theme['colors']).reduce((acc, [name, [color, color_invert]]) => css`
  ${acc}
  &.is-${name} {
    ${/* sc-custom '.CTA' */FileCTA} {
      background-color: ${color};
      border-color: transparent;
      color: ${color_invert};
    }
    &:hover,
    &.is-hovered {
      ${/* sc-custom '.CTA' */FileCTA} {
        background-color: ${darken(0.025, color)};
        border-color: transparent;
        color: ${color_invert};
      }
    }
    &:focus,
    &.is-focused {
      ${/* sc-custom '.CTA' */FileCTA} {
        border-color: transparent;
        box-shadow: 0 0 0.5em ${rgba(color, 0.25)};
        color: ${color_invert};
      }
    }
    &:active,
    &.is-active {
      ${/* sc-custom '.CTA' */FileCTA} {
        background-color: ${darken(0.05, color)};
        border-color: transparent;
        color: ${color_invert};
      }
    }
  }
`, '')

export const File = styled.div`
  ${unselectable}
  align-items: stretch;
  display: flex;
  justify-content: flex-start;
  position: relative;
  /* Colors */
  ${FileColorClasses}
  /* Sizes */
  &.is-small {
    font-size: ${fromTheme('size-small')};
  }
  &.is-medium {
    font-size: ${fromTheme('size-medium')};
    ${/* sc-custom '.Icon' */FileIcon} {
      .fa {
        font-size: 21px;
      }
    }
  }
  &.is-large {
    font-size: ${fromTheme('size-large')};
    ${/* sc-custom '.Icon' */FileIcon} {
      .fa {
        font-size: 28px;
      }
    }
  }
  /* Modifiers */
  &.has-name {
    ${/* sc-custom '.CTA' */FileCTA} {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }
    ${/* sc-custom '.Name' */FileName} {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    }
    &.is-empty {
      ${/* sc-custom '.CTA' */FileCTA} {
        border-radius: ${fromTheme('file-radius')};
      }
      ${/* sc-custom '.Name' */FileName} {
        display: none;
      }
    }
  }
  &.is-boxed {
    ${/* sc-custom '.Label' */FileLabel} {
      flex-direction: column;
    }
    ${/* sc-custom '.CTA' */FileCTA} {
      flex-direction: column;
      height: auto;
      padding: 1em 3em;
    }
    ${/* sc-custom '.Name' */FileName} {
      border-width: 0 1px 1px;
    }
    ${/* sc-custom '.Icon' */FileIcon} {
      height: 1.5em;
      width: 1.5em;
      .fa {
        font-size: 21px;
      }
    }
    &.is-small {
      ${/* sc-custom '.Icon' */FileIcon} .fa {
        font-size: 14px;
      }
    }
    &.is-medium {
      ${/* sc-custom '.Icon' */FileIcon} .fa {
        font-size: 28px;
      }
    }
    &.is-large {
      ${/* sc-custom '.Icon' */FileIcon} .fa {
        font-size: 35px;
      }
    }
    &.has-name {
      ${/* sc-custom '.CTA' */FileCTA} {
        border-radius: ${fromTheme('file-radius')} ${fromTheme('file-radius')} 0 0;
      }
      ${/* sc-custom '.Name' */FileName} {
        border-radius: 0 0 ${fromTheme('file-radius')} ${fromTheme('file-radius')};
        border-width: 0 1px 1px;
      }
    }
  }
  &.is-centered {
    justify-content: center;
  }
  &.is-fullwidth {
    ${/* sc-custom '.Label' */FileLabel} {
      width: 100%;
    }
    ${/* sc-custom '.Name' */FileName} {
      flex-grow: 1;
      max-width: none;
    }
  }
  &.is-right {
    justify-content: flex-end;
    ${/* sc-custom '.CTA' */FileCTA} {
      border-radius: 0 ${fromTheme('file-radius')} ${fromTheme('file-radius')} 0;
    }
    ${/* sc-custom '.Name' */FileName} {
      border-radius: ${fromTheme('file-radius')} 0 0 ${fromTheme('file-radius')};
      border-width: 1px 0 1px 1px;
      order: -1;
    }
  }
`
File.defaultProps = defaultProps

File.Label = FileLabel
File.Input = FileInput
File.CTA = FileCTA
File.Name = FileName
File.Icon = FileIcon
