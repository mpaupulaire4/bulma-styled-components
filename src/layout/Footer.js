import { css } from 'emotion'
import Vars from '../utilities/vars'
import { BaseWithConsumer } from '../base/Class'

Vars.addDerivedDefault(vars => ({
  'footer-background-color': vars['white-bis'],
}))

export default class Footer extends BaseWithConsumer {
  static defaultProps = {
    as: 'footer',
  }

  static Style = theme => css`
    background-color: ${theme['footer-background-color']};
    padding: 3rem 1.5rem 6rem;
  `
}
