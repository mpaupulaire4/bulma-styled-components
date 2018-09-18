const path = require('path')

module.exports = {
  webpack: (catalogWebpackConfig) => {
    const modifiedWebpackConfig = catalogWebpackConfig
    modifiedWebpackConfig.output.path = path.resolve('./docs')
    return modifiedWebpackConfig
  },
}
