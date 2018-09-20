import File from './File.md'
import Input from './Input.md'
import Textarea from './Textarea.md'

export default {
  title: 'Form',
  pages: [
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
