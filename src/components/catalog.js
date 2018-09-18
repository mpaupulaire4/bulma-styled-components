/* eslint-disable import/no-extraneous-dependencies, global-require */
import { pageLoader } from 'catalog'

export default {
  title: 'Layout',
  pages: [
    {
      title: 'Columns',
      path: '/layout/Columns',
      frame: true,
      content: pageLoader(() => import('./Columns.md')),
    },
    {
      title: 'Footer',
      path: '/layout/Footer',
      frame: true,
      content: pageLoader(() => import('./Footer.md')),
    },
    {
      title: 'Hero',
      path: '/layout/Hero',
      frame: true,
      content: pageLoader(() => import('./Hero.md')),
    },
    {
      title: 'Media',
      path: '/layout/Media',
      content: pageLoader(() => import('./Media.md')),
    },
  ],
}
