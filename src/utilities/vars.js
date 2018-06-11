import getVariables from './derived-variables'

export default class VarCalculator {
  static _variables = {}
  static _defaults = []
  static _derived = []

  static getVariables = (overrides) => {
    const variables = VarCalculator._defaults.reduce((vars, def) => ({
      ...def,
      ...vars,
    }), getVariables(overrides))
    return VarCalculator._derived.reduce((vars, der) => ({
      ...(der(vars)),
      ...vars,
    }), variables)
  }

  static addDefault(obj) {
    VarCalculator._defaults.push(obj)
  }

  static addDerivedDefault(value) {
    if (typeof value === 'function') {
      VarCalculator._derived.push(value)
    }
  }
}
