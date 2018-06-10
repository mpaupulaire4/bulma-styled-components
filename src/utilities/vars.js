import getVariables from './derived-variables'

export default class VarCalculator {
  static _variables = {}
  static _defaults = []
  static _derived = []

  static getVariables = (overrides) => {
    const variables = this._defaults.reduce((vars, def) => ({
      ...def,
      ...vars,
    }), getVariables(overrides))

    return this._derived.reduce((vars, der) => ({
      ...(der(vars)),
      ...vars,
    }), variables)
  }

  static addDefault(obj) {
    this._defaults.push(obj)
  }

  static addDerivedDefault(value) {
    if (typeof value === 'function') {
      this._derived.push([value])
    }
  }
}
