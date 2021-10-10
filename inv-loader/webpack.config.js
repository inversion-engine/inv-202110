const path = require('path')

module.exports = {
  mode: 'production',
  target: ['web', 'es2020'],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    }
  }
}
