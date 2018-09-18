/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import ReactDOM from 'react-dom'
import { Catalog, pageLoader } from 'catalog'
import Elements from '../src/elements/catalog'

const pages = [
  {
    path: '/',
    title: 'Introduction',
    content: pageLoader(() => import('../README.md')),
  },
  Elements,
]

ReactDOM.render(
  <Catalog
    title="Bulma Styled Components"
    pages={pages}
    styles={['fontawesome/css/fontawesome.min.css']}
  />,
  document.getElementById('catalog'),
)
