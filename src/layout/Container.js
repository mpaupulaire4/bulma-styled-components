import { css } from 'styled-components'
import {
  desktop,
  until_widescreen,
  until_fullhd,
  widescreen,
  fullhd,
} from '../utilities/mixins'
import { BaseWithConsumer } from '../base/Class'

export default class Container extends BaseWithConsumer {
  static defaultProps = {
    as: 'div',
  }

  static Style = theme => css`
    margin: 0 auto;
    position: relative;
    ${desktop(theme)`
      max-width: calc(${theme['desktop']} - (2 * ${theme['gap']}));
      width: calc(${theme['desktop']} - (2 * ${theme['gap']}));
      &.is-fluid {
        margin-left: ${theme['gap']};
        margin-right: ${theme['gap']};
        max-width: none;
        width: auto;
      }
    `}
    ${until_widescreen(theme)`
      &.is-widescreen {
        max-width: calc(${theme['widescreen']} - (2 * ${theme['gap']}));
        width: auto;
      }
    `}
    ${until_fullhd(theme)`
      &.is-fullhd {
        max-width: calc(${theme['fullhd']} - (2 * ${theme['gap']}));
        width: auto;
      }
    `}
    ${widescreen(theme)`
      max-width: calc(${theme['widescreen']} - (2 * ${theme['gap']}));
      width: calc(${theme['widescreen']} - (2 * ${theme['gap']}));
    `}
    ${fullhd(theme)`
      max-width: calc(${theme['fullhd']} - (2 * ${theme['gap']}));
      width: calc(${theme['fullhd']} - (2 * ${theme['gap']}));
    `}
  `
}
