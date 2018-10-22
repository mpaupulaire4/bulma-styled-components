import { css } from 'styled-components'
import { overflow_touch } from '../utilities/mixins'

export default vars => css`
  html {
    background-color: ${vars['body-background-color']};
    font-size: ${vars['body-size']};
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    min-width: 300px;
    overflow-x: hidden;
    overflow-y: scroll;
    text-rendering: ${vars['body-rendering']};
    text-size-adjust: 100%;
  }

  body {
    color: ${vars['body-color']};
    font-size: 1rem;
    font-weight: ${vars['body-weight']};
    line-height: ${vars['body-line-height']};
  }

  html,
  body {
    &.has-navbar-fixed-top {
      padding-top: ${vars['navbar-height']};
    }
    &.has-navbar-fixed-bottom {
      padding-bottom: ${vars['navbar-height']};
    }
    /* touch */
    @media screen and (max-width: ${vars['desktop']} - 1px) {
      &.has-navbar-fixed-top-touch {
        padding-top: ${vars['navbar-height']};
      }
      &.has-navbar-fixed-bottom-touch {
        padding-bottom: ${vars['navbar-height']};
      }
    }
    /* desktop */
    @media screen and (min-width: ${vars['desktop']}) {
      &.has-navbar-fixed-top-desktop {
        padding-top: ${vars['navbar-height']};
      }
      &.has-navbar-fixed-bottom-desktop {
        padding-bottom: ${vars['navbar-height']};
      }
      &.has-spaced-navbar-fixed-top {
        padding-top: calc(${vars['navbar-height']} + (${vars['navbar-padding-vertical']} * 2));
      }
      &.has-spaced-navbar-fixed-bottom {
        padding-bottom: calc(${vars['navbar-height']} + (${vars['navbar-padding-vertical']} * 2));
      }
    }
  }
  article,
  aside,
  figure,
  footer,
  header,
  hgroup,
  section {
    display: block;
  }

  body,
  button,
  input,
  select,
  textarea {
    font-family: ${vars['body-family']};
  }

  code,
  pre {
    -moz-osx-font-smoothing: auto;
    -webkit-font-smoothing: auto;
    font-family: ${vars['code-family']};
  }

  /* Inline */

  a {
    color: ${vars['link']};
    cursor: pointer;
    text-decoration: none;
    strong {
      color: currentColor;
    }
    &:hover {
      color: ${vars['link-hover']};
    }
  }

  code {
    background-color: ${vars['code-background']};
    color: ${vars['code']};
    font-size: ${vars['code-size']};
    font-weight: ${vars['code-weight']};
    padding: ${vars['code-padding']};
  }

  hr {
    background-color: ${vars['hr-background-color']};
    border: none;
    display: block;
    height: ${vars['hr-height']};
    margin: ${vars['hr-margin']};
  }

  img {
    height: auto;
    max-width: 100%;
  }

  input[type="checkbox"],
  input[type="radio"] {
    vertical-align: baseline;
  }

  small {
    font-size: 0.875em;
  }

  span {
    font-style: inherit;
    font-weight: inherit;
  }

  strong { /* stylelint-disable-line no-descending-specificity */
    color: ${vars['strong-color']};
    font-weight: ${vars['strong-weight']};
  }

  /* Block */

  pre {
    ${overflow_touch}
    background-color: ${vars['pre-background']};
    color: ${vars['pre']};
    font-size: 0.875em;
    overflow-x: auto;
    padding: 1.25rem 1.5rem;
    white-space: pre;
    word-wrap: normal;
    code {
      background-color: transparent;
      color: currentColor;
      font-size: 1em;
      padding: 0;
    }
  }

  table {
    td,
    th {
      text-align: left;
      vertical-align: top;
    }
    th {
      color: ${vars['text-strong']};
    }
  }
`
