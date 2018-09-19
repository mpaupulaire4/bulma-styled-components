/* eslint-disable import/no-extraneous-dependencies, global-require */
import { pageLoader } from 'catalog'

export default {
  title: 'Form',
  pages: [
    {
      title: 'File',
      path: '/form/File',
      content: pageLoader(() => import('./File.md')),
    },
    {
      title: 'Input',
      path: '/form/Input',
      frame: true,
      content: pageLoader(() => import('./Input.md')),
    },
    {
      title: 'Textarea',
      path: '/form/Textarea',
      frame: true,
      content: pageLoader(() => import('./Textarea.md')),
    },
  ],
}
