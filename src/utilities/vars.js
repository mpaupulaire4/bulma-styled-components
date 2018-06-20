import getVariables from './derived-variables'

export default class VarCalculator {
  static _variables = {}
  static _defaults = []
  static _derived = []

  static getVariables = overrides => VarCalculator._derived.reduce((vars, der) => ({
    ...(der(vars)),
    ...vars,
  }), getVariables(overrides))

  static addDefault(obj) {
    VarCalculator._defaults.push(obj)
  }

  static addDerivedDefault(value) {
    if (typeof value === 'function') {
      VarCalculator._derived.push(value)
    }
  }
}
