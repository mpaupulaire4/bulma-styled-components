import initialVars from './initial-variables'
import { findColorInvert } from './functions'

export function getVariables(overrides) {
    const derived = {...initialVars, ...overrides}

    derived['primary'] = derived['primary'] ||  derived['turquoise']
    derived['info'] = derived['info'] || derived['cyan']
    derived['success'] = derived['success'] || derived['green']
    derived['warning'] = derived['warning'] || derived['yellow']
    derived['danger'] = derived['danger'] || derived['red']

    derived['light'] = derived['light'] || derived['white-ter']
    derived['dark'] = derived['dark'] || derived['grey-darker']

    // Invert colors

    derived['orange-invert'] = derived['orange-invert'] || findColorInvert(derived['orange'])
    derived['yellow-invert'] = derived['yellow-invert'] || findColorInvert(derived['yellow'])
    derived['green-invert'] = derived['green-invert'] || findColorInvert(derived['green'])
    derived['turquoise-invert'] = derived['turquoise-invert'] || findColorInvert(derived['turquoise'])
    derived['cyan-invert'] = derived['cyan-invert'] || findColorInvert(derived['cyan'])
    derived['blue-invert'] = derived['blue-invert'] || findColorInvert(derived['blue'])
    derived['purple-invert'] = derived['purple-invert'] || findColorInvert(derived['purple'])
    derived['red-invert'] = derived['red-invert'] || findColorInvert(derived['red'])

    derived['primary-invert'] = derived['primary-invert'] || derived['turquoise-invert']
    derived['info-invert'] = derived['info-invert'] || derived['cyan-invert']
    derived['success-invert'] = derived['success-invert'] || derived['green-invert']
    derived['warning-invert'] = derived['warning-invert'] || derived['yellow-invert']
    derived['danger-invert'] = derived['danger-invert'] || derived['red-invert']
    derived['light-invert'] = derived['light-invert'] || derived['dark']
    derived['dark-invert'] = derived['dark-invert'] || derived['light']

    // General colors

    derived['background'] = derived['background'] || derived['white-ter']

    derived['border'] = derived['border'] || derived['grey-lighter']
    derived['border-hover'] = derived['border-hover'] || derived['grey-light']

    // Text colors

    derived['text'] = derived['text'] || derived['grey-dark']
    derived['text-invert'] = derived['text-invert'] || findColorInvert(derived['text'])
    derived['text-light'] = derived['text-light'] || derived['grey']
    derived['text-strong'] = derived['text-strong'] || derived['grey-darker']

    // Code colors

    derived['code'] = derived['code'] || derived['red']
    derived['code-background'] = derived['code-background'] || derived['background']

    derived['pre'] = derived['pre'] || derived['text']
    derived['pre-background'] = derived['pre-background'] || derived['background']

    // Link colors

    derived['link'] = derived['link'] || derived['blue']
    derived['link-invert'] = derived['link-invert'] || derived['blue-invert']
    derived['link-visited'] = derived['link-visited'] || derived['purple']

    derived['link-hover'] = derived['link-hover'] || derived['grey-darker']
    derived['link-hover-border'] = derived['link-hover-border'] || derived['grey-light']

    derived['link-focus'] = derived['link-focus'] || derived['grey-darker']
    derived['link-focus-border'] = derived['link-focus-border'] || derived['blue']

    derived['link-active'] = derived['link-active'] || derived['grey-darker']
    derived['link-active-border'] = derived['link-active-border'] || derived['grey-dark']

    // Typography

    derived['family-primary'] = derived['family-primary'] || derived['family-sans-serif']
    derived['family-code'] = derived['family-code'] || derived['family-monospace']

    derived['size-small'] = derived['size-small'] || derived['size-7']
    derived['size-normal'] = derived['size-normal'] || derived['size-6']
    derived['size-medium'] = derived['size-medium'] || derived['size-5']
    derived['size-large'] = derived['size-large'] || derived['size-4']

    // Lists and maps
    derived['colors'] = derived['colors'] || {
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
    },

    derived['shades'] = derived['shades'] || {
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
    },

    derived['sizes'] = derived['sizes'] || [
      derived['size-1'],
      derived['size-2'],
      derived['size-3'],
      derived['size-4'],
      derived['size-5'],
      derived['size-6'],
      derived['size-7'],
    ]

        // 960px container + 4rem
    derived['desktop'] = derived['desktop'] || `calc(960px + (2 * ${derived['gap']}))`
    // 1152px container + 4rem
    derived['widescreen'] = derived['widescreen'] || `calc(1152px + (2 * ${derived['gap']}))`
    // 1344px container + 4rem
    derived['fullhd'] = derived['fullhd'] || `calc(1344px + (2 * ${derived['gap']}))`

}

