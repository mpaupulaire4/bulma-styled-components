/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import ReactDOM from 'react-dom'
import { Catalog } from 'catalog'
import * as Components from '../src'
import Elements from '../src/elements/catalog'
import Layout from '../src/layout/catalog'
import Comps from '../src/components/catalog'
import Form from '../src/form/catalog'
import README from '../README.md'
import Overrides from '../Overrides.md'

const pages = [
  {
    path: '/',
    title: 'Introduction',
    content: README,
  },
  {
    path: '/overrides',
    title: 'Overriding',
    content: Overrides,
  },
  Elements,
  Layout,
  Form,
  Comps,
]

ReactDOM.render(
  <Components.BulmaStyledTheme>
    <Components.ThemeConsumer>
      {({ theme }) => (
        <Catalog
          title="Bulma Styled Components"
          pages={pages}
          imports={Components}
          responsiveSizes={[
            {name: 'mobile', width: 320, height: 588},
            {name: 'tablet', width: 769, height: 1024},
            {name: 'desktop', width: 1024, height: 768},
            {name: 'widescreen', width: 1280, height: 800},
            {name: 'fullhd', width: 1440, height: 900},
          ]}
          theme={{
            checkerboardPatternLight: '#fff',
            linkColor: theme.link,
            pageHeadingBackground: theme.primary,
            pageHeadingHeight: 125,
            sidebarColorText: theme['link-active'],
            sidebarColorTextActive: theme.link,
            sidebarColorHeading: theme['link-active'],
            fontFamily: theme['family-sans-serif'],
            fontHeading: theme['family-sans-serif'],
            fontMono: theme['family-monospace'],
          }}
        />
      )}
    </Components.ThemeConsumer>
  </Components.BulmaStyledTheme>,
  document.getElementById('catalog'),
)
