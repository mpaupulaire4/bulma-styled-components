import { css } from 'styled-components'
import { clearFix } from 'polished'
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
} from '../utilities/mixins'
import { fromTheme } from '../utilities/functions'

const helpers = {
  // Float
  'is-clearfix': clearFix(),
  'is-pulled-left': 'float: left !important;',
  'is-pulled-right': 'float: right !important;',
  // Overflow
  'is-clipped': 'overflow: hidden !important;',

  // Overlay

  'is-overlay': overlay(),
}


// Typography

for (let x = 1; x < 8; x++) {
  helpers[`is-size-${x}`] = css`
    font-size: ${props => props.theme.sizes[index]};
  `
}

function responsiveType(target, tag) {
  for (let x = 1; x < 8; x++) {
    helpers[`is-size-${x}-${target}`] = tag(css`
      font-size: ${props => props.theme.sizes[index]};
    `)
  }
}

// Typography
responsiveType('mobile', mobile)
responsiveType('tablet', tablet)
responsiveType('touch', touch)
responsiveType('desktop', desktop)
responsiveType('widescreen', widescreen)
responsiveType('fullhd', fullhd)

const alignments = {
  'centered': 'center',
  'justified': 'justify',
  'left': 'left',
  'right': 'right'
}

Object.entries(alignments).forEach((entry) => {
  helpers[`has-text-${entry[0]}`] = css`
    text-align: ${entry[1]} !important;
  `
})

Object.entries(alignments).forEach((entry) => {
  helpers[`has-text-${entry[0]}-mobile`] = mobile(css`
    text-align: ${entry[1]} !important;
  `)
  helpers[`has-text-${entry[0]}-tablet`] = tablet(css`
    text-align: ${entry[1]} !important;
  `)
  helpers[`has-text-${entry[0]}-tablet-only`] = tablet_only(css`
    text-align: ${entry[1]} !important;
  `)
  helpers[`has-text-${entry[0]}-touch`] = touch(css`
    text-align: ${entry[1]} !important;
  `)
  helpers[`has-text-${entry[0]}-desktop`] = desktop(css`
    text-align: ${entry[1]} !important;
  `)
  helpers[`has-text-${entry[0]}-desktop-only`] = desktop_only(css`
    text-align: ${entry[1]} !important;
  `)
  helpers[`has-text-${entry[0]}-widescreen`] = widescreen(css`
    text-align: ${entry[1]} !important;
  `)
  helpers[`has-text-${entry[0]}-widescreen-only`] = widescreen_only(css`
    text-align: ${entry[1]} !important;
  `)
  helpers[`has-text-${entry[0]}-fullhd`] = fullhd(css`
    text-align: ${entry[1]} !important;
  `)
})

.is-capitalized
  text-transform: capitalize !important

.is-lowercase
  text-transform: lowercase !important

.is-uppercase
  text-transform: uppercase !important

.is-italic
  font-style: italic !important

@each $name, $pair in $colors
  $color: nth($pair, 1)
  .has-text-#{$name}
    color: $color !important
  a.has-text-#{$name}
    &:hover,
    &:focus
      color: darken($color, 10%) !important
  .has-background-#{$name}
    background-color: $color !important

@each $name, $shade in $shades
  .has-text-#{$name}
    color: $shade !important
  .has-background-#{$name}
    background-color: $shade !important

.has-text-weight-light
  font-weight: $weight-light !important
.has-text-weight-normal
  font-weight: $weight-normal !important
.has-text-weight-semibold
  font-weight: $weight-semibold !important
.has-text-weight-bold
  font-weight: $weight-bold !important

// Visibility

$displays: 'block' 'flex' 'inline' 'inline-block' 'inline-flex'

@each $display in $displays
  .is-#{$display}
    display: #{$display} !important
  +mobile
    .is-#{$display}-mobile
      display: #{$display} !important
  +tablet
    .is-#{$display}-tablet
      display: #{$display} !important
  +tablet-only
    .is-#{$display}-tablet-only
      display: #{$display} !important
  +touch
    .is-#{$display}-touch
      display: #{$display} !important
  +desktop
    .is-#{$display}-desktop
      display: #{$display} !important
  +desktop-only
    .is-#{$display}-desktop-only
      display: #{$display} !important
  +widescreen
    .is-#{$display}-widescreen
      display: #{$display} !important
  +widescreen-only
    .is-#{$display}-widescreen-only
      display: #{$display} !important
  +fullhd
    .is-#{$display}-fullhd
      display: #{$display} !important

.is-hidden
  display: none !important

+mobile
  .is-hidden-mobile
    display: none !important

+tablet
  .is-hidden-tablet
    display: none !important

+tablet-only
  .is-hidden-tablet-only
    display: none !important

+touch
  .is-hidden-touch
    display: none !important

+desktop
  .is-hidden-desktop
    display: none !important

+desktop-only
  .is-hidden-desktop-only
    display: none !important

+widescreen
  .is-hidden-widescreen
    display: none !important

+widescreen-only
  .is-hidden-widescreen-only
    display: none !important

+fullhd
  .is-hidden-fullhd
    display: none !important

.is-invisible
  visibility: hidden !important

+mobile
  .is-invisible-mobile
    visibility: hidden !important

+tablet
  .is-invisible-tablet
    visibility: hidden !important

+tablet-only
  .is-invisible-tablet-only
    visibility: hidden !important

+touch
  .is-invisible-touch
    visibility: hidden !important

+desktop
  .is-invisible-desktop
    visibility: hidden !important

+desktop-only
  .is-invisible-desktop-only
    visibility: hidden !important

+widescreen
  .is-invisible-widescreen
    visibility: hidden !important

+widescreen-only
  .is-invisible-widescreen-only
    visibility: hidden !important

+fullhd
  .is-invisible-fullhd
    visibility: hidden !important

// Other

.is-marginless
  margin: 0 !important

.is-paddingless
  padding: 0 !important

.is-radiusless
  border-radius: 0 !important

.is-shadowless
  box-shadow: none !important

.is-unselectable
  +unselectable
