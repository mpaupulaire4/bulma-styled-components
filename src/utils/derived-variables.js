import initialVars from './initial-variables'
import { findColorInvert } from './functions'

export function getVariables(overrides) {
    const derived = {...initialVars, ...overrides}

    setDefault(derived, 'primary', derived['turquoise'])
    setDefault(derived, 'info', derived['cyan'])
    setDefault(derived, 'success', derived['green'])
    setDefault(derived, 'warning', derived['yellow'])
    setDefault(derived, 'danger', derived['red'])

    setDefault(derived, 'light', derived['white-ter'])
    setDefault(derived, 'dark', derived['grey-darker'])

    // Invert colors

    setDefault(derived, 'orange-invert', findColorInvert(derived['orange']))
    setDefault(derived, 'yellow-invert', findColorInvert(derived['yellow']))
    setDefault(derived, 'green-invert', findColorInvert(derived['green']))
    setDefault(derived, 'turquoise-invert', findColorInvert(derived['turquoise']))
    setDefault(derived, 'cyan-invert', findColorInvert(derived['cyan']))
    setDefault(derived, 'blue-invert', findColorInvert(derived['blue']))
    setDefault(derived, 'purple-invert', findColorInvert(derived['purple']))
    setDefault(derived, 'red-invert', findColorInvert(derived['red']))

    setDefault(derived, 'primary-invert', derived['turquoise-invert'])
    setDefault(derived, 'info-invert', derived['cyan-invert'])
    setDefault(derived, 'success-invert', derived['green-invert'])
    setDefault(derived, 'warning-invert', derived['yellow-invert'])
    setDefault(derived, 'danger-invert', derived['red-invert'])
    setDefault(derived, 'light-invert', derived['dark'])
    setDefault(derived, 'dark-invert', derived['light'])

    // General colors

    setDefault(derived, 'background', derived['white-ter'])

    setDefault(derived, 'border', derived['grey-lighter'])
    setDefault(derived, 'border-hover', derived['grey-light'])

    // Text colors

    setDefault(derived, 'text', derived['grey-dark'])
    setDefault(derived, 'text-invert', findColorInvert(derived['text']))
    setDefault(derived, 'text-light', derived['grey'])
    setDefault(derived, 'text-strong', derived['grey-darker'])

    // Code colors

    setDefault(derived, 'code', derived['red'])
    setDefault(derived, 'code-background', derived['background'])

    setDefault(derived, 'pre', derived['text'])
    setDefault(derived, 'pre-background', derived['background'])

    // Link colors

    setDefault(derived, 'link', derived['blue'])
    setDefault(derived, 'link-invert', derived['blue-invert'])
    setDefault(derived, 'link-visited', derived['purple'])

    setDefault(derived, 'link-hover', derived['grey-darker'])
    setDefault(derived, 'link-hover-border', derived['grey-light'])

    setDefault(derived, 'link-focus', derived['grey-darker'])
    setDefault(derived, 'link-focus-border', derived['blue'])

    setDefault(derived, 'link-active', derived['grey-darker'])
    setDefault(derived, 'link-active-border', derived['grey-dark'])

    // Typography

    setDefault(derived, 'family-primary', derived['family-sans-serif'])
    setDefault(derived, 'family-code', derived['family-monospace'])

    setDefault(derived, 'size-small', derived['size-7'])
    setDefault(derived, 'size-normal', derived['size-6'])
    setDefault(derived, 'size-medium', derived['size-5'])
    setDefault(derived, 'size-large', derived['size-4'])

    // Lists and maps
    setDefault(derived, 'colors', {
      "white": [derived['white'], derived['black']],
      "black": [derived['black'], derived['white']],
      "light": [derived['light'], derived['light-invert']],
      "dark": [derived['dark'], derived['dark-invert']],
      "primary": [derived['primary'], derived['primary-invert']],
      "link": [derived['link'], derived['link-invert']],
      "info": [derived['info'], derived['info-invert']],
      "success": [derived['success'], derived['success-invert']],
      "warning": [derived['warning'], derived['warning-invert']],
      "danger": [derived['danger'], derived['danger-invert']],
      ...derived['custom-colors']
    })

    setDefault(derived, 'shades', {
      "black-bis": derived['black-bis'],
      "black-ter": derived['black-ter'],
      "grey-darker": derived['grey-darker'],
      "grey-dark": derived['grey-dark'],
      "grey": derived['grey'],
      "grey-light": derived['grey-light'],
      "grey-lighter": derived['grey-lighter'],
      "white-ter": derived['white-ter'],
      "white-bis": derived['white-bis'],
      ...derived['custom-shades']
    })

    setDefault(derived, 'sizes', [
      derived['size-1'],
      derived['size-2'],
      derived['size-3'],
      derived['size-4'],
      derived['size-5'],
      derived['size-6'],
      derived['size-7'],
    ])

        // 960px container + 4rem
    setDefault(derived, 'desktop', `calc(960px + (2 * ${derived['gap']}))`)
    // 1152px container + 4rem
    setDefault(derived, 'widescreen', `calc(1152px + (2 * ${derived['gap']}))`)
    // 1344px container + 4rem
    setDefault(derived, 'fullhd', `calc(1344px + (2 * ${derived['gap']}))`)

    return Object.freeze(derived);
}

function setDefault(obj, key, deflt) {
  obj[key] = obj[key] || deflt
}
