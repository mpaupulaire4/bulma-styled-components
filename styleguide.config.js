const packageInfo = require('./package')
const path = require('path')

module.exports = {
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
  },
  title: 'Bulma Styled Components',
  sections: [
    {
      name: 'Introduction',
      description: 'A Styled Components implementation of Bulma CSS',
    },
    {
      name: 'Elements',
      components: 'src/elements/*.js',
      ignore: [
        'src/elements/index.js',
      ],
    },
    {
      name: 'Components',
      components: 'src/components/*.js',
      ignore: [
        'src/components/index.js',
      ],
    },
    {
      name: 'Layout',
      components: 'src/layout/*.js',
      ignore: 'src/layout/index.js',
    },
  ],
  getComponentPathLine: (componentPath) => {
    const name = path.basename(componentPath, '.js')
    return `import { ${name} } from '${packageInfo.name}'`
  },
  styleguideDir: 'docs/',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/base/index'),
  },
  skipComponentsWithoutExample: true,
}
