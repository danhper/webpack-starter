var path = require('path');

module.exports = {
  entry: path.join(path.dirname(__dirname), 'src', 'entry.js'),
  output: {
    path: path.dirname(__dirname),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' }
    ]
  },
  plugins: []
};
