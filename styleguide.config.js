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
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/',
              },
            },
          ],
        },
      ],
    },
  },
  require: [
    path.join(__dirname, 'styleguide/fontawesome/css/font-awesome.min.css'),
  ],
  title: 'Bulma Styled Components',
  sections: [
    {
      name: '',
      // description: 'A Styled Components implementation of Bulma CSS',
      content: 'README.md',
    },
    {
      name: 'Elements',
      components: 'src/elements/*.js',
    },
    {
      name: 'Layout',
      components: 'src/layout/*.js',
    },
    {
      name: 'Form',
      components: 'src/form/*.js',
    },
    {
      name: 'Components',
      components: 'src/components/*.js',
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
