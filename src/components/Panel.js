/* stylelint-disable no-descending-specificity */
import { css } from 'emotion'
import { fa } from '../utilities/mixins'
import { BaseWithConsumer } from '../base/Class'
import Control from '../form/Control'

BULMA_VARS({
  get 'panel-item-border'() { return `1px solid ${this['border']}` },

  get 'panel-heading-background-color'() { return this['background'] },
  get 'panel-heading-color'() { return this['text-strong'] },
  'panel-heading-line-height': 1.25,
  'panel-heading-padding': '0.5em 0.75em',
  get 'panel-heading-radius'() { return this['radius'] },
  'panel-heading-size': '1.25em',
  get 'panel-heading-weight'() { return this['weight-light'] },

  get 'panel-tab-border-bottom'() { return `1px solid ${this['border']}` },
  get 'panel-tab-active-border-bottom-color'() { return this['link-active-border'] },
  get 'panel-tab-active-color'() { return this['link-active'] },

  get 'panel-list-item-color'() { return this['text'] },
  get 'panel-list-item-hover-color'() { return this['link'] },

  get 'panel-block-color'() { return this['text-strong'] },
  get 'panel-block-hover-background-color'() { return this['background'] },
  get 'panel-block-active-border-left-color'() { return this['link'] },
  get 'panel-block-active-color'() { return this['link-active'] },
  get 'panel-block-active-icon-color'() { return this['link'] },

  get 'panel-icon-color'() { return this['text-light'] },
})

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

