import { css } from 'emotion'
import { BaseWithConsumer } from '../base/Class'

BULMA_VARS({
  get 'help-size'() { return this['size-small'] },
})

const HelpColorClasses = theme => Object.entries(theme['colors']).reduce((acc, [name, [color]]) => css`
  ${acc}
  &.is-${name} {
    color: ${color};
  }
`, '')

export default class Help extends BaseWithConsumer {
  static defaultProps = {
    as: 'p',
  }

  static Style = theme => css`
    display: block;
    font-size: ${theme['help-size']};
    margin-top: 0.25rem;
    ${HelpColorClasses(theme)}
  `
}
