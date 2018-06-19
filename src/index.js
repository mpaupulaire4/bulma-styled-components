import init from './base'
import Vars from './utilities/vars'

export default class BulmaStyled {
  static _theme = null

  static getTheme = (overrides = {}) => {
    if (!BulmaStyled._theme) {
      BulmaStyled._theme = Vars.getVariables(overrides)
      init(BulmaStyled._theme)
    }
    return BulmaStyled._theme
  }
}
