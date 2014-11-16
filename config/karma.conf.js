var _ = require('lodash');

module.exports = function(config) {
  config.set({

    basePath: '../',

    frameworks: ['mocha', 'chai'],

    files: [
        'test/*_test.js',
        'test/**/*_test.js',
        {
          pattern: 'src/**/*',
          included: false,
          served: false
        }
    ],

    preprocessors: {
        'test/**/*.js': ['webpack', 'sourcemap']
    },

    webpack: _.extend(require('./webpack.config'), {
      devtool: 'inline-source-map'
    }),

    webpackServer: {
        noInfo: true
    },

    webpackPort: 8085,

    browsers: ['PhantomJS'],

    plugins: [
      require('karma-mocha'),
      require('karma-chai'),
      require('karma-phantomjs-launcher'),
      require('karma-webpack'),
      require('karma-sourcemap-loader')
    ]
  });
};
