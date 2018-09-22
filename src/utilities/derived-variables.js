import initialVars from './initial-variables'
import { findColorInvert, mergeColorMaps } from './functions'

/* eslint-disable dot-notation, quote-props */

export default function getVariables(overrides = {}) {
  const derived = {
    ...initialVars,
    ...overrides,
  }

  function setDefault(key, deflt) {
    derived[key] = derived[key] || deflt // eslint-disable-line no-param-reassign
  }

  setDefault('primary', derived['turquoise'])
  setDefault('info', derived['cyan'])
  setDefault('success', derived['green'])
  setDefault('warning', derived['yellow'])
  setDefault('danger', derived['red'])

  setDefault('light', derived['white-ter'])
  setDefault('dark', derived['grey-darker'])

  // Invert colors

  setDefault('orange-invert', findColorInvert(derived['orange']))
  setDefault('yellow-invert', findColorInvert(derived['yellow']))
  setDefault('green-invert', findColorInvert(derived['green']))
  setDefault('turquoise-invert', findColorInvert(derived['turquoise']))
  setDefault('cyan-invert', findColorInvert(derived['cyan']))
  setDefault('blue-invert', findColorInvert(derived['blue']))
  setDefault('purple-invert', findColorInvert(derived['purple']))
  setDefault('red-invert', findColorInvert(derived['red']))

  setDefault('primary-invert', derived['turquoise-invert'])
  setDefault('info-invert', derived['cyan-invert'])
  setDefault('success-invert', derived['green-invert'])
  setDefault('warning-invert', derived['yellow-invert'])
  setDefault('danger-invert', derived['red-invert'])
  setDefault('light-invert', derived['dark'])
  setDefault('dark-invert', derived['light'])

  // General colors

  setDefault('background', derived['white-ter'])

  setDefault('border', derived['grey-lighter'])
  setDefault('border-hover', derived['grey-light'])

  // Text colors

  setDefault('text', derived['grey-dark'])
  setDefault('text-invert', findColorInvert(derived['text']))
  setDefault('text-light', derived['grey'])
  setDefault('text-strong', derived['grey-darker'])

  // Code colors

  setDefault('code', derived['red'])
  setDefault('code-background', derived['background'])

  setDefault('pre', derived['text'])
  setDefault('pre-background', derived['background'])

  // Link colors

  setDefault('link', derived['blue'])
  setDefault('link-invert', derived['blue-invert'])
  setDefault('link-visited', derived['purple'])

  setDefault('link-hover', derived['grey-darker'])
  setDefault('link-hover-border', derived['grey-light'])

  setDefault('link-focus', derived['grey-darker'])
  setDefault('link-focus-border', derived['blue'])

  setDefault('link-active', derived['grey-darker'])
  setDefault('link-active-border', derived['grey-dark'])

  // Typography

  setDefault('family-primary', derived['family-sans-serif'])
  setDefault('family-code', derived['family-monospace'])

  setDefault('size-small', derived['size-7'])
  setDefault('size-normal', derived['size-6'])
  setDefault('size-medium', derived['size-5'])
  setDefault('size-large', derived['size-4'])

  // Lists and maps
  setDefault('colors', mergeColorMaps({
    'white': [derived['white'], derived['black']],
    'black': [derived['black'], derived['white']],
    'light': [derived['light'], derived['light-invert']],
    'dark': [derived['dark'], derived['dark-invert']],
    'primary': [derived['primary'], derived['primary-invert']],
    'link': [derived['link'], derived['link-invert']],
    'info': [derived['info'], derived['info-invert']],
    'success': [derived['success'], derived['success-invert']],
    'warning': [derived['warning'], derived['warning-invert']],
    'danger': [derived['danger'], derived['danger-invert']],
  }, derived['custom-colors']))

  setDefault('shades', {
    'black-bis': derived['black-bis'],
    'black-ter': derived['black-ter'],
    'grey-darker': derived['grey-darker'],
    'grey-dark': derived['grey-dark'],
    'grey': derived['grey'],
    'grey-light': derived['grey-light'],
    'grey-lighter': derived['grey-lighter'],
    'white-ter': derived['white-ter'],
    'white-bis': derived['white-bis'],
    ...derived['custom-shades'],
  })

  setDefault('sizes', [
    derived['size-1'],
    derived['size-2'],
    derived['size-3'],
    derived['size-4'],
    derived['size-5'],
    derived['size-6'],
    derived['size-7'],
  ])

  // 960px container + 4rem
  setDefault('desktop', `calc(960px + (2 * ${derived['gap']}))`)
  // 1152px container + 4rem
  setDefault('widescreen', `calc(1152px + (2 * ${derived['gap']}))`)
  // 1344px container + 4rem
  setDefault('fullhd', `calc(1344px + (2 * ${derived['gap']}))`)

  setDefault('control-radius', derived['radius'])

  setDefault('control-radius-small', derived['radius-small'])

  setDefault('control-padding-vertical', `calc(0.375em - ${derived['control-border-width']})`)

  setDefault('control-padding-horizontal', `calc(0.625em - ${derived['control-border-width']})`)

  setDefault('body-background-color', derived['white'])
  setDefault('body-family', derived['family-primary'])
  setDefault('body-color', derived['text'])
  setDefault('body-weight', derived['weight-normal'])
  setDefault('code-family', derived['family-code'])
  setDefault('hr-background-color', derived['background'])
  setDefault('strong-color', derived['text-strong'])
  setDefault('strong-weight', derived['weight-bold'])

  return Object.freeze(derived)
}
