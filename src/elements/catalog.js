/* eslint-disable import/no-extraneous-dependencies, global-require */
import { pageLoader } from 'catalog'

export default {
  title: 'Elements',
  pages: [
    {
      title: 'Box',
      path: '/elements/Box',
      frame: true,
      content: pageLoader(() => import('./Box.md')),
    },
    {
      title: 'Button',
      path: '/elements/Button',
      frame: true,
      content: pageLoader(() => import('./Button.md')),
    },
    {
      title: 'Buttons',
      path: '/elements/Buttons',
      frame: true,
      content: pageLoader(() => import('./Buttons.md')),
    },
    {
      title: 'Content',
      path: '/elements/Content',
      frame: true,
      content: pageLoader(() => import('./Content.md')),
    },
    {
      title: 'Delete',
      path: '/elements/Delete',
      frame: true,
      content: pageLoader(() => import('./Delete.md')),
    },
    {
      title: 'Icon',
      path: '/elements/Icon',
      frame: true,
      content: pageLoader(() => import('./Icon.md')),
    },
    {
      title: 'Image',
      path: '/elements/Image',
      frame: true,
      content: pageLoader(() => import('./Image.md')),
    },
    {
      title: 'Notification',
      path: '/elements/Notification',
      frame: true,
      content: pageLoader(() => import('./Notification.md')),
    },
    {
      title: 'Progress',
      path: '/elements/Progress',
      frame: true,
      content: pageLoader(() => import('./Progress.md')),
    },
    {
      title: 'Table',
      path: '/elements/Table',
      frame: true,
      content: pageLoader(() => import('./Table.md')),
    },
    {
      title: 'Box',
      path: '/elements/Box',
      frame: true,
      content: pageLoader(() => import('./Box.md')),
    },
  ],
}
