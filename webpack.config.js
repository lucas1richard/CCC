const path = require('path');

module.exports = {
  // devtool: 'source-map',
  entry: path.join(__dirname, '/browser/react/index.js'),
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
    // test environment build
  test: function (config) {
    return {
      entry: 'webpack.tests.js',
      output: _.assign({}, config.output, {
        // client assets are output to dist/test/
        path: path.join(config.output.path, 'test'),
        publicPath: undefined // no assets CDN
      }),
      devtool: 'inline-source-map', // sourcemap support
      plugins: config.plugins.concat(
        new webpack.DefinePlugin({
          'typeof window': JSON.stringify("object")
        })
      )
    };
  }
};
