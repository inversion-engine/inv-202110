const path = require('path')

const root = path.dirname(__dirname)
const path_dist = path.resolve(root, 'dist')
const path_src = path.resolve(root, 'src')

module.exports = {
  mode: 'production',
  target: ['webworker', 'es2020'],
  entry: path.resolve(path_src, 'web-worker-core.js'),
  output: {
    path: path_dist,
    filename: 'web-worker-core.js',
  }
}
