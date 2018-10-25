import { css } from 'emotion'
import { BaseWithConsumer } from '../base/Class'

BULMA_VARS({
  get 'footer-background-color'() { return this['white-bis'] },
})

export default class Footer extends BaseWithConsumer {
  static defaultProps = {
    as: 'footer',
  }

  static Style = theme => css`
    background-color: ${theme['footer-background-color']};
    padding: 3rem 1.5rem 6rem;
  `
}
