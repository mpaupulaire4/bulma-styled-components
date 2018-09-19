/* eslint-disable import/no-extraneous-dependencies, global-require */
import { pageLoader } from 'catalog'

export default {
  title: 'Components',
  pages: [
    {
      title: 'Breadcrumb',
      path: '/layout/Breadcrumb',
      frame: true,
      content: pageLoader(() => import('./Breadcrumb.md')),
    },
    {
      title: 'Card',
      path: '/layout/Card',
      frame: true,
      content: pageLoader(() => import('./Card.md')),
    },
    {
      title: 'Dropdown',
      path: '/layout/Dropdown',
      frame: true,
      content: pageLoader(() => import('./Dropdown.md')),
    },
    {
      title: 'Menu',
      path: '/layout/Menu',
      frame: true,
      content: pageLoader(() => import('./Menu.md')),
    },
    {
      title: 'Message',
      path: '/layout/Message',
      frame: true,
      content: pageLoader(() => import('./Message.md')),
    },
    {
      title: 'Modal',
      path: '/layout/Modal',
      frame: true,
      content: pageLoader(() => import('./Modal.md')),
    },
    {
      title: 'Navbar',
      path: '/layout/Navbar',
      frame: true,
      content: pageLoader(() => import('./Navbar.md')),
    },
    {
      title: 'Pagination',
      path: '/layout/Pagination',
      frame: true,
      content: pageLoader(() => import('./Pagination.md')),
    },
    {
      title: 'Panel',
      path: '/layout/Panel',
      frame: true,
      content: pageLoader(() => import('./Panel.md')),
    },
    {
      title: 'Tabs',
      path: '/layout/Tabs',
      frame: true,
      content: pageLoader(() => import('./Tabs.md')),
    },
  ],
}
