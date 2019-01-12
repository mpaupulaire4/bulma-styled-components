import { css } from 'emotion'
import {
  block,
  tablet,
  mobile,
} from '../utilities/mixins'
import { BaseWithConsumer } from '../base/Class'
import Title from '../elements/Title'
import Subtitle from '../elements/Subtitle'

export class LevelItem extends BaseWithConsumer {
  static displayName ='LevelItem'
  static defaultProps = {
    as: 'div',
  }

  static Style = theme => css`
    align-items: center;
    display: flex;
    flex-basis: auto;
    flex-grow: 0;
    flex-shrink: 0;
    justify-content: center;
    .${Title.name},
    .${Subtitle.name} {
      margin-bottom: 0;
    }

    /* Responsiveness */
    ${mobile(theme)`
      &:not(:last-child) {
        margin-bottom: 0.75rem;
      }
    `}
  `
}

const levelShared = theme => css`
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
  .${LevelItem.name} {
    /* Modifiers */
    &.is-flexible {
      flex-grow: 1;
    }
    /* Responsiveness */
    ${tablet(theme)`
      &:not(:last-child) {
        margin-right: 0.75rem;
      }
    `}
  }
`

export class LevelRight extends BaseWithConsumer {
  static displayName ='LevelRight'
  static defaultProps = {
    as: 'div',
  }

  static Style = theme => css`
    ${levelShared(theme)}
    align-items: center;
    justify-content: flex-end;
    /* Responsiveness */
    ${tablet(theme)`
      display: flex;
    `}
  `
}

export class LevelLeft extends BaseWithConsumer {
  static displayName ='LevelLeft'
  static defaultProps = {
    as: 'div',
  }

  static Style = theme => css`
    ${levelShared(theme)}
    align-items: center;
    justify-content: flex-start;
    /* Responsiveness */
    ${mobile(theme)`
      & + .${LevelRight.name} {
        margin-top: 1.5rem;
      }
    `}
    ${tablet(theme)`
      display: flex;
    `}
  `
}

export default class Level extends BaseWithConsumer {
  static displayName ='Level'
  static defaultProps = {
    as: 'div',
  }

  static Style = theme => css`
    ${block}
    align-items: center;
    justify-content: space-between;
    code {
      border-radius: ${theme['radius']}
    }
    img {
      display: inline-block;
      vertical-align: top;
    }
    /* Modifiers */
    &.is-mobile {
      display: flex;
      .${LevelLeft.name},
      .${LevelRight.name} { /* stylelint-disable-line */
        display: flex;
      }
      .${LevelLeft.name} + .${LevelRight.name} { /* stylelint-disable-line */
        margin-top: 0;
      }
      .${LevelItem.name} { /* stylelint-disable-line */
        margin-right: 0.75rem;
      }
      .${LevelItem.name}:not(:last-child) {
        margin-bottom: 0;
      }
      .${LevelItem.name}:not(.is-narrow) {
        flex-grow: 1;
      }
    }
    /* Responsiveness */
    ${tablet(theme)`
      display: flex;
      & > .level-item {
        &:not(.is-narrow) {
          flex-grow: 1;
        }
      }
    `}
  `
}
Level.Right = LevelRight
Level.Left = LevelLeft
Level.Item = LevelItem
