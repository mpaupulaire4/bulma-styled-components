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
  components: 'src/{components,layout,elements}/**/*.js',
  getComponentPathLine: (componentPath) => {
    const name = path.basename(componentPath, '.js')
    return `import { ${name} } from '${packageInfo.name}'`
  },
}
