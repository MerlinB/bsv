var path = require('path')

module.exports = {
  entry: path.join(__dirname, '/dist/index.js'),
  externals: {
    crypto: 'crypto'
  },
  output: {
    library: 'bsv',
    path: path.join(__dirname, '/'),
    filename: 'bsv.min.js'
  }
}
