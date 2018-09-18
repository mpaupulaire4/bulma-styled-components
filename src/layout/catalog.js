/* eslint-disable import/no-extraneous-dependencies, global-require */
import { pageLoader } from 'catalog'

export default {
  title: 'Layout',
  pages: [
    {
      title: 'Columns',
      path: '/layout/Columns',
      content: pageLoader(() => import('./Columns.md')),
    },
    // {
    //   title: 'Buttons',
    //   path: '/layout/Buttons',
    //   frame: true,
    //   content: pageLoader(() => import('./Buttons.md')),
    // },
    // {
    //   title: 'Content',
    //   path: '/layout/Content',
    //   frame: true,
    //   content: pageLoader(() => import('./Content.md')),
    // },
    // {
    //   title: 'Delete',
    //   path: '/layout/Delete',
    //   frame: true,
    //   content: pageLoader(() => import('./Delete.md')),
    // },
    // {
    //   title: 'Icon',
    //   path: '/layout/Icon',
    //   frame: true,
    //   content: pageLoader(() => import('./Icon.md')),
    // },
    // {
    //   title: 'Image',
    //   path: '/layout/Image',
    //   frame: true,
    //   content: pageLoader(() => import('./Image.md')),
    // },
    // {
    //   title: 'Notification',
    //   path: '/layout/Notification',
    //   frame: true,
    //   content: pageLoader(() => import('./Notification.md')),
    // },
    // {
    //   title: 'Progress',
    //   path: '/layout/Progress',
    //   frame: true,
    //   content: pageLoader(() => import('./Progress.md')),
    // },
    // {
    //   title: 'Table',
    //   path: '/layout/Table',
    //   frame: true,
    //   content: pageLoader(() => import('./Table.md')),
    // },
    // {
    //   title: 'Tags',
    //   path: '/layout/Tags',
    //   frame: true,
    //   content: pageLoader(() => import('./Tags.md')),
    // },
  ],
}
