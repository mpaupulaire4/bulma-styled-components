import { css as emotion_css } from 'emotion'
import Vars from '../utilities/vars'
import { desktop } from '../utilities/mixins'
import { BaseWithConsumer } from '../base/Class'

Vars.addDerivedDefault(() => ({
  'section-padding': '3rem 1.5rem',
  'section-padding-medium': '9rem 1.5rem',
  'section-padding-large': '18rem 1.5rem',
}))

export class Section extends BaseWithConsumer {
  static defaultProps = {
    as: 'section',
  }

  static Style = theme => emotion_css`
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
