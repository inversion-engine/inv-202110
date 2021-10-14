const path = require('path')

const root = path.dirname(__dirname)
const path_dist = path.resolve(root, 'dist')
const path_src = path.resolve(root, 'src')

module.exports = {
  mode: 'production',
  target: ['web', 'es2020'],
  entry: path.resolve(path_src, 'ui-worker-core.js'),
  output: {
    path: path_dist,
    filename: 'ui-worker-core.js',
  },
  module: {
    rules: [
      {
        resourceQuery: /raw/,
        //type: 'asset/source',
        loader: 'arraybuffer-loader'
      }
    ]
  }
}
