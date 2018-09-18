/* eslint-disable import/no-extraneous-dependencies, global-require */
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
      title: 'Buttons',
      path: '/elements/Buttons',
      frame: true,
      imports: {
        Button: require('./Button'),
        Buttons: require('./Buttons'),
      },
      content: pageLoader(() => import('./Buttons.md')),
    },
    {
      title: 'Content',
      path: '/elements/Content',
      frame: true,
      imports: {
        Content: require('./Content'),
      },
      content: pageLoader(() => import('./Content.md')),
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
