/* stylelint-disable no-descending-specificity */
import { css } from 'emotion'
import { rgba, darken } from 'polished'
import { unselectable } from '../utilities/mixins'
import { control } from '../utilities/controls'
import { BaseWithConsumer, Base } from '../base/Class'

BULMA_VARS({
  get 'file-border-color'() { return this['border'] },
  get 'file-radius'() { return this['radius'] },

  get 'file-cta-background-color'() { return this['white-ter'] },
  get 'file-cta-color'() { return this['grey-dark'] },
  get 'file-cta-hover-color'() { return this['grey-darker'] },
  get 'file-cta-active-color'() { return this['grey-darker'] },

  get 'file-name-border-color'() { return this['border'] },
  'file-name-border-style': 'solid',
  'file-name-border-width': '1px 1px 1px 0',
  'file-name-max-width': '16em',
})

const CTANameShared = theme => css`
  ${control(theme)}
  border-color: ${theme['file-border-color']};
  border-radius: ${theme['file-radius']};
  font-size: 1em;
  padding-left: 1em;
  padding-right: 1em;
  white-space: nowrap;
`

export class FileCTA extends BaseWithConsumer {
  static defaultProps = {
    as: 'span',
  }

  static Style = theme => css`
    ${CTANameShared(theme)}
    background-color: ${theme['file-cta-background-color']};
    color: ${theme['file-cta-color']};
  `
}


export class FileName extends BaseWithConsumer {
  static defaultProps = {
    as: 'span',
  }

  static Style = theme => css`
    ${CTANameShared(theme)}
    border-color: ${theme['file-name-border-color']};
    border-style: ${theme['file-name-border-style']};
    border-width: ${theme['file-name-border-width']};
    display: block;
    max-width: ${theme['file-name-max-width']};
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
  `
}


export class FileIcon extends Base {
  static defaultProps = {
    as: 'span',
  }

  static Style = () => css`
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
}


export class FileLabel extends BaseWithConsumer {
  static defaultProps = {
    as: 'label',
  }

  static Style = theme => css`
    align-items: stretch;
    display: flex;
    cursor: pointer;
    justify-content: flex-start;
    overflow: hidden;
    position: relative;
    &:hover {
      .${/* sc-custom '.CTA' */FileCTA.name} {
        background-color: ${darken(0.025, theme['file-cta-background-color'])};
        color: ${theme['file-cta-hover-color']};
      }
      .${/* sc-custom '.Name' */FileName.name} {
        border-color: ${darken(0.025, theme['file-name-border-color'])};
      }
    }
    &:active {
      .${/* sc-custom '.CTA' */FileCTA.name} {
        background-color: ${darken(0.05, theme['file-cta-background-color'])};
        color: ${theme['file-cta-active-color']};
      }
      .${/* sc-custom '.Name' */FileName.name} {
        border-color: ${darken(0.05, theme['file-name-border-color'])};
      }
    }
  `
}

export class FileInput extends Base {
  static defaultProps = {
    as: 'input',
    type: 'file',
  }

  static Style = () => css`
    height: 0.01em;
    left: 0;
    outline: none;
    position: absolute;
    top: 0;
    width: 0.01em;
  `
}

const FileColorClasses = theme => Object.entries(theme['colors']).reduce((acc, [name, [color, color_invert]]) => css`
  ${acc}
  &.is-${name} {
    .${/* sc-custom '.CTA' */FileCTA.name} {
      background-color: ${color};
      border-color: transparent;
      color: ${color_invert};
    }
    &:hover,
    &.is-hovered {
      .${/* sc-custom '.CTA' */FileCTA.name} {
        background-color: ${darken(0.025, color)};
        border-color: transparent;
        color: ${color_invert};
      }
    }
    &:focus,
    &.is-focused {
      .${/* sc-custom '.CTA' */FileCTA.name} {
        border-color: transparent;
        box-shadow: 0 0 0.5em ${rgba(color, 0.25)};
        color: ${color_invert};
      }
    }
    &:active,
    &.is-active {
      .${/* sc-custom '.CTA' */FileCTA.name} {
        background-color: ${darken(0.05, color)};
        border-color: transparent;
        color: ${color_invert};
      }
    }
  }
`, '')

export default class File extends BaseWithConsumer {
  static defaultProps = {
    as: 'div',
  }

  static Style = theme => css`
    ${unselectable}
    align-items: stretch;
    display: flex;
    justify-content: flex-start;
    position: relative;
    /* Colors */
    ${FileColorClasses(theme)}
    /* Sizes */
    &.is-small {
      font-size: ${theme['size-small']};
    }
    &.is-medium {
      font-size: ${theme['size-medium']};
      .${/* sc-custom '.Icon' */FileIcon.name} {
        .fa {
          font-size: 21px;
        }
      }
    }
    &.is-large {
      font-size: ${theme['size-large']};
      .${/* sc-custom '.Icon' */FileIcon.name} {
        .fa {
          font-size: 28px;
        }
      }
    }
    /* Modifiers */
    &.has-name {
      .${/* sc-custom '.CTA' */FileCTA.name} {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
      }
      .${/* sc-custom '.Name' */FileName.name} {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
      }
      &.is-empty {
        .${/* sc-custom '.CTA' */FileCTA.name} {
          border-radius: ${theme['file-radius']};
        }
        .${/* sc-custom '.Name' */FileName.name} {
          display: none;
        }
      }
    }
    &.is-boxed {
      .${/* sc-custom '.Label' */FileLabel.name} {
        flex-direction: column;
      }
      .${/* sc-custom '.CTA' */FileCTA.name} {
        flex-direction: column;
        height: auto;
        padding: 1em 3em;
      }
      .${/* sc-custom '.Name' */FileName.name} {
        border-width: 0 1px 1px;
      }
      .${/* sc-custom '.Icon' */FileIcon.name} {
        height: 1.5em;
        width: 1.5em;
        .fa {
          font-size: 21px;
        }
      }
      &.is-small {
        .${/* sc-custom '.Icon' */FileIcon.name} .fa {
          font-size: 14px;
        }
      }
      &.is-medium {
        .${/* sc-custom '.Icon' */FileIcon.name} .fa {
          font-size: 28px;
        }
      }
      &.is-large {
        .${/* sc-custom '.Icon' */FileIcon.name} .fa {
          font-size: 35px;
        }
      }
      &.has-name {
        .${/* sc-custom '.CTA' */FileCTA.name} {
          border-radius: ${theme['file-radius']} ${theme['file-radius']} 0 0;
        }
        .${/* sc-custom '.Name' */FileName.name} {
          border-radius: 0 0 ${theme['file-radius']} ${theme['file-radius']};
          border-width: 0 1px 1px;
        }
      }
    }
    &.is-centered {
      justify-content: center;
    }
    &.is-fullwidth {
      .${/* sc-custom '.Label' */FileLabel.name} {
        width: 100%;
      }
      .${/* sc-custom '.Name' */FileName.name} {
        flex-grow: 1;
        max-width: none;
      }
    }
    &.is-right {
      justify-content: flex-end;
      .${/* sc-custom '.CTA' */FileCTA.name} {
        border-radius: 0 ${theme['file-radius']} ${theme['file-radius']} 0;
      }
      .${/* sc-custom '.Name' */FileName.name} {
        border-radius: ${theme['file-radius']} 0 0 ${theme['file-radius']};
        border-width: 1px 0 1px 1px;
        order: -1;
      }
    }
  `
}

File.Label = FileLabel
File.Input = FileInput
File.CTA = FileCTA
File.Name = FileName
File.Icon = FileIcon
