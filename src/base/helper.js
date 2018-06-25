import { css } from 'styled-components'
import { clearFix, darken } from 'polished'
import {
  overlay,
  mobile,
  tablet,
  touch,
  desktop,
  widescreen,
  fullhd,
  tablet_only,
  widescreen_only,
  desktop_only,
  unselectable,
} from '../utilities/mixins'
import { fromTheme } from '../utilities/functions'

const alignments = {
  centered: 'center',
  justified: 'justify',
  left: 'left',
  right: 'right',
}
const displays = [
  'block',
  'flex',
  'inline',
  'inline-block',
  'inline-flex',
]

export default css`
  /* Float */
  .is-clearfix {
    ${clearFix()}
  }

  .is-pulled-left {
    float: left !important;
  }

  .is-pulled-right {
    float: right !important;
  }

  /* Overflow */
  .is-clipped {
    overflow: hidden !important;
  }

  /* Overlay */
  .is-overlay {
    ${overlay()}
  }

  /* Typography */
  ${({ theme }) => theme.sizes.reduce((acc, size, i) => css`
    ${acc}
    .is-size-${i + 1} {
      font-size: ${size} !important;
    }
    ${mobile`
      .is-size-${i + 1}-mobile {
        font-size: ${size} !important;
      }
    `}
    ${tablet`
      .is-size-${i + 1}-tablet {
        font-size: ${size} !important;
      }
    `}
    ${touch`
      .is-size-${i + 1}-touch {
        font-size: ${size} !important;
      }
    `}
    ${desktop`
      .is-size-${i + 1}-desktop {
        font-size: ${size} !important;
      }
    `}
    ${widescreen`
      .is-size-${i + 1}-widescreen {
        font-size: ${size} !important;
      }
    `}
    ${fullhd`
      .is-size-${i + 1}-fullhd {
        font-size: ${size} !important;
      }
    `}
  `, '')}

  ${(Object.entries(alignments)).reduce((acc, [alignment, text_align]) => css`
    ${acc}
    .has-text-${alignment} {
      text-align: ${text_align} !important;
    }
    ${mobile`
      .has-text-${alignment}-mobile {
        text-align: ${text_align} !important;
      }
    `}
    ${tablet`
      .has-text-${alignment}-tablet {
        text-align: ${text_align} !important;
      }
    `}
    ${tablet_only`
      .has-text-${alignment}-tablet-only {
        text-align: ${text_align} !important;
      }
    `}
    ${touch`
      .has-text-${alignment}-touch {
        text-align: ${text_align} !important;
      }
    `}
    ${desktop`
      .has-text-${alignment}-desktop {
        text-align: ${text_align} !important;
      }
    `}
    ${desktop_only`
      .has-text-${alignment}-desktop-only {
        text-align: ${text_align} !important;
      }
    `}
    ${widescreen`
      .has-text-${alignment}-widescreen {
        text-align: ${text_align} !important;
      }
    `}
    ${widescreen_only`
      .has-text-${alignment}-widescreen-only {
        text-align: ${text_align} !important;
      }
    `}
    ${fullhd`
      .has-text-${alignment}-fullhd {
        text-align: ${text_align} !important;
      }
    `}
  `, '')}

  .is-capitalized {
    text-transform: capitalize !important;
  }

  .is-lowercase {
    text-transform: lowercase !important;
  }

  .is-uppercase {
    text-transform: uppercase !important;
  }

  .is-italic {
    font-style: italic !important;
  }

  ${({ theme }) => Object.entries(theme['colors']).reduce((acc, [name, [color]]) => css`
    ${acc}
    .has-text-${name} {
      color: ${color} !important;
    }
    a.has-text-${name} {
      &:hover,
      &:focus {
        color: ${darken(0.1, color)} !important;
      }
    }
    .has-background-${name} {
      background-color: ${color} !important;
    }
  `, '')}
  ${({ theme }) => Object.entries(theme['shades']).reduce((acc, [name, shade]) => css`
    ${acc}
    .has-text-${name} {
      color: ${shade} !important;
    }
    .has-background-${name} {
      background-color: ${shade} !important;
    }
  `, '')}

  .has-text-weight-light {
    font-weight: ${fromTheme('weight-light')} !important;
  }
  .has-text-weight-normal {
    font-weight: ${fromTheme('weight-normal')} !important;
  }
  .has-text-weight-semibold {
    font-weight: ${fromTheme('weight-semibold')} !important;
  }
  .has-text-weight-bold {
    font-weight: ${fromTheme('weight-bold')} !important;
  }

  /* Visibility */
  ${displays.reduce((acc, display) => css`
    ${acc}
    .is-${display} {
      display: ${display} !important;
    }
    ${mobile`
      .is-${display}-mobile {
        display: ${display} !important;
      }
    `}
    ${tablet`
      .is-${display}-tablet {
        display: ${display} !important;
      }
    `}
    ${tablet_only`
      .is-${display}-tablet-only {
        display: ${display} !important;
      }
    `}
    ${touch`
      .is-${display}-touch {
        display: ${display} !important;
      }
    `}
    ${desktop`
      .is-${display}-desktop {
        display: ${display} !important;
      }
    `}
    ${desktop_only`
      .is-${display}-desktop-only {
        display: ${display} !important;
      }
    `}
    ${widescreen`
      .is-${display}-widescreen {
        display: ${display} !important;
      }
    `}
    ${widescreen_only`
      .is-${display}-widescreen-only {
        display: ${display} !important;
      }
    `}
    ${fullhd`
      .is-${display}-fullhd {
        display: ${display} !important;
      }
    `}
  `, '')}

  .is-hidden {
    display: none !important;
  }

  ${mobile`
    .is-hidden-mobile {
      display: none !important;
    }
  `}

  ${tablet`
    .is-hidden-tablet {
      display: none !important;
    }
  `}

  ${tablet_only`
    .is-hidden-tablet-only {
      display: none !important;
    }
  `}

  ${touch`
    .is-hidden-touch {
      display: none !important;
    }
  `}

  ${desktop`
    .is-hidden-desktop {
      display: none !important;
    }
  `}

  ${desktop_only`
    .is-hidden-desktop-only {
      display: none !important;
    }
  `}

  ${widescreen`
    .is-hidden-widescreen {
      display: none !important;
    }
  `}

  ${widescreen_only`
    .is-hidden-widescreen-only {
      display: none !important;
    }
  `}

  ${fullhd`
    .is-hidden-fullhd {
      display: none !important;
    }
  `}

  .is-invisible {
    visibility: hidden !important;
  }

  ${mobile`
    .is-invisible-mobile {
      visibility: hidden !important;
    }
  `}

  ${tablet`
    .is-invisible-tablet {
      visibility: hidden !important;
    }
  `}

  ${tablet_only`
    .is-invisible-tablet-only {
      visibility: hidden !important;
    }
  `}

  ${touch`
    .is-invisible-touch {
      visibility: hidden !important;
    }
  `}

  ${desktop`
    .is-invisible-desktop {
      visibility: hidden !important;
    }
  `}

  ${desktop_only`
    .is-invisible-desktop-only {
      visibility: hidden !important;
    }
  `}

  ${widescreen`
    .is-invisible-widescreen {
      visibility: hidden !important;
    }
  `}

  ${widescreen_only`
    .is-invisible-widescreen-only {
      visibility: hidden !important;
    }
  `}

  ${fullhd`
    .is-invisible-fullhd {
      visibility: hidden !important;
    }
  `}

  /* Other */

  .is-marginless {
    margin: 0 !important;
  }

  .is-paddingless {
    padding: 0 !important;
  }

  .is-radiusless {
    border-radius: 0 !important;
  }

  .is-shadowless {
    box-shadow: none !important;
  }

  .is-unselectable {
    ${unselectable}
  }
`
