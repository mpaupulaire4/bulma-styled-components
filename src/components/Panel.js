/* stylelint-disable no-descending-specificity */
import styled, { css } from 'styled-components'
import Vars from '../utilities/vars'
import { fa } from '../utilities/mixins'
import { fromTheme } from '../utilities/functions'
import { Control } from '../form/Control'

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

const defaultProps = { theme: Vars.getVariables() }

export const Panel = styled.nav`
  font-size: ${fromTheme('size-normal')};
  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`
Panel.defaultProps = defaultProps


const HeadingTabsBlockShared = css`
  border-bottom: ${fromTheme('panel-item-border')};
  border-left: ${fromTheme('panel-item-border')};
  border-right: ${fromTheme('panel-item-border')};
  &:first-child {
    border-top: ${fromTheme('panel-item-border')};
  }
`

export const PanelHeading = styled.header`
  ${HeadingTabsBlockShared}
  background-color: ${fromTheme('panel-heading-background-color')};
  border-radius: ${fromTheme('panel-heading-radius')} ${fromTheme('panel-heading-radius')} 0 0;
  color: ${fromTheme('panel-heading-color')};
  font-size: ${fromTheme('panel-heading-size')};
  font-weight: ${fromTheme('panel-heading-weight')};
  line-height: ${fromTheme('panel-heading-line-height')};
  padding: ${fromTheme('panel-heading-padding')};
`
PanelHeading.defaultProps = defaultProps
Panel.Heading = PanelHeading

export const PanelTabs = styled.p`
  ${HeadingTabsBlockShared}
  align-items: flex-end;
  display: flex;
  font-size: 0.875em;
  justify-content: center;
  a {
    border-bottom: ${fromTheme('panel-tab-border-bottom')};
    margin-bottom: -1px;
    padding: 0.5em;
  }
  /* Modifiers */
  a.is-active {
    border-bottom-color: ${fromTheme('panel-tab-active-border-bottom-color')};
    color: ${fromTheme('panel-tab-active-color')};
  }
`
PanelTabs.defaultProps = defaultProps
Panel.Tabs = PanelTabs

export const PanelList = styled.div`
  a {
    color: ${fromTheme('panel-list-item-color')};
  }
  a:hover {
    color: ${fromTheme('panel-list-item-hover-color')};
  }
`
PanelList.defaultProps = defaultProps
Panel.List = PanelList

export const PanelIcon = styled.span`
  ${fa('14px', '1em')}
  color: ${fromTheme('panel-icon-color')};
  margin-right: 0.75em;
  .fa {
    font-size: inherit;
    line-height: inherit;
  }
`
PanelIcon.defaultProps = defaultProps
Panel.Icon = PanelIcon

export const PanelBlock = styled.div`
  ${HeadingTabsBlockShared}
  align-items: center;
  color: ${fromTheme('panel-block-color')};
  display: flex;
  justify-content: flex-start;
  padding: 0.5em 0.75em;
  input[type="checkbox"] {
    margin-right: 0.75em;
  }
  & > ${/* sc-selector */Control}{
    flex-grow: 1;
    flex-shrink: 1;
    width: 100%;
  }
  &.is-wrapped {
    flex-wrap: wrap;
  }
  &.is-active {
    border-left-color: ${fromTheme('panel-block-active-border-left-color')};
    color: ${fromTheme('panel-block-active-color')};
    ${/* sc-selector */PanelIcon} {
      color: ${fromTheme('panel-block-active-icon-color')};
    }
  }
  a&,
  label& {
    cursor: pointer;
    &:hover {
      background-color: ${fromTheme('panel-block-hover-background-color')};
    }
  }
`
PanelBlock.defaultProps = defaultProps
Panel.Block = PanelBlock

