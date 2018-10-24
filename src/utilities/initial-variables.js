import { hsl } from 'polished'
import { findColorInvert, mergeColorMaps, completeAssign } from './functions'
/* eslint-disable dot-notation, quote-props, key-spacing */

export default overrrides => completeAssign(BULMA_VARS_EXTEND({
  // Colors

  'black':        hsl(0, 0, 0.04),
  'black-bis':    hsl(0, 0, 0.07),
  'black-ter':    hsl(0, 0, 0.14),

  'grey-darker':  hsl(0, 0, 0.21),
  'grey-dark':    hsl(0, 0, 0.29),
  'grey':         hsl(0, 0, 0.48),
  'grey-light':   hsl(0, 0, 0.71),
  'grey-lighter': hsl(0, 0, 0.86),

  'white-ter':    hsl(0, 0, 0.96),
  'white-bis':    hsl(0, 0, 0.98),
  'white':        hsl(0, 0, 1),

  'orange':       hsl(14, 1, 0.53),
  'yellow':       hsl(48, 1, 0.67),
  'green':        hsl(141, 0.71, 0.48),
  'turquoise':    hsl(171, 1, 0.41),
  'cyan':         hsl(204, 0.86, 0.53),
  'blue':         hsl(217, 0.71, 0.53),
  'purple':       hsl(271, 1, 0.71),
  'red':          hsl(348, 1, 0.61),

  // Typography

  'family-sans-serif': 'BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
  'family-monospace': 'monospace',
  'render-mode': 'optimizeLegibility',

  'size-1': '3rem',
  'size-2': '2.5rem',
  'size-3': '2rem',
  'size-4': '1.5rem',
  'size-5': '1.25rem',
  'size-6': '1rem',
  'size-7': '0.75rem',

  'weight-light':     '300',
  'weight-normal':    '400',
  'weight-medium':    '500',
  'weight-semibold':  '600',
  'weight-bold':      '700',

  // Responsiveness

  // The container horizontal gap, which acts as the offset for breakpoints
  'gap': '64px',
  // 960, 1152, and 1344 have been chosen because they are divisible by both 12 and 16
  'tablet': '769px',

  'widescreen-enabled': true,

  'fullhd-enabled': true,

  // Miscellaneous

  'easing': 'ease-out',
  'radius-small': '2px',
  'radius': '4px',
  'radius-large': '6px',
  'radius-rounded': '290486px',
  'speed': '86ms',

  // Flags

  'variable-columns': true,

  // Control
  'control-border-width': '1px',

  // Generic
  'body-size': '16px ',
  'body-rendering': 'optimizeLegibility',
  'body-line-height': '1.5',

  'code-padding': '0.25em 0.5em 0.25em',
  'code-weight': 'normal',
  'code-size': '0.875em',

  'hr-height': '2px',
  'hr-margin': '1.5rem 0',

  // Derived Variables
  get 'primary'() { return this['turquoise'] },
  get 'info'() { return this['cyan'] },
  get 'success'() { return this['green'] },
  get 'warning'() { return this['yellow'] },
  get 'danger'() { return this['red'] },

  get 'light'() { return this['white-ter'] },
  get 'dark'() { return this['grey-darker'] },

  // Invert colors

  get 'orange-invert'() { return findColorInvert(this['orange']) },
  get 'yellow-invert'() { return findColorInvert(this['yellow']) },
  get 'green-invert'() { return findColorInvert(this['green']) },
  get 'turquoise-invert'() { return findColorInvert(this['turquoise']) },
  get 'cyan-invert'() { return findColorInvert(this['cyan']) },
  get 'blue-invert'() { return findColorInvert(this['blue']) },
  get 'purple-invert'() { return findColorInvert(this['purple']) },
  get 'red-invert'() { return findColorInvert(this['red']) },

  get 'primary-invert'() { return this['turquoise-invert'] },
  get 'info-invert'() { return this['cyan-invert'] },
  get 'success-invert'() { return this['green-invert'] },
  get 'warning-invert'() { return this['yellow-invert'] },
  get 'danger-invert'() { return this['red-invert'] },
  get 'light-invert'() { return this['dark'] },
  get 'dark-invert'() { return this['light'] },

  // General colors

  get 'background'() { return this['white-ter'] },

  get 'border'() { return this['grey-lighter'] },
  get 'border-hover'() { return this['grey-light'] },

  // Text colors

  get 'text'() { return this['grey-dark'] },
  get 'text-invert'() { return findColorInvert(this['text']) },
  get 'text-light'() { return this['grey'] },
  get 'text-strong'() { return this['grey-darker'] },

  // Code colors

  get 'code'() { return this['red'] },
  get 'code-background'() { return this['background'] },

  get 'pre'() { return this['text'] },
  get 'pre-background'() { return this['background'] },

  // Link colors

  get 'link'() { return this['blue'] },
  get 'link-invert'() { return this['blue-invert'] },
  get 'link-visited'() { return this['purple'] },

  get 'link-hover'() { return this['grey-darker'] },
  get 'link-hover-border'() { return this['grey-light'] },

  get 'link-focus'() { return this['grey-darker'] },
  get 'link-focus-border'() { return this['blue'] },

  get 'link-active'() { return this['grey-darker'] },
  get 'link-active-border'() { return this['grey-dark'] },

  // Typography

  get 'family-primary'() { return this['family-sans-serif'] },
  get 'family-code'() { return this['family-monospace'] },

  get 'size-small'() { return this['size-7'] },
  get 'size-normal'() { return this['size-6'] },
  get 'size-medium'() { return this['size-5'] },
  get 'size-large'() { return this['size-4'] },

  // Lists and maps
  get 'colors'() {
    return mergeColorMaps({
      'white': [this['white'], this['black']],
      'black': [this['black'], this['white']],
      'light': [this['light'], this['light-invert']],
      'dark': [this['dark'], this['dark-invert']],
      'primary': [this['primary'], this['primary-invert']],
      'link': [this['link'], this['link-invert']],
      'info': [this['info'], this['info-invert']],
      'success': [this['success'], this['success-invert']],
      'warning': [this['warning'], this['warning-invert']],
      'danger': [this['danger'], this['danger-invert']],
    }, this['custom-colors'])
  },


  get 'shades'() {
    return {
      'black-bis': this['black-bis'],
      'black-ter': this['black-ter'],
      'grey-darker': this['grey-darker'],
      'grey-dark': this['grey-dark'],
      'grey': this['grey'],
      'grey-light': this['grey-light'],
      'grey-lighter': this['grey-lighter'],
      'white-ter': this['white-ter'],
      'white-bis': this['white-bis'],
      ...this['custom-shades'],
    }
  },

  get 'sizes'() {
    return [
      this['size-1'],
      this['size-2'],
      this['size-3'],
      this['size-4'],
      this['size-5'],
      this['size-6'],
      this['size-7'],
    ]
  },

  // 960px container + 4rem
  get 'desktop'() { return `calc(960px + (2 * ${this['gap']}))` },
  // 1152px container + 4rem
  get 'widescreen'() { return `calc(1152px + (2 * ${this['gap']}))` },
  // 1344px container + 4rem
  get 'fullhd'() { return `calc(1344px + (2 * ${this['gap']}))` },

  get 'control-radius'() { return this['radius'] },

  get 'control-radius-small'() { return this['radius-small'] },

  get 'control-padding-vertical'() { return `calc(0.375em - ${this['control-border-width']})` },

  get 'control-padding-horizontal'() { return `calc(0.625em - ${this['control-border-width']})` },

  get 'body-background-color'() { return this['white'] },
  get 'body-family'() { return this['family-primary'] },
  get 'body-color'() { return this['text'] },
  get 'body-weight'() { return this['weight-normal'] },
  get 'code-family'() { return this['family-code'] },
  get 'hr-background-color'() { return this['background'] },
  get 'strong-color'() { return this['text-strong'] },
  get 'strong-weight'() { return this['weight-bold'] },
}), overrrides)
