import getVariables from './initial-variables'

export default class VarCalculator {
  static _variables = {}
  static _defaults = []
  static _derived = []
  static _recalc = false

  static getVariables(overrides) {
    if (this._overrides === overrides && !this._recalc) {
      return this._variables
    }
    this._variables = VarCalculator._derived.reduce((vars, der) => ({
      ...(der(vars)),
      ...vars,
    }), getVariables(overrides))
    this._variables = VarCalculator._defaults.reduce((vars, der) => ({
      ...der,
      ...vars,
    }), this._variables)
    return this._variables
  }

  static addDerivedDefault(value) {
    this._recalc = true
    if (typeof value === 'function') {
      VarCalculator._derived.push(value)
    } else {
      VarCalculator._defaults.push(value)
    }
  }
}
