import { css } from 'emotion'
import { desktop } from '../utilities/mixins'
import { BaseWithConsumer } from '../base/Class'

BULMA_VARS({
  'section-padding': '3rem 1.5rem',
  'section-padding-medium': '9rem 1.5rem',
  'section-padding-large': '18rem 1.5rem',
})

export default class Section extends BaseWithConsumer {
  static displayName ='Section'
  static defaultProps = {
    as: 'section',
  }

  static Style = theme => css`
    padding: ${theme['section-padding']};
    /* Responsiveness */
    ${desktop(theme)`
      /* Sizes */
      &.is-medium {
        padding: ${theme['section-padding-medium']};
      }
      &.is-large {
        padding: ${theme['section-padding-large']};
      }
    `}
  `
}
