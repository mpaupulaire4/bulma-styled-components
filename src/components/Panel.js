/* stylelint-disable no-descending-specificity */
import { css } from 'emotion'
import Vars from '../utilities/vars'
import { fa } from '../utilities/mixins'
import { BaseWithConsumer } from '../base/Class'
import Control from '../form/Control'

Vars.addDerivedDefault(vars => ({
  'panel-item-border': `1px solid ${vars['border']}`,

  'panel-heading-background-color': vars['background'],
  'panel-heading-color': vars['text-strong'],
  'panel-heading-line-height': 1.25,
  'panel-heading-padding': '0.5em 0.75em',
  'panel-heading-radius': vars['radius'],
  'panel-heading-size': '1.25em',
  'panel-heading-weight': vars['weight-light'],

  'panel-tab-border-bottom': `1px solid ${vars['border']}`,
  'panel-tab-active-border-bottom-color': vars['link-active-border'],
  'panel-tab-active-color': vars['link-active'],

  'panel-list-item-color': vars['text'],
  'panel-list-item-hover-color': vars['link'],

  'panel-block-color': vars['text-strong'],
  'panel-block-hover-background-color': vars['background'],
  'panel-block-active-border-left-color': vars['link'],
  'panel-block-active-color': vars['link-active'],
  'panel-block-active-icon-color': vars['link'],

  'panel-icon-color': vars['text-light'],
}))

export default class Panel extends BaseWithConsumer {
  static defaultProps = {
    as: 'nav',
  }

  static Style = theme => css`
    font-size: ${theme['size-normal']};
    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }
  `
}

const HeadingTabsBlockShared = theme => css`
  border-bottom: ${theme['panel-item-border']};
  border-left: ${theme['panel-item-border']};
  border-right: ${theme['panel-item-border']};
  &:first-child {
    border-top: ${theme['panel-item-border']};
  }
`

export class PanelHeading extends BaseWithConsumer {
  static defaultProps = {
    as: 'header',
  }

  static Style = theme => css`
    ${HeadingTabsBlockShared(theme)}
    background-color: ${theme['panel-heading-background-color']};
    border-radius: ${theme['panel-heading-radius']} ${theme['panel-heading-radius']} 0 0;
    color: ${theme['panel-heading-color']};
    font-size: ${theme['panel-heading-size']};
    font-weight: ${theme['panel-heading-weight']};
    line-height: ${theme['panel-heading-line-height']};
    padding: ${theme['panel-heading-padding']};
  `
}
Panel.Heading = PanelHeading

export class PanelTabs extends BaseWithConsumer {
  static defaultProps = {
    as: 'p',
  }

  static Style = theme => css`
    ${HeadingTabsBlockShared(theme)}
    align-items: flex-end;
    display: flex;
    font-size: 0.875em;
    justify-content: center;
    a {
      border-bottom: ${theme['panel-tab-border-bottom']};
      margin-bottom: -1px;
      padding: 0.5em;
    }
    /* Modifiers */
    a.is-active {
      border-bottom-color: ${theme['panel-tab-active-border-bottom-color']};
      color: ${theme['panel-tab-active-color']};
    }
  `
}
Panel.Tabs = PanelTabs

export class PanelList extends BaseWithConsumer {
  static defaultProps = {
    as: 'div',
  }

  static Style = theme => css`
    a {
      color: ${theme['panel-list-item-color']};
    }
    a:hover {
      color: ${theme['panel-list-item-hover-color']};
    }
  `
}
Panel.List = PanelList

export class PanelIcon extends BaseWithConsumer {
  static defaultProps = {
    as: 'span',
  }

  static Style = theme => css`
    ${fa('14px', '1em')}
    color: ${theme['panel-icon-color']};
    margin-right: 0.75em;
    .fa {
      font-size: inherit;
      line-height: inherit;
    }
  `
}
Panel.Icon = PanelIcon

export class PanelBlock extends BaseWithConsumer {
  static defaultProps = {
    as: 'div',
  }

  static Style = (theme, { as }) => css`
    ${HeadingTabsBlockShared(theme)}
    align-items: center;
    color: ${theme['panel-block-color']};
    display: flex;
    justify-content: flex-start;
    padding: 0.5em 0.75em;
    input[type="checkbox"] {
      margin-right: 0.75em;
    }
    & > .${/* sc-selector */Control.name} {
      flex-grow: 1;
      flex-shrink: 1;
      width: 100%;
    }
    &.is-wrapped {
      flex-wrap: wrap;
    }
    &.is-active {
      border-left-color: ${theme['panel-block-active-border-left-color']};
      color: ${theme['panel-block-active-color']};
      .${/* sc-selector */PanelIcon.name} {
        color: ${theme['panel-block-active-icon-color']};
      }
    }
    ${as === 'a' || as === 'label' ? `
      cursor: pointer;
      &:hover {
        background-color: ${theme['panel-block-hover-background-color']};
      }
    ` : ''}
  `
}
Panel.Block = PanelBlock

