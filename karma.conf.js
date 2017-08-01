// var webpackConfig = require('./webpack.config.js');

// module.exports = function(config) {
//   config.set({

//     // Add any browsers here
//     browsers: ['Chrome'],
//     frameworks: ['mocha'],

//     // The entry point for our test suite
//     basePath: __dirname,
//     autoWatch: false,
//     files: ['webpack.tests.js'],
//     preprocessors: {
//       // Run this through webpack, and enable inline sourcemaps
//       'webpack.tests.js': ['webpack', 'sourcemap'],
//     },

//     webpack: webpackConfig.test,
//     client: {
//       // log console output in our test console
//       captureConsole: true
//     },

//     reporters: ['dots'],
//     singleRun: false, // exit after tests have completed

//     webpackMiddleware: {
//       noInfo: true
//     },

//     // Webpack takes a little while to compile -- this manifests as a really
//     // long load time while webpack blocks on serving the request.
//     browserNoActivityTimeout: 60000, // 60 seconds

//   });
// };

var webpack = require('webpack');

module.exports = function(config) {
  config.set({
    basePath: __dirname,
    frameworks: ['mocha', /* 'requirejs', */ 'chai'],
    files: [
      // 'dist/bundle.js',
      // 'browser/react/index.js',
      'webpack.tests.js',
    ],
    exclude: [
    ],
    preprocessors: {
      'webpack.tests.js': ['webpack']
      // 'browser/react/index.js': ['webpack', 'sourcemap']
    },
    reporters: ['progress', 'dots'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.js$/, loader: 'babel-loader'}
        ]
      }
    },

    webpackServer: {
      noInfo: true
    },

    plugins: [
      require('karma-webpack'),
      require('karma-mocha'),
      require('karma-chai'),
      require('karma-chrome-launcher'),
    ]
  });
};
