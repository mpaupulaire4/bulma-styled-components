import File from './File.md'
import Input from './Input.md'
import Textarea from './Textarea.md'
import Overview from './Overview.md'

export default {
  title: 'Form',
  pages: [
    {
      title: 'Overview',
      path: '/form/overciew',
      content: Overview,
    },
    {
      title: 'File',
      path: '/form/File',
      content: File,
    },
    {
      title: 'Input',
      path: '/form/Input',
      frame: true,
      content: Input,
    },
    {
      title: 'Textarea',
      path: '/form/Textarea',
      frame: true,
      content: Textarea,
    },
  ],
}
