/* eslint-disable import/no-extraneous-dependencies */
import { pageLoader } from 'catalog'


export default {
  title: 'Elements',
  pages: [
    {
      title: 'Box',
      path: '/elements/Box',
      frame: true,
      imports: {
        Box: require('./Box'),
      },
      content: pageLoader(() => import('./Box.md')),
    },
    {
      title: 'Button',
      path: '/elements/Button',
      frame: true,
      imports: {
        Button: require('./Button'),
        Buttons: require('./Buttons'),
      },
      content: pageLoader(() => import('./Button.md')),
    },
    {
      title: 'Box',
      path: '/elements/Box',
      frame: true,
      imports: {
        Box: require('./Box'),
      },
      content: pageLoader(() => import('./Box.md')),
    },
    {
      title: 'Box',
      path: '/elements/Box',
      frame: true,
      imports: {
        Box: require('./Box'),
      },
      content: pageLoader(() => import('./Box.md')),
    },
    {
      title: 'Box',
      path: '/elements/Box',
      frame: true,
      imports: {
        Box: require('./Box'),
      },
      content: pageLoader(() => import('./Box.md')),
    },
    {
      title: 'Box',
      path: '/elements/Box',
      frame: true,
      imports: {
        Box: require('./Box'),
      },
      content: pageLoader(() => import('./Box.md')),
    },
    {
      title: 'Box',
      path: '/elements/Box',
      frame: true,
      imports: {
        Box: require('./Box'),
      },
      content: pageLoader(() => import('./Box.md')),
    },
  ],
}
