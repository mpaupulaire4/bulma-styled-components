import { getLuminance } from 'polished'


export function findColorInvert($color) {
  if (getLuminance($color) > 0.55) return 'rgba(#000, 0.7)'
  return '#fff'
}

export function is_color(color) {
  return typeof color === 'string' &&
   /(^[a-zA-Z]+$)|(#(?:[0-9a-f]{2}){2,4}|#[0-9a-f]{3}|(?:rgba?|hsla?)\((?:\d+%?(?:deg|rad|grad|turn)?(?:,|\s)+){2,3}[\s\/]*[\d\.]+%?\))/i.test(color) // eslint-disable-line no-useless-escape
}

export function mergeColorMaps(bulmaColors = {}, customColors = {}) {
  // we want a map as input
  if (typeof customColors === 'object') {
    return Object.entries(customColors).reduce((map, [name, components]) => {
      // the components can either be a single color
      // or a list of 2 colors

      let colorBase = null
      let colorInvert = null
      if (
        Array.isArray(components) &&
        components.length >= 1 &&
        is_color(components[0])
      ) {
        [colorBase, colorInvert] = components
        // if inverted color is not provided or is not a color we compute it
        if (!is_color(colorInvert)) colorInvert = findColorInvert(colorBase)

        // we merge this colors elements as map with bulma colors
        // (we can override them this way, no multiple definition for the same name)
        map[name] = [colorBase, colorInvert] // eslint-disable-line no-param-reassign
        return map
      }
      if (is_color(components)) {
        colorBase = components
        colorInvert = findColorInvert(colorBase)
        map[name] = [colorBase, colorInvert] // eslint-disable-line no-param-reassign
        return map
      }
      return map
    }, bulmaColors)
  }
  return bulmaColors
}

export function fromTheme(key) {
  return props => props.theme[key]
}
