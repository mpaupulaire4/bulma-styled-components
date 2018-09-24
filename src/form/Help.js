import { css as emotion_css } from 'emotion'
import Vars from '../utilities/vars'
import { BaseWithConsumer } from '../base/Class'

Vars.addDerivedDefault(vars => ({
  'help-size': vars['size-small'],
}))

const HelpColorClasses = theme => Object.entries(theme['colors']).reduce((acc, [name, [color]]) => emotion_css`
  ${acc}
  &.is-${name} {
    color: ${color};
  }
`, '')

export default class Help extends BaseWithConsumer {
  static defaultProps = {
    as: 'p',
  }

  static Style = theme => emotion_css`
    display: block;
    font-size: ${theme['help-size']};
    margin-top: 0.25rem;
    ${HelpColorClasses(theme)}
  `
}
